import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import TestDashboard from '../components/TestDashboard'
import TestLogin from '../components/TestLogin'
import Login from '../components/Login'
import TestRegistration from '../components/TestRegistration'
import NotFoundPage from '../components/NotFoundPage'

const AppRoutes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact={true} path="/" component={TestDashboard} />
            <Route path="/login" component={Login} />
            <Route path="/testlogin" component={TestLogin} />
            <Route path="/registration" component={TestRegistration} />
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
)

export default AppRoutes