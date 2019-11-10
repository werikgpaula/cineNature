import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

import Home from '../components/home/Home'

const Routes = () => {
    return(
        <Switch>
        <Route exact path='/home' component={Home}></Route>
        <Redirect from='*' to='/home'></Redirect>
    </Switch>
    )
}

export default Routes