import React, { Component } from 'react'

export default class SetStateTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "logesh",
            education: {
                college: ""
            }
        }
    }
    change = (event) => {
        console.log("Colllege name entered : " + event.target.value);
        console.log("Before setting value to state: " + JSON.stringify(this.state));
        this.setState({
            education: {
                college: event.target.value
            }
        }, () => { console.log("After setting value to state: " + JSON.stringify(this.state)) })

    }
    render() {
        return (
            <div>
                <div>
                    Enter college value: <input type="text" name="firstValue" onChange={this.change} />
                </div>
            </div>
        )
    }
}
