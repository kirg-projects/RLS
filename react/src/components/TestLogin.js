import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class TestLogin extends React.Component {
    dispatchUserCrudentials = (e) => {
        this.props.setUserCrudentials(1234567, "userName", "userSurname", "userEmail@gmail.com")
    }

    render() {
        return (
            <div>
                <h1>This is test string from TestLogin</h1>
                <Link to="/">Dashboard</Link><br />
                <button onClick={this.dispatchUserCrudentials}>Dispatch</button>
            </div>
        )
    }
}

/*
    Mapowanie userActions na propsy componenta, pozwala na zapisanie do store okeślanych parametrów, za
    pomocą prostej funkcji setUserCrudentials buttona, w celu wizualizacji rezultatu należy za pomocą Linka
    przenieść sie do Dashbordu. Użycie Linka jest WYMAGANE, w innym przypadku nastąpi odświerzenie strony
    a dane ze store zostaną 'wyczyszczone'
*/
const mapDispatchToProps = (dispatch) => {
    return {
        setUserCrudentials: (id, name, surname, email) => {
            dispatch({
                type: "LOGIN_SUCCESS",
                payload: {
                    id,
                    name,
                    surname,
                    email,
                }
            })
        }
    }
}

export default connect(undefined, mapDispatchToProps)(TestLogin)