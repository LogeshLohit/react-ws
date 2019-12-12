import React, { Component } from 'react'
import NumberCheck from './inputNumber';

export default class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: '',
            square: ''
        }
    }

    handleChange = (event) => {
        console.log("here")
        const { name, value } = event.target;
        if (Number.isNaN(parseFloat(value))) {

            this.setState({ [name]: value })

            console.log("not a value")
            if (name === 'number') {
                this.setState({ 'square': '' })
            }
            if (name === 'square') {
                this.setState({ 'number': '' })
            }
        } else {
            this.setState({ [name]: value })

            if (name === 'number') {
                this.setState({ 'square': (value * value) })
            }
            if (name === 'square') {
                this.setState({ 'number': Math.sqrt(value) })
            }
        }

    }
    render() {
        const { number, square } = this.state;
        const result = (number > 10) ? "Greater than 10 " : "Less than 10";
        return (
            <div>
                Number : <input type="text" name="number" value={number} onChange={this.handleChange} /><br></br>
                Square root: <input type="text" name="square" value={square} onChange={this.handleChange} /><br></br>
                <NumberCheck></NumberCheck>
                {result}
            </div>
        )
    }
}
