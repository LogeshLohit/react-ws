import React, { Component } from 'react'
import incrementCounter from './incrementCounter'
export class HoverCounter extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         counter: 0
    //     }
    // }

    // incrementCounter = () => {
    //     this.setState({ counter: (this.state.counter + 1) })
    // }

    render() {
        const { counter, incrementCounter } = this.props
        return (
            <div>
                <h1 onMouseOver={incrementCounter} >Mouse hover {counter} times</h1>
            </div>
        )
    }
}

export default incrementCounter(HoverCounter, 10)
