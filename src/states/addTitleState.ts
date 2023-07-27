import { atom, selector } from "recoil";
import { Todo } from "../types/Todo";

export const addTitleState = atom<Array<Todo>>({
  key: "addTitleState",
  default: [],
});

export const addTitleStateLength = selector<number>({
  key: "addTitleStateLength",
  get: ({ get }) => {
    const addTitleNumber: Array<Todo> = get(addTitleState);
    return addTitleNumber?.length + 1 || 1;
  },
});
