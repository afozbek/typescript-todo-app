import { peachPuff, spaceCadet } from "config/variables";
import dayjs from "dayjs";

export interface TodoType {
  id: string | number,
  description: string,
  deadline: dayjs.Dayjs,
  done?: boolean,
}

export interface Modal {
  ModalUpdateTodo: string,
  ModalDeleteTodo: string
}
export type ThemeTypes = {
  lightTheme: typeof peachPuff;
  darkTheme: typeof spaceCadet;
}


// ModalProps
type ButtonTypes = {
  text: string;
  colorScheme: "red" | "blue";
}

export interface ModalProps {
  // isOpen: boolean,
  modalTitle: string,
  modalName: string,
  buttonScheme: ButtonTypes,
  onClose?: () => void;
  onSubmit: () => void
  children: React.ReactElement | string
}

