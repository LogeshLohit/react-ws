import React, { Component, useEffect } from 'react'
import { connect } from 'react-redux';
import { DataTypes } from './Types';
import { loadData, filterProductsByCategory } from './ActionCreators'
// const mapStateToProps = state => ({ ...state })
// const mapDispatchToProps = {
//     loadData
// }
// export const DisplayProducts = connect(mapStateToProps, mapDispatchToProps)(
//     class extends Component {
//         render() {
//             return (
//                 <div>
//                     Hello!{JSON.stringify(this.props)}
//                 </div>
//             )
//         }
//         componentDidMount() {
//             this.props.loadData(DataTypes.CATEGORIES)
//         }
//     }
// )

// export default DisplayProducts;

function DisplayProducts(props) {
    const { categories, products } = props

    useEffect(() => {
        props.loadData(DataTypes.PRODUCTS)
        props.loadData(DataTypes.CATEGORIES)
        console.log(JSON.stringify(props))
    }, [])

    // const filterProducts = (products, category) => {
    //     //const { categories, products, orders } = props
    //     // console.log([...this.state.allProducts.products.filter(p=>console.log(p.name))])
    //     console.log("called" + category)
    //     return (category === null || category === undefined) ?
    //         products : products.filter(p => p.category === category)
    // }

    return (
        <div className="row">
            <div className="col col-4">
                <button className="btn btn-outline-primary" onClick={() => props.loadData(DataTypes.PRODUCTS)}>All</button>
                {categories &&
                    categories.map(c => <div className="m-2 p-2" key={c}>
                        <button onClick={() => props.filterProductsByCategory(c)} className="btn btn-outline-primary" >{c}</button></div>)
                }
            </div>
            <div className="col col-6 bg-info">
                {products &&
                    products.map(c => <div className="bg-dark m-2 p-2" key={c.name}>
                        <h6 className="btn btn-outline-primary">{c.name}</h6></div>)
                }
            </div>
        </div>
    )
}
const mapStateToProps = state => ({ ...state })
const mapDispatchToProps = {
    loadData, filterProductsByCategory
}
export default connect(mapStateToProps, mapDispatchToProps)(DisplayProducts)