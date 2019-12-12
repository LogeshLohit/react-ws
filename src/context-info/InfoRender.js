import React, { Component } from 'react'
import InfoContext from './InfoContext';

export class InfoRender extends Component {
    render() {
        return (
            <div>
                <InfoContext.Consumer>
                    {info => <div>{info}</div>}
                </InfoContext.Consumer>
            </div>
        )
    }
}

export default InfoRender
