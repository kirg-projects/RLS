import { createStore } from 'redux'

export const loginUser = ({ id, name, surname, email }) => {
    return {
        type: "LOGIN_SUCCESS",
        payload: {
            id,
            name,
            surname,
            email,
        }
    }
}

export const logoutUser = () => {
    return {
        type: "LOGOUT",
    }
}

