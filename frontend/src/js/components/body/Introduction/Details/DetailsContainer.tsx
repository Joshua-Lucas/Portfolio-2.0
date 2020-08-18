import React from 'react'
import styled from 'styled-components'

//Styled Components
const DetailsWrapper = styled.div`
  padding-left: 100px;
  grid-column: 1/2;
  grid-row: 2/3;
`

//React Component
const DetailsContainer: React.FC = () => {
  return (
    <DetailsWrapper>
      <p>test</p>
    </DetailsWrapper>
  )
}
export default DetailsContainer
