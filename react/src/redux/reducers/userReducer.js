/* Początkowy stan naszego reducera, zanim nastąpi pierwszy dispatch user state wynosi undefined,
przechowujemy dane które prawdopodobnie bedziemy musieli użyć w naszej aplikacji,
unika sie przechowywanie haseł czy innych newralgicznych po stronie klienta

Istnieje możliwość tworznia wielu reducerów a następnie łączneie je w jednym 'store', dlatego zamaist
rozbudowywać userReduer, należy tworzyć kolejne np. filltersReducers czy productReducer
*/

const initialUserState = {
    id: undefined,
    name: undefined,
    surname: undefined,
    email: undefined,
}

/*
    Istotą reduxa jest nie modyfikowanie poprzedniego stanu natomiast tworzenie tworzenie jego kopii,
    oraz praca na niej co zapewnia Object.assign(), LOGIN_SUCCESS ustawia podstawowe informacje
    natomiast LOGOUT ustawie na na undefined
*/

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