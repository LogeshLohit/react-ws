import React, { Component } from 'react'

export default class Table extends Component {
    render() {
        const { heros } = this.props;
        const herosList = heros.map((hero, index) => (
            <tr key={hero.name}><td key={hero.name}>{hero.name.toString().toUpperCase() }</td><td>{hero.power}</td>
                <td><button onClick={() => this.props.removeHero(index)}>Remove</button></td></tr>
        ))
        return (
            <div>
                <table border="2"><thead><tr><td>Name</td><td>Power</td><td></td></tr></thead>
                    <tbody>{herosList}</tbody></table>
            </div>
        )
    }
}
