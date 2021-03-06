import React from 'react'
import { buyCake } from './CakeAction'
import { connect } from 'react-redux';
function CakeContainer(props) {
    return (
        <div>
            Num of cakes {props.numOfCakes}
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
