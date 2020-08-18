import React from 'react'
import styled from 'styled-components'
import { Frontend } from '../../../../utils/StaticData'

//Styled Components
const DeatilButton = styled.div`
  padding: 2rem;
  cursor: pointer;
  color: ${(props) => props.theme.primaryTextColor};
  background-color: ${(props) => props.theme.secondaryColor};
  display: flex;
  flex-direction: column;
`

//React Component
const DetailButtons: React.FC = () => {
  return (
    <DeatilButton role="button">
      <h1>{Frontend.title}</h1>
      <p>{Frontend.subtitle}</p>
    </DeatilButton>
  )
}
export default DetailButtons
