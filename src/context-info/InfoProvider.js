import React, { Component } from 'react'
import InfoContext from './InfoContext';
import InfoConsumer from './InfoConsumer';

export class InfoProvider extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cars: {
                car001: { name: 'Honda', price: 100 },
                car002: { name: 'BMW', price: 150 },
                car003: { name: 'Mercedes', price: 200 }
            }
        }
    }

    render() {
        return (
            <InfoContext.Provider info={{ cars: "helo"}}>
                {this.props.children}
            </InfoContext.Provider>
        )
    }
}

export default InfoProvider
