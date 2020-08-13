import React from 'react'
import styled from 'styled-components'
import NavLinkContainer from './NavLinkContainer'

//Styled Components

const NavigationWrapper = styled.nav`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding-right: 2rem;
`

// INTERFACES
interface IPageNavigation {
  links: string[]
}

//React Component
const PageNavigation: React.FC<IPageNavigation> = ({ links }) => {
  const NavigationLinks = links.map((link) => (
    <NavLinkContainer key={link} text={link} />
  ))

  return <NavigationWrapper>{NavigationLinks}</NavigationWrapper>
}
export default PageNavigation
