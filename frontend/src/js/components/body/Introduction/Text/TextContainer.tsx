import React, { useState } from 'react'
import styled from 'styled-components'
import IntroDetails from './IntroDetails'
import TextDetails from './TextDetails'
// Static Data
import {
  Frontend,
  Backend,
  EssentailSkills,
} from '../../../../utils/StaticData'

//Styled Components
const TextWrapper = styled.div`
  padding-right: 14rem;
  grid-column: 2/3;
  grid-row: 2/3;
`

//React Component
const TextContainer: React.FC = () => {
  const [state, setState] = useState('Backend')

  const setSection = () => {
    if (state == 'Frontend') {
      return Frontend
    } else if (state == 'Backend') {
      return Backend
    } else {
      return EssentailSkills
    }
  }

  return (
    <TextWrapper>
      {state == 'Intro' ? (
        <IntroDetails />
      ) : (
        <TextDetails
          title={setSection().title}
          subtitle={setSection().subtitle}
          sectionTitleOne={setSection().sectionTitleOne}
          sectionItemsOne={setSection().sectionItemsOne}
          sectionTitleTwo={setSection().sectionTitleTwo}
          sectionItemsTwo={setSection().sectionItemsTwo}
        />
      )}
    </TextWrapper>
  )
}
export default TextContainer
