import { IItem } from "../item/iitem";

export interface IList {
  items: Array<IItem>;
  getToDoList(): IItem[];
  getDoneList(): IItem[];
  add(itemValue: any): void;
  remove(id: number): void;
  mark(id: number): void;
}
