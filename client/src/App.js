import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { LoggedInHome } from './pages/LoggedInHome'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={LoggedInHome} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
