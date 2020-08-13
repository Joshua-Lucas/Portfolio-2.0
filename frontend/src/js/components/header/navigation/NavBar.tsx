import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'

//Styled Components
const NavBarContainer = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;
  padding: 2rem 8rem 0;
`

//React Component
const NavBar: React.FC = ({}) => {
  return (
    <NavBarContainer aria-label="Navigations">
      <Logo />
    </NavBarContainer>
  )
}
export default NavBar
