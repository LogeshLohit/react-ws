import { allProducts as PRODUCTS } from './DataStore';
import { ActionTypes, DataTypes } from './Types';

export const loadData = (dataType) => {
    console.log("load data call")
    return {//dataType can be categories, products, orders
        type: ActionTypes.DATA_LOAD,
        payload: {
            dataType: dataType,
            data: PRODUCTS[dataType]
        }
    }
}

export const filterProductsByCategory = (category) => {
    console.log("request to filter prods by : " + category + " " + PRODUCTS[DataTypes.PRODUCTS])
    // console.log(JSON.stringify(PRODUCTS[DataTypes.PRODUCTS].filter(p => p.category === category)))
    return {
        type: ActionTypes.FILTER_PRODUCTS,
        payload: {
            data: category === null  || !category || category === undefined?
                null : PRODUCTS[DataTypes.PRODUCTS].filter(p => p.category === category)
        }
    }
}