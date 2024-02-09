import { action, makeObservable, observable, runInAction } from 'mobx';
import { type IProfile, type IFolder, type IProject } from './storeTypes';
import {
  getFolderItemsByParentId,
  getProfileByElemId,
  getProjectByElemId,
} from '../api';

export type TWindowStatus = 'collapse' | 'open';
export type TWindowType = 'folder' | 'profile' | 'project';

interface IWindow {
  id: number;
  fetchStatus: 'pending' | 'error' | null;
  name: string;
  order: number;
  content?: IProfile | IFolder | IProject;
  status: TWindowStatus;
  type: TWindowType;
}
interface IWindowsStore {
  windows: IWindow[];
  addWindow: (
    name: string,
    id: number,
    type: TWindowType,
    elemId?: number,
  ) => void;
  showWindow: (id: number) => void;
  collapseWindow: (id: number) => void;
  closeWindow: (id: number) => void;
  fetchWindowContent: (
    type: TWindowType,
    elemId: number,
    id: number,
  ) => Promise<void>;
  moveWindowToTop: (id: number) => void;
}

class WindowsStore implements IWindowsStore {
  windows: IWindowsStore['windows'] = [];

  constructor() {
    makeObservable(this, {
      windows: observable,
      addWindow: action,
      showWindow: action,
      collapseWindow: action,
      closeWindow: action,
      moveWindowToTop: action,
      fetchWindowContent: action,
    });
  }

  public addWindow: IWindowsStore['addWindow'] = (name, id, type, elemId) => {
    if (this.windows.find(({ id: itemId }) => itemId === id)) {
      this.moveWindowToTop(id);

      return;
    }
    if (elemId === undefined) {
      this.windows.push({
        id,
        name,
        fetchStatus: 'error',
        order: this.windows.length + 1,
        status: 'open',
        type,
      });

      return;
    }
    this.windows.push({
      id,
      name,
      fetchStatus: 'pending',
      order: this.windows.length + 1,
      status: 'open',
      type,
    });

    void this.fetchWindowContent(type, elemId, id);
  };

  public showWindow: IWindowsStore['showWindow'] = (id) => {
    this.windows = this.windows.map((window) =>
      window.id === id ? { ...window, status: 'open' } : window,
    );
  };

  public collapseWindow: IWindowsStore['collapseWindow'] = (id) => {
    this.windows = this.windows.map((window) =>
      window.id === id ? { ...window, status: 'collapse' } : window,
    );
  };

  public closeWindow: IWindowsStore['collapseWindow'] = (id) => {
    this.windows = this.windows.filter(({ id: windowId }) => id !== windowId);
  };

  public moveWindowToTop: IWindowsStore['moveWindowToTop'] = (id) => {
    let isTopElemFound = false;

    this.windows = this.windows
      .sort((a, b) => a.order - b.order)
      .map((window, index, windows) => {
        if (id === window.id) {
          isTopElemFound = true;

          return {
            ...window,
            order: windows.length,
          };
        }

        return {
          ...window,
          order: isTopElemFound ? index : index + 1,
        };
      });
  };

  public fetchWindowContent: IWindowsStore['fetchWindowContent'] = async (
    type,
    elemId,
    id,
  ) => {
    try {
      if (type === 'profile') {
        const content = await getProfileByElemId(elemId);

        runInAction(() => {
          this.windows = this.windows.map((window) =>
            window.id === id
              ? { ...window, content, fetchStatus: null }
              : window,
          );
        });
      }

      if (type === 'folder') {
        const content = await getFolderItemsByParentId(elemId);

        runInAction(() => {
          this.windows = this.windows.map((window) =>
            window.id === id
              ? { ...window, content, fetchStatus: null }
              : window,
          );
        });
      }

      if (type === 'project') {
        const content = await getProjectByElemId(elemId);

        runInAction(() => {
          this.windows = this.windows.map((window) =>
            window.id === id
              ? { ...window, content, fetchStatus: null }
              : window,
          );
        });
      }
    } catch (e) {
      runInAction(() => {
        this.windows = this.windows.map((window) =>
          window.id === id ? { ...window, fetchStatus: 'error' } : window,
        );
      });
    }
  };
}

export default new WindowsStore();
