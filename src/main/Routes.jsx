import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

import Home from '../components/home/Home'
import Sinopse from '../components/template/Sinopse'

const Routes = () => {
    return(
        <Switch>
        <Route exact path='/home' component={Home}></Route>
        <Route exact path='/Sinopse' component={Sinopse}></Route>
        <Redirect from='*' to='/home'></Redirect>
    </Switch>
    )
}

export default Routes