import React from 'react'
import styled from 'styled-components'
import { UtilityStyles } from '@jludev/component-lib-typescript'

//Styled Components
const TextDetailsWrapper = styled.div`
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

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem 0 2rem;
`

const ListItem = styled.p`
  margin: 1rem;
  padding: 0.5rem 1rem;
  text-align: center;
  border-radius: ${UtilityStyles.borderRadius.lg};
  background-color: ${(props) => props.theme.secondaryColor};
  font-size: 14px;
`

//Interfaces
interface ITextDetails {
  title: string
  subtitle: string
  sectionTitleOne: string
  sectionItemsOne: string[]
  sectionTitleTwo: string
  sectionItemsTwo: string[]
}

//React Component
const TextDetails: React.FC<ITextDetails> = ({
  title,
  subtitle,
  sectionTitleOne,
  sectionItemsOne,
  sectionTitleTwo,
  sectionItemsTwo,
}) => {
  return (
    <TextDetailsWrapper>
      <SectionHeader>Introduction</SectionHeader>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
      <h4>{sectionTitleOne}</h4>
      <ListContainer role="list">
        {sectionItemsOne.map((item: string) => (
          <ListItem key={item} role="listitem">
            {item}
          </ListItem>
        ))}
      </ListContainer>

      <h4>{sectionTitleTwo}</h4>
      <ListContainer>
        {sectionItemsTwo.map((item: string) => (
          <ListItem key={item} role="listitem">
            {item}
          </ListItem>
        ))}
      </ListContainer>
    </TextDetailsWrapper>
  )
}
export default TextDetails
