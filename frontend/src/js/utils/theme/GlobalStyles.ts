import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'
import FiraCode from '../../../fonts/FiraCode-Regular.ttf'
import Colors from './Colors'

const GlobalStyle = createGlobalStyle`
    ${normalize()}

    @font-face {
        font-family: 'FiraCode';
        src: url(${FiraCode});
    }

    html {
        font-size: 16px;
        box-sizing: border-box;
        overflow:hidden;
        font-family: FiraCode;
    }

    * , *:before, *:after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        background-color: ${Colors.dark.primary};
        color: ${Colors.light};
        
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
