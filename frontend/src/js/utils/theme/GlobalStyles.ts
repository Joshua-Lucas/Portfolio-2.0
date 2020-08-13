import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

const GlobalStyle = createGlobalStyle`
    ${normalize()}


    html {
        font-size: 16px;
        box-sizing: border-box;    
        
    }

    * , *:before, *:after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
    }

    h1 {
        font-size: 1.8rem;
        
    }

    h2 {
        font-size: 1.6rem;
    }

    h3 {
        font-size: 1.4rem
    }

    h4 {
        font-size: 1.2rem
    }

    h5 {
        font-size: 1.1rem
    }




`

export default GlobalStyle
