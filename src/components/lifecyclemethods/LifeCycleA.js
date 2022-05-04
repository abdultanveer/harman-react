import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'


export class LifeCycleA extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'abdul'
        }
        console.log("lifecycle A constructor")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("lifecycle A getDerivedStateFromProps")
        return null
    }


    render() {
        console.log("lifecycle A render")

        return (
            <div>
                <div>LifeCycleA</div>
                <LifeCycleB/>
            </div>
        )
    }
}

export default LifeCycleA