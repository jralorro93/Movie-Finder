import React from 'react';
import { Switch, Route, withRouter } from "react-router-dom"

import HomePage from './components/HomePage'
import ActorProfile from './components/ActorProfile';

import {makeStyles} from '@material-ui/styles'
import "react-responsive-carousel/lib/styles/carousel.min.css";


const App = () => {

  return (
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/actorProfile' component={ActorProfile} />
    </Switch>
  )
}

export default withRouter(App);
