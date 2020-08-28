import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'

//Styled Components
const LogoWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  font-size: 2.5rem;
`
const LogoSpan = styled.span`
  padding-right: 0.5rem;
`

const LogoContainer = styled.div`
  @keyframes typewriter {
    from {
      width: 0;
    }
    to {
      width: 159px;
    }
  }
  @keyframes blinkTextCursor {
    from {
      border-right-color: rgba(13, 110, 35, 0.75);
    }
    to {
      border-right-color: transparent;
    }
  }

  border-right: 8px solid rgba(255, 255, 255, 0.75);
  white-space: nowrap;
  overflow: hidden;

  animation: typewriter 1s steps(44) 2s 1 normal both,
    blinkTextCursor 1s steps(44) infinite normal;
`
const LogoText = styled.h1`
  display: inline-block;
  border-right: 8px solid rgba(255, 255, 255, 0.75);
  margin: 0;
  font-size: 2.5rem;
`

//React Component
const Logo: React.FC = () => {
  return (
    <LogoWrapper>
      <LogoSpan>&gt; </LogoSpan>
      <LogoContainer>
        <LogoText>jludev</LogoText>
      </LogoContainer>
    </LogoWrapper>
  )
}
export default Logo
