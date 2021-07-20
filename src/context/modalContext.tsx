import React, { useMemo } from 'react'
import { useContext } from 'react';
import { useState } from 'react';


interface ModalStateType {
  [key: string]: boolean
}

interface ModalContextType {
  modals: ModalStateType,
  setModals: (modals: ModalStateType) => void
}

interface ModalHookReturnType {
  modals: ModalStateType,
  setModals: (modals: ModalStateType) => void,
  showModal: (modalName: string) => void,
  hideModal: (modalName: string) => void
}

const ModalContext = React.createContext<ModalContextType>({ modals: {}, setModals: () => console.log("Initial Modal") });

const ModalContextProvider = (props: any) => {
  const [modals, setModals] = useState<ModalStateType>({})

  // const value = useMemo(() => [modals, setModals], [modals]);
  return (
    <ModalContext.Provider value={{
      modals,
      setModals
    }}>
      {props.children}
    </ModalContext.Provider>
  )
}


const useModal = (): ModalHookReturnType => {
  const context = useContext(ModalContext) as ModalContextType;

  if (!context) {
    throw new Error("useModal must be used inside ModalContextProvider");
  }

  const { modals, setModals } = context;

  const showModal = (modalName: string) => {
    setModals({
      ...modals,
      [modalName]: true
    })
  }

  const hideModal = (modalName: string) => {
    setModals({
      ...modals,
      [modalName]: false
    });
  }

  return {
    modals,
    setModals,
    showModal,
    hideModal
  };
}

export { ModalContextProvider, useModal }