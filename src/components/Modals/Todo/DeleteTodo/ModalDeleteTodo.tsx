import ModalComponent from 'components/Modals/ModalComponent';
import React from 'react'
import { ModalProps, TodoType } from 'types';

type ModalDeleteTodoProps = {
  handleDelete: () => void,
  todo: TodoType
}

const ModalDeleteTodo = ({ handleDelete, todo }: ModalDeleteTodoProps) => {

  return (
    <ModalComponent
      modalName="ModalDeleteTodo"
      modalTitle="Delete Todo"
      onSubmit={handleDelete}
      buttonScheme={{
        colorScheme: "red",
        text: "Delete Todo"
      }}
    >
      Are you sure? You can&lsquo;t undo this action afterwards.
    </ModalComponent>
  )
}

export default ModalDeleteTodo
