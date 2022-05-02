import React, { Component } from 'react'

export class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
//if you dont use setState method UI will not re render
    increment() {
        this.setState(
        {count: this.state.count +1},
         () =>{  //callback that will be called after the state is set
            console.log("call back value is--",this.state.count)
        }
        )
        console.log(this.state.count) //synchronous call -- this gets called before the state is set
    }

    render() {
        return (
            <div>
                <div>Counter -- {this.state.count}</div>
                <button
                    onClick = {
                        () => this.increment()
                    }
                >increment</button>
            </div>
        )
    }
}

export default Counter