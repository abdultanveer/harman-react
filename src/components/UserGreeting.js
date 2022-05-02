import React, { Component } from 'react'

export class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }


    render() {
        let message
        if (this.state.isLoggedIn) {
            message =  <div>welcome abdul</div>
        }
        else {
            message =  <div>welcome guest</div>
        }
        return message
    }
}

export default UserGreeting