import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

//Styled Components
const HoverDiv = styled.div`
  color: #fff;
  padding-bottom: 1rem;
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: 1.25rem;

  ${HoverDiv}:hover & {
    color: ${(props) => props.theme.tirtiaryColor};
  }
  :focus {
    color: ${(props) => props.theme.tirtiaryColor};
    outline: transparent;
  }
`

const HoverLeftSpan = styled.span`
  display: inline-block;
  padding-right: 1rem;
  font-size: 1.25rem;
  color: transparent;
  ${HoverDiv}:hover & {
    color: ${(props) => props.theme.tirtiaryColor};
  }
  ${NavLink}:focus & {
    color: ${(props) => props.theme.tirtiaryColor};
  }
`

const HoverRightSpan = styled.span`
  display: inline-block;
  padding-left: 1rem;
  font-size: 1.25rem;
  color: transparent;
  ${HoverDiv}:hover & {
    color: ${(props) => props.theme.tirtiaryColor};
  }
`
// INTERFACES
interface INavLinkContainer {
  text: string
}

//React Component
const NavLinkContainer: React.FC<INavLinkContainer> = ({ text }) => {
  return (
    <React.Fragment>
      <HoverDiv>
        <HoverLeftSpan>&lt; </HoverLeftSpan>
        <NavLink to={`#${text}`}>{text}</NavLink>
        <HoverRightSpan>&gt;</HoverRightSpan>
      </HoverDiv>
    </React.Fragment>
  )
}
export default NavLinkContainer
