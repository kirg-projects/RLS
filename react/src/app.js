import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import AppRoutes from './routers/AppRouter'
import store from './redux/store/store'
import { Provider } from 'react-redux'

store.subscribe(() => {
    console.log(store.getState())
})

const app = (
    <Provider store={store}>
        <AppRoutes />
    </Provider>
)


ReactDOM.render(app, document.getElementById("app"));
