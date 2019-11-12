import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

import Home from '../components/home/Home'
import Filme from '../components/template/Filme'
import Sinopse from '../components/template/Sinopse'
import Sobre from '../components/template/Sobre'

const Routes = () => {
    return(
        <Switch>
        <Route exact path='/home' component={Filme}></Route>
        <Route exact path='/Sinopse' component={Sinopse}></Route>
        <Route exact path='/sobre' component={Sobre}></Route>
        <Redirect from='*' to='/home'></Redirect>
    </Switch>
    )
}

export default Routes