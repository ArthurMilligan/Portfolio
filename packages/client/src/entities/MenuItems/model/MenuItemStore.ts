import { type TIconName } from '@ui';
import { action, makeObservable, observable } from 'mobx';

interface IMenuItem {
  id: number;
  name: string;
  icon: TIconName;
}

interface IMenuItemsStore {
  items: IMenuItem[];
  addItem: (id: number, name: string, icon: TIconName) => void;
  deleteItem: (id: number) => void;
}

class MenuItemStore implements IMenuItemsStore {
  items: IMenuItemsStore['items'] = [];

  constructor() {
    makeObservable(this, {
      items: observable,
      addItem: action,
      deleteItem: action,
    });
  }

  addItem: IMenuItemsStore['addItem'] = (id, name, icon) => {
    if (this.items.find(({ id: itemId }) => itemId === id)) {
      return;
    }
    this.items.push({ id, name, icon });
  };

  deleteItem: IMenuItemsStore['deleteItem'] = (id) => {
    this.items = this.items.filter(({ id: itemId }) => itemId !== id);
  };
}

export default new MenuItemStore();
