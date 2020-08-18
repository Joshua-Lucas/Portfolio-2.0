import React from 'react'
import styled from 'styled-components'

//Styled Components
const IntroDetailsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
const SectionHeader = styled.h1`
  padding-bottom: 2.3rem;
  color: ${(props) => props.theme.lightTextColor};
  font-size: 18px;
  font-weight: 300;
`

const Title = styled.h1`
  padding-bottom: 2.3rem;
  font-size: 3.75rem;
`

const SubTitle = styled.h2`
  padding-bottom: 2rem;
  line-height: 1.6;
  font-style: italic;
  font-weight: 300;
`

const IntroText = styled.p`
  margin: 0;
  color: ${(props) => props.theme.lightTextColor};
  line-height: 1.6;
  font-size: 1.3rem;
`

//React Component
const IntroDetails: React.FC = () => {
  return (
    <IntroDetailsWrapper>
      <SectionHeader>Introduction</SectionHeader>
      <Title>Hello! I'm Joshua Lucas</Title>
      <SubTitle>
        A self-taught developer making the web a more enjoyable and safe place
        one line of code at time.
      </SubTitle>
      <IntroText>
        I am driven, hardworking, honest, and a loyal team player. I am a quick
        learner, perpetually seeking to sharpen my skills and grow in my
        knowledge of software development. When I am not at my computer, you can
        find me enjoying the outdoors with my wife, trying a new restaurant, or
        conversing with a friend over a cup of coffee.
      </IntroText>
    </IntroDetailsWrapper>
  )
}
export default IntroDetails
