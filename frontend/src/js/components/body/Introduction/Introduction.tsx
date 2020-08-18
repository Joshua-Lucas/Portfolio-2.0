import React from 'react'
import styled from 'styled-components'

//Styled Components
const IntroWrapper = styled.div`
  height: 100vh;
  margin-top: 10rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 20% 80%;
`
const NumberContiner = styled.div`
  position: relative;
  grid-column: 2/3;
  grid-row: 1/2;
`

const IntroNumber = styled.h1`
  position: absolute;
  right: 50px;
  bottom: -75px;
  margin: 0;
  font-size: 21rem;
`

//React Component
const Introduction: React.FC = () => {
  return (
    <IntroWrapper id="01 Introduction">
      <NumberContiner>
        <IntroNumber>01</IntroNumber>
      </NumberContiner>
    </IntroWrapper>
  )
}
export default Introduction
