import React from 'react'
import styled from 'styled-components'

//Styled Components
const MainWraper = styled.div`
  height: 100vh;
  /* margin: 24rem 0; */
`
//React Component
const Main: React.FC = () => {
  return (
    <MainWraper>
      <h1>Hello World</h1>
    </MainWraper>
  )
}
export default Main
