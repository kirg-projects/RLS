//Actions creators - funkcje które przekazują do userReducer potrzebne informacje
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

