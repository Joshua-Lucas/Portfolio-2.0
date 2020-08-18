import React from 'react'
import styled from 'styled-components'
import DetailButtons from './DetailButtons'

//Styled Components
const DetailsWrapper = styled.div`
  padding-left: 100px;
  grid-column: 1/2;
  grid-row: 2/3;

  display: flex;
  flex-direction: column;
`

//React Component
const DetailsContainer: React.FC = () => {
  return (
    <DetailsWrapper>
      <DetailButtons />
    </DetailsWrapper>
  )
}
export default DetailsContainer
