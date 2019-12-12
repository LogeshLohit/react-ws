import React from 'react'

export default function RenderTest() {
    const state = {
        name : "logesh",
        phone : {
            home: ""
        }
    }

    const change = (event) =>{
        console.log("event occured!...."+event.target.name)
        this.setState({
            name:event.target.name
        })
    }
    return (
        <div>
            {/* "This is my example rendering..."{name.split('').map((i,index)=>index %2 == 0 ? i : i.toUpperCase()).reverse()} */}
        {state.name}
            <div>
                Enter first value: <input type="text" name="firstValue" onChange={change} />
            </div>
        </div>
    )
}

