import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { Button, Checkbox, FormControl, FormLabel, Input } from '@chakra-ui/react'
import todoState from 'atoms/todoAtom'
import ModalComponent from 'components/Modals/ModalComponent'
import ModalDeleteTodo from 'components/Modals/Todo/DeleteTodo'
import ModalUpdateTodo from 'components/Modals/Todo/UpdateTodo'
import { englishVermillion, spaceCadet } from 'config/variables'
import { useModal } from 'context/modalContext'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'
import { TodoType } from 'types'
import { filterItemAtIndex, replaceItemAtIndex } from 'utils/helpers'

interface Props {
  todo: TodoType
}

const Todo = ({ todo }: Props) => {
  const StyledTodo = styled.div`
    border-radius: 3px;
    border: 1px solid #ccc;
    padding: 10px 20px;
    margin: 5px;
    
    display: flex;
    align-items: center;
    /* justify-content: space-between; */

    & label {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      margin-right: 5px;
    }

    & .icons {
      display: flex;
      align-items: center;
      
      .chakra-button {
        background: none;
      }
    }
  `
  const [todoList, setTodoList] = useRecoilState(todoState);

  const index = todoList.findIndex((listItem) => listItem === todo);

  const { showModal, hideModal } = useModal();

  // Mutations
  const updateTodo = (todoDescription: string): void => {
    const newTodoList = replaceItemAtIndex(todoList, index, {
      ...todo,
      description: todoDescription
    })
    setTodoList(newTodoList);
  }

  const toggleTodoCompletion = (): void => {
    const newTodoList = replaceItemAtIndex(todoList, index, {
      ...todo,
      done: !todo.done
    })
    setTodoList(newTodoList);
  }

  const deleteTodo = (): void => {
    const newTodoList = filterItemAtIndex(todoList, index);
    setTodoList(newTodoList)
  }


  return (
    <>
      <StyledTodo>
        <Checkbox size="md" isChecked={todo.done} onChange={(e) => toggleTodoCompletion()}>
          {todo.description}
        </Checkbox>

        <div className="icons">
          <Button onClick={() => showModal("ModalUpdateTodo")}>
            <EditIcon color={spaceCadet} onClick={() => showModal("ModalUpdateTodo")} />
          </Button>
          <Button onClick={() => showModal("ModalDeleteTodo")}>
            <DeleteIcon color={englishVermillion} />
          </Button>
        </div>
        {/* {todo.deadline.format("dd:mm:yyyy")} */}
      </StyledTodo>

      {/* Modals */}
      <ModalUpdateTodo todo={todo} handleUpdate={(description) => updateTodo(description)} handleClose={() => hideModal("ModalUpdateTodo")} />

      {/* DeleteTodo */}
      <ModalDeleteTodo todo={todo} handleDelete={() => deleteTodo()} />
    </>

  )
}

export default Todo
