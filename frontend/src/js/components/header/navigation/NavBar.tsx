import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import PageNavigation from './PageNavigation'

//Styled Components
const NavBarContainer = styled.div`
  grid-column: 1/3;
  grid-row: 1/2;
  padding: 3rem 8rem 0;
  display: flex;
  justify-content: space-between;
  z-index: 10;
`

//React Component
const NavBar: React.FC = () => {
  return (
    <NavBarContainer>
      <Logo />
      <PageNavigation
        links={['01 Introduction', '02 Works', '03 Testimonials', '04 Contact']}
      />
    </NavBarContainer>
  )
}
export default NavBar
