import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const AppRouters = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <></>
        </Route>
      </Switch>
    </Router>
  )
}

export default AppRouters
