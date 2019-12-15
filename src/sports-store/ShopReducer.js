import React from 'react'
import { ActionTypes, DataTypes } from './Types'

const ShopReducer = (state, action) => {
    // console.log("heh" + JSON.stringify(action.type))
    // console.log("heh" + JSON.stringify(action.payload))
    switch (action.type) {
        case ActionTypes.DATA_LOAD:
            console.log("here.." + JSON.stringify(action))
            return {
                ...state, [action.payload.dataType]: action.payload.data
            };
        case ActionTypes.FILTER_PRODUCTS:
            console.log("shop red to filter prods by ..." +JSON.stringify(state.products));
            return {
                ...state, [DataTypes.PRODUCTS] : action.payload.data
            }
        default:
            console.log("alt")
            return state || {};
    }
}

export default ShopReducer;