import React from 'react'
import styled from 'styled-components'
import DetailButtons from './DetailButtons'

import {
  Frontend,
  Backend,
  EssentailSkills,
} from '../../../../utils/StaticData'

//Styled Components
const DetailsWrapper = styled.div`
  padding-left: 12rem;
  grid-column: 1/2;
  grid-row: 2/3;

  display: flex;
  flex-direction: column;
`

//React Component
const DetailsContainer: React.FC = () => {
  const data = [Frontend, Backend, EssentailSkills]

  const Buttons: any = data.map((object) => (
    <DetailButtons
      key={object.title}
      title={object.title}
      subtitle={object.definition}
      accomplishments={object.accomplished}
    />
  ))
  return <DetailsWrapper>{Buttons}</DetailsWrapper>
}
export default DetailsContainer
