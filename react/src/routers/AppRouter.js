import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import TestDashboard from '../components/TestDashboard'
import TestLogin from '../components/TestLogin'
import Registration from '../components/Registration'
import NotFoundPage from '../components/NotFoundPage'

const AppRoutes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact={true} path="/" component={TestDashboard} />
            <Route path="/login" component={TestLogin} />
            <Route path="/registration" component={Registration} />
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
)

export default AppRoutes