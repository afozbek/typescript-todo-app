import todoState from 'atoms/todoAtom';
import { isTodoListEmpty } from 'atoms/todoAtom/selector';
import Todo from 'components/TodoList/Todo';
import dayjs from 'dayjs';
import React from 'react'
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { TodoType } from 'types';

const TodoList: React.FC = () => {
  // const [todoList, _] = useRecoilState(todoState)
  const todoList = useRecoilValue(todoState);
  // const isEmpty = useRecoilValue(isTodoListEmpty)

  const StyledTodoListWrapper = styled.div`
    margin: 20px 0;
  `
  // functions
  return (
    <StyledTodoListWrapper>
      {/* {isEmpty ? "TodoList currentyly empty" : "Hımm"} */}
      {todoList.map(todo => <Todo key={todo.id} todo={todo} />)}
    </StyledTodoListWrapper>
  )
}

export default TodoList
