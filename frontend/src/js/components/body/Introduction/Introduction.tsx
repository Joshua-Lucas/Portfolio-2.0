import React, { useState } from 'react'
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
  bottom: -125px;
  margin: 0;
  font-size: 25rem;
  font-weight: 300;
  cursor: pointer;
`

//React Component
const Introduction: React.FC = () => {
  const [skillsCategorey, setSkillsCategorey] = useState('Intro')

  const toggleSkillsCategorey = (
    Event: React.MouseEvent<HTMLButtonElement>
  ) => {
    Event.preventDefault()
    setSkillsCategorey(Event.currentTarget.id)
  }

  return (
    <IntroWrapper id="01 Introduction">
      <NumberContiner>
        <IntroNumber onClick={() => setSkillsCategorey('Intro')}>
          01
        </IntroNumber>
      </NumberContiner>
      <DetailsContainer toggleFunc={toggleSkillsCategorey} />
      <TextContainer section={skillsCategorey} />
    </IntroWrapper>
  )
}
export default Introduction
