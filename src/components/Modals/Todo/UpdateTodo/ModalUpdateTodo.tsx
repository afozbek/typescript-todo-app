import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { TodoType } from 'types'
import ModalComponent from '../../ModalComponent'

type ModalUpdateTodoProps = {
  handleUpdate: (description: string) => void,
  handleClose: () => void
  todo: TodoType
}

type FormData = {
  description: string,
}

const ModalUpdateTodo = ({ handleUpdate, handleClose, todo }: ModalUpdateTodoProps) => {
  // const { colorScheme, onClose, onSubmit, text } = buttonScheme;
  const { register, handleSubmit } = useForm<FormData>();

  const handleUpdateTodoFormSubmit = ({ description }: FormData) => {
    console.log("New Description", description)
    handleUpdate(description)
    handleClose();
  }
  const descriptionRef = useRef<HTMLInputElement>(null);

  const updateTodo = (description: string = todo.description) => {
    handleUpdate(description)
  }

  return (
    <ModalComponent
      modalName="ModalUpdateTodo"
      modalTitle="Update Todo"
      onSubmit={() => updateTodo(descriptionRef?.current?.value)}
      onClose={handleClose}
      buttonScheme={{
        colorScheme: "blue",
        text: "Update Todo"
      }}
    >
      <form onSubmit={handleSubmit(handleUpdateTodoFormSubmit)}>
        <FormControl id="description" >
          <FormLabel>Description</FormLabel>
          <Input type="text" defaultValue={todo.description} {...register("description", { required: true, min: 5 })} ref={descriptionRef} />
        </FormControl>
      </form>
    </ModalComponent>
  )
}

export default ModalUpdateTodo
