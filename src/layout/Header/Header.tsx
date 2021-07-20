import { Avatar, Container } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { baseAvatarUrl } from 'utils/constants'

const StyledHeader = styled.header`
  background: ${props => props.theme.darkTheme};
  padding: 20px 0;
  color: white;
`
const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <Link to="/" className="logo">
          <Avatar src={baseAvatarUrl} />
        </Link>
        <div className="links">
          <Link to="/faq">FAQ</Link>
        </div>
      </StyledContainer>
    </StyledHeader>
  )
}

export default Header

