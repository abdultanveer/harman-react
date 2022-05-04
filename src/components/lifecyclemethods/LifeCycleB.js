import React, { Component } from 'react'

export class LifeCycleB extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'abdul'
        }
        console.log("lifecycle B constructor")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("lifecycle B getDerivedStateFromProps")
        return null
    }


    shouldComponentUpdate() {
        console.log("shouldComponentUpdate B")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate B")
        return null

    }

    componentDidUpdate() {
        console.log("componentdidUpdate B")

    }

    render() {
        console.log("lifecycle B render")

        return (

            <div>LifeCycleB</div>

        )
    }
}

export default LifeCycleB