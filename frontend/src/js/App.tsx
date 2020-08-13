import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Theme from './utils/theme/Theme'
import GlobalStyle from './utils/theme/GlobalStyles'

import Header from './components/header/Header'
import Main from './components/body/Main'

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Switch>
          <Route path="/">
            <Header />
            <Main />
            <GlobalStyle />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
