const initialUserState = {
    id: undefined,
    name: undefined,
    surname: undefined,
    email: undefined,
}

const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return Object.assign({}, state, {
                id: action.payload.id,
                name: action.payload.name,
                surname: action.payload.surname,
                email: action.payload.email,
            })
        case "LOGOUT":
            return Object.assign({}, state, {
                id: undefined,
                name: undefined,
                surname: undefined,
                email: undefined,
            })
        default:
            return state;
    }
}

export default userReducer