import React, { Component } from 'react'
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
    componentWillMount() {
        this.props.setInitialValue(this.props.intialValue)
    }
    render() {
        return (
            <div>
                  bu {this.incrementCounter}{this.props.counter},{this.props.intialValue}.
                <button type="button" onClick={this.props.incrementCounter} >Button clicked {this.props.counter} times</button>
            </div>
        )
    }
}

export default ButtonCounter
