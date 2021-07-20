import { selector } from "recoil";
import { TodoType } from "types";
import { ATOM_KEYS } from "utils/enums";
import todoState from "./todoAtom";

// Selectors : Function which tells the condition of the states
export const isTodoListEmpty = selector({
  key: ATOM_KEYS.IS_TODO_LIST_EMPTY, // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const todoList = get(todoState);

    return todoList.length == 0;
  },
});
