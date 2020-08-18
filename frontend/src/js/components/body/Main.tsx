import React from 'react'
import styled from 'styled-components'
import Introduction from './Introduction/Introduction'

//Styled Components
const MainWraper = styled.div`
  /* height: 100vh; */
  /* margin: 24rem 0; */
`
//React Component
const Main: React.FC = () => {
  return (
    <MainWraper>
      <Introduction />
    </MainWraper>
  )
}
export default Main
