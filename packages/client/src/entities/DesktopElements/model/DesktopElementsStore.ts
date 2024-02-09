import { type TIconName } from '@ui';
import { type TWindowType } from '@entities';
import { action, makeObservable, observable, runInAction } from 'mobx';
import { getAllElements } from '../api';

export interface IDesktopElement {
  id: number;
  name: string;
  icon: TIconName;
  type: TWindowType;
  elementId?: number;
  folderId?: number;
  position: {
    x: number;
    y: number;
  };
}

interface IDesktopElementsStore {
  elements: IDesktopElement[];
  fetchStatus: 'pending' | 'error' | null;
  setElemPosition: (id: number, x: number, y: number) => void;
  getElemPosition: (id: number) => { x: number; y: number } | null;
  fetchAllElements: () => Promise<void>;
}

class DesktopElementsStore implements IDesktopElementsStore {
  fetchStatus: IDesktopElementsStore['fetchStatus'] = null;

  elements: IDesktopElementsStore['elements'] = [];

  constructor() {
    makeObservable(this, {
      fetchStatus: observable,
      elements: observable,
      setElemPosition: action,
      getElemPosition: action,
      fetchAllElements: action,
    });

    void this.fetchAllElements();
  }

  public setElemPosition: IDesktopElementsStore['setElemPosition'] = (
    id,
    x,
    y,
  ) => {
    this.elements = this.elements.map((elem) =>
      elem.id === id ? { ...elem, position: { x, y } } : elem,
    );
  };

  public getElemPosition: IDesktopElementsStore['getElemPosition'] = (elemId) =>
    this.elements.find(({ id }) => id === elemId)?.position ?? null;

  public fetchAllElements: IDesktopElementsStore['fetchAllElements'] =
    async (): Promise<void> => {
      runInAction(() => {
        this.fetchStatus = 'pending';
      });
      try {
        const newElements = await getAllElements();

        runInAction(() => {
          this.elements = newElements;
          this.fetchStatus = null;
        });
      } catch (e) {
        runInAction(() => {
          this.fetchStatus = 'error';
        });
      }
    };
}

export default new DesktopElementsStore();
