import React, { useEffect, useRef } from 'react'
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
interface ITextContainer {
  section: string
}

//React Component
const TextContainer: React.FC<ITextContainer> = ({ section }) => {
  const setSection = () => {
    if (section == 'Frontend') {
      return Frontend
    } else if (section == 'Backend') {
      return Backend
    } else {
      return EssentailSkills
    }
  }

  return (
    <TextWrapper>
      {section == 'Intro' ? (
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
