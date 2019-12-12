import React, { Component } from 'react'

const incrementCounter = (WrappedComponent,incrementBy) => {

    class IncrementCounter extends Component {
        constructor(props) {
            super(props)

            this.state = {
                counter: 0
            }
        }

        incrementCounter = () => {
            this.setState({ counter: this.state.counter + incrementBy })
        }

        render() {
            return (
                <div>
                    <WrappedComponent counter={this.state.counter} incrementCounter={this.incrementCounter} />
                </div>
            )
        }
    }

    return IncrementCounter;

}
export default incrementCounter;