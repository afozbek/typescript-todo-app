import { atom } from "recoil";
import { TodoType } from "types";
import { ATOM_KEYS } from "utils/enums";

const todoState = atom<TodoType[]>({
  key: ATOM_KEYS.TODO_ATOM, // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

export default todoState