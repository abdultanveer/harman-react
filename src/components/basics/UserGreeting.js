import React, { Component } from 'react'

export class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }


    render() {
        return this.state.isLoggedIn && <div>welcome abdul</div>
    }
}

export default UserGreeting