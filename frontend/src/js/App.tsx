import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Theme from './utils/theme/Theme'
import GlobalStyle from './utils/theme/GlobalStyles'

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Switch>
          <Route path="/">
            <div>
              <h1>Hello World</h1>
            </div>
            <GlobalStyle />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
