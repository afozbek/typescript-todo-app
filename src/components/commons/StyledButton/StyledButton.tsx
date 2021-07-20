import { Button, ButtonProps } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'

interface Props {
  block: boolean,
  // size: "small" | "large"
}

const StyledButton = styled(Button)`
  /* Styling Button */
  ${props => {
    if (props.block) {
      return `
        display: block !important; 
        width: 100% !important;
      `;
    }
  }}
`

const StyledBtn = (props: Props & ButtonProps) => {
  return (
    <StyledButton {...props}>
      {props.children}
    </StyledButton>
  )
}

export default StyledBtn
