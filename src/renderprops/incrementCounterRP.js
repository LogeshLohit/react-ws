import React, { Component } from 'react'

//const incrementCounter = (WrappedComponent,incrementBy) => {

export class IncrementCounter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
    }
    setInitialValue = (initValue) => {
        console.log("setting Initial value: " + initValue)
        this.setState({ counter: initValue })
    }
    incrementCounter = () => {
        this.setState({ counter: this.state.counter + 1 })
    }

    render() {
        return (
            <div>
                incrementBy {this.props.incrementCounter}{this.props.counter},{this.props.intialValue}.
                {/* <WrappedComponent counter={this.state.counter} incrementCounter={this.incrementCounter} /> */}
                {this.props.display(this.state.counter, this.incrementCounter, this.setInitialValue)}
            </div>
        )
    }
}

//  return IncrementCounter;

//}
export default IncrementCounter;