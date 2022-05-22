import { IList } from "../list/ilist";
import { IItem } from "../item/iitem";
import { Item } from "../item/item";

export class List implements IList {
  items: IItem[];
  lastItemId: number;
  constructor() {
    this.items = [];
    this.lastItemId = 0;
  }
  getToDoList(): IItem[] {
    return this.items.filter((item) => !item.isDone);
  }
  getDoneList(): IItem[] {
    return this.items.filter((item) => item.isDone);
  }
  add(itemValue: any): void {
    this.items.push(new Item(this.lastItemId, itemValue));
    this.lastItemId++;
  }
  remove(id: number): void {
    const removedItemIndex = this.items.findIndex((item) => {
      return item.id == id;
    });
    if (removedItemIndex != -1) {
      this.items.splice(removedItemIndex, 1);
    }
  }
  mark(id: number): void {
    const item = this.items.find((item) => {
      return item.id == id;
    });
    if (item) {
      item.isDone = true;
    }
  }
}
