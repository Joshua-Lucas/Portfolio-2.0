import React from 'react'
import styled from 'styled-components'
import IntroDetails from './IntroDetails'

//Styled Components
const TextWrapper = styled.div`
  padding-right: 100px;
  grid-column: 2/3;
  grid-row: 2/3;
`

//React Component
const TextContainer: React.FC = () => {
  return (
    <TextWrapper>
      <IntroDetails />
    </TextWrapper>
  )
}
export default TextContainer
