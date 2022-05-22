import { createStore } from "vuex";
import { List } from "@/businessLogic/list/list";

export default createStore({
  state: {
    list: new List(),
  },
  getters: {
    toDoList(state) {
      return state.list.getToDoList();
    },
    doneList(state) {
      return state.list.getDoneList();
    },
  },
  mutations: {
    add(state, value: any) {
      state.list.add(value);
    },
    mark(state, id: number) {
      state.list.mark(id);
    },
    remove(state, id: number) {
      state.list.remove(id);
    },
  },
  actions: {},
  modules: {},
});
