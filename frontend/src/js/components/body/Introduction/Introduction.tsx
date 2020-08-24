import React from 'react'
import styled from 'styled-components'
import DetailsContainer from './Details/DetailsContainer'
import TextContainer from './Text/TextContainer'

//Styled Components
const IntroWrapper = styled.div`
  height: 100vh;
  margin-top: 10rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 20% 80%;
  grid-column-gap: 6.5rem;
`
const NumberContiner = styled.div`
  position: relative;
  grid-column: 2/3;
  grid-row: 1/2;
  overflow-x: clip;
`

const IntroNumber = styled.h1`
  position: absolute;
  right: -50px;
  bottom: -145px;
  margin: 0;
  font-size: 25rem;

  font-weight: 300;
`

//React Component
const Introduction: React.FC = () => {
  return (
    <IntroWrapper id="01%Introduction">
      <NumberContiner>
        <IntroNumber>01</IntroNumber>
      </NumberContiner>
      <DetailsContainer />
      <TextContainer />
    </IntroWrapper>
  )
}
export default Introduction
