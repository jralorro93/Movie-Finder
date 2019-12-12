import React from 'react';
import { Switch, Route, withRouter } from "react-router-dom"

import HomePage from './components/HomePage'

import {makeStyles} from '@material-ui/styles'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const App = () => {

  return (
    <Switch>
      <Route exact path='/' render={HomePage}/>
    </Switch>
  )
}

export default withRouter(App);
