import React from 'react'
import styled from 'styled-components'

//Styled Components
const BannerTextWrapper = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 4rem;
`

const PreTitle = styled.p`
  margin: 0;
  font-size: 2rem;
`

const Title = styled.h1`
  margin: 0;
  font-size: 4rem;
  color: ${(props) => props.theme.tirtiaryColor};
`
const SubTitle = styled.p`
  margin: 0;
  font-size: 2rem;
`

//React Component
const BannerText: React.FC = () => {
  return (
    <BannerTextWrapper>
      <PreTitle>A Louisville based</PreTitle>
      <Title>Fullstack Developer</Title>
      <SubTitle>
        Creating intuitive and responsive software with people in mind
      </SubTitle>
    </BannerTextWrapper>
  )
}
export default BannerText
