import React, { Component } from 'react'

export default class AddHero extends Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     name: "",
        //     power: ""

        // }
        this.state = {
            //hero: {
            name: "",
            power: ""
            //}
        }
        //  this.state = this.initialState
    }

    handleChange = (event) => {
        // console.log('bef ass: ' + JSON.stringify(this.state))
        const { name, value } = event.target
        // console.log([name] + "<>" + event.target.value)
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        // console.log("submiteed")
        event.preventDefault();
        // this.state.hero.name = this.state.name;
        //this.state.hero.power = this.state.power;
        //this.setState(this.initialState)
        console.log('name' + this.state.name)


        this.setState({
            name: this.state.name,
            power: this.state.power
        })
        //this.props.addHero(this.state);
        //console.log("hero:" + JSON.stringify(this.state.hero))
        // this.state.hero.push()

    }
   
    render() {
        const { name, power } = this.state;
        return (
            <div>
                Gng to add Hero here!
                <form onSubmit={this.handleSubmit}>
                    Enter Hero name : <input type="text" name="name" value={name} onChange={this.handleChange} />

                    Enter Hero Power : <input type="text" name="power" value={power} onChange={this.handleChange} />
                    <button type="submit">Sbumit</button>
                </form>
                <div>
                    Enter first value: <input type="text" name="firstValue" onChange={this.change} />
                </div>
            </div>
        )
    }
}
