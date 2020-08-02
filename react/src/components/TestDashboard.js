import React from 'react'
import { connect } from 'react-redux'

class TestDashboard extends React.Component {
    constructor(props) {
        super()
    }
    render() {
        return (
            <div>
                <h1>This is test string from TestDashboard</h1>
                <h3>User crudentials from redux store</h3>
                <p>{this.props.userCrudentials.name}</p>
                <p>{this.props.userCrudentials.surname}</p>
                <p>{this.props.userCrudentials.email}</p>
            </div>
        )
    }
}

const mapPropsToState = (state) => {
    return {
        userCrudentials: state
    }
}

export default connect(mapPropsToState)(TestDashboard)