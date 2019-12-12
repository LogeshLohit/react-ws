import React, { Component } from 'react'

export class Context extends Component {
    reactContxt = React.createContext("logesh");
    value = reactContxt.Provider();

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Context
