import { AddIcon } from '@chakra-ui/icons'
import { Container, Input, InputGroup, InputLeftElement, useToast } from '@chakra-ui/react'
import todoState from 'atoms/todoAtom'
import dayjs from 'dayjs'
import About from 'pages/About'
import Faq from 'pages/Faq'
import Home from 'pages/Home'
import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { Switch, Route } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import styled, { ThemeProps } from 'styled-components'
import { TodoType } from 'types'
import { keyCodes } from 'utils/constants'
import { createTodo } from 'utils/helpers'

const Body = (props: any) => {
  const StyledBody = styled(Container)`
    margin: 20px 0;
  `
  const StyledInput = styled(Input)`
    border-color: ${props => props.theme.darkTheme};
    margin: 10px 0;
  `
  const inputRef = useRef();

  // Hooks
  const setTodoList = useSetRecoilState(todoState);
  const toast = useToast()

  useEffect(() => {
    const inputElement: HTMLElement | undefined = inputRef.current;
    inputElement!.focus();
  }, [])

  // Functions
  const addTodo = (todo: TodoType): void => {
    // TODO: Organize Better this
    setTodoList(prevTodoList => [...prevTodoList, todo])
  }

  const inputKeyDownHandler = ({ target, keyCode }: React.KeyboardEvent<HTMLInputElement> & React.ChangeEvent<HTMLInputElement>) => {
    // Simple validation. Delete if you want :)
    const description = target.value.trim();
    const isValid = description.length >= 2

    if (isValid && keyCode == keyCodes.enter) {
      addTodo(createTodo(description))
      target.value = ""
      toast({
        title: "Toast created.",
        description: "Your next goal is awaiting you!!",
        status: "success",
        duration: 4000,
        isClosable: true,
      })
    }
  };

  return (
    <StyledBody>
      {/* TODO INPUT */}
      <StyledInput
        type="text"
        ref={inputRef}
        placeholder="What do you want to do today..."
        onKeyDown={inputKeyDownHandler}
      />

      {/* PAGES */}
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/faq">
          <Faq />
        </Route>
        <Route path="/">
          {/* <Home /> */}
          <Home />
        </Route>
      </Switch>
    </StyledBody>
  )
}

export default Body
