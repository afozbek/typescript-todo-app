import dayjs from "dayjs";
import { TodoType } from "types";

export const createTodo = (description: string): TodoType => {
  const todo: TodoType = { description, deadline: dayjs(), id: Math.random() }
  return todo
}
export const replaceItemAtIndex = <T>(arr: T[], index: number, value: T): T[] => {
  return arr.map((item, i) => {
    if (i == index) {
      return value
    }
    return item;
  });
}

export const filterItemAtIndex = <T>(arr: T[], index: number): T[] => {
  return arr.filter((item, i) => i != index);
}