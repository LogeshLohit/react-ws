import React, { Component } from 'react'
import incrementCounter from './incrementCounter'
export class ButtonCounter extends Component {
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
        return (
            <div>
                <button type="button" onClick={this.props.incrementCounter} >Button clicked {this.props.counter} times</button>
            </div>
        )
    }
}

export default incrementCounter(ButtonCounter,5)
