// import React, { useState } from "react";
// import issues from "./IssuesDataSource";
// import IssueContext from "./Context";

// function IssueDataProvider(props) {
//     //const IssueContext = React.createContext();
//     const issues = "Hello";
//     return (
//         <IssueContext.Provider issue="hello">
//             {props.children}
//         </IssueContext.Provider>
//     );
// }
// export default IssueDataProvider;

import React, { Component } from 'react'
import { IssueContext } from './Context';

export class IssueDataProvider extends Component {
    render() {
        return (
            <IssueContext.Provider value = "logesh">
                {this.props.children}
            </IssueContext.Provider>
        )
    }
}

export default IssueDataProvider
