import React from 'react'
import styled from 'styled-components'
import NavBar from './navigation/NavBar'

//Styled Components
const HeaderWraper = styled.div`
  width: 100vw;
  height: 90vh;
  background-color: ${(props) => props.theme.secondaryColor};
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 20% 80%;
`

//React Component
const Header: React.FC = ({}) => {
  return (
    <HeaderWraper>
      <NavBar />
    </HeaderWraper>
  )
}
export default Header
