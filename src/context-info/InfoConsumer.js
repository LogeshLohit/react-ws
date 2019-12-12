import React, { Component } from 'react'
import InfoContext from './InfoContext';
import InfoRender from './InfoRender';

// export class InfoConsumer extends Component {
//     render() {
//         return (
//             <InfoContext.Consumer>
//                 {info => <InfoRender info={info} />}
//             </InfoContext.Consumer>
//         )
//     }
// }

const InfoConsumer = () => (
    <InfoContext.Consumer>
        {info => <InfoRender value={info}/>}
    </InfoContext.Consumer>)
export default InfoConsumer
