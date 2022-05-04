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

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate A")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("getSnapshotBeforeUpdate A")
        return null

    }

    componentDidUpdate(){
        console.log("componentdidUpdate A")

    }

    changeState = () => {
        this.setState(
            {
                name: 'abdul react'
            }
        )
    }

    render() {
        console.log("lifecycle A render")

        return (
            <div>
                <div>LifeCycleA {this.state.name}</div>
                <button onClick={this.changeState}>change state</button>
                <LifeCycleB/>
            </div>
        )
    }
}

export default LifeCycleA