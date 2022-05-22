import { IItem } from "./iitem";

export class Item implements IItem {
  id: number;
  isDone: boolean;
  value: any;
  constructor(id: number, value: any) {
    this.id = id;
    this.value = value;
    this.isDone = false;
  }
}
