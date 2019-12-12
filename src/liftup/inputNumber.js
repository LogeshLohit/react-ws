import React, { Component } from 'react'

export default class NumberCheck extends Component {
    constructor() {
        super();
        this.state = {
            score: 10
        }
    }
    callmtd = (event) => {
        console.log('im called'+event.target.value)
    }

    render() {
        const score = this.state.score
        return (
            <div>
                <input type="text" name="score" value={this.state.score} onChange={(e)=>this.callmtd(e)} /><br></br>{score}
            </div>
        )
    }
}
