import React, { Component } from 'react'
import { allProducts as Products } from './DataStore'

export class ProductsCatalog extends Component {
    constructor(props) {
        super(props)

        this.state = {
            allProducts: Products
        }
    }

    displayProductsByCategory = (category) => {
        const { categories, products, orders } = this.state.allProducts
        // console.log([...this.state.allProducts.products.filter(p=>console.log(p.name))])
        console.log("called" + category)
        this.setState({
            allProducts:
                (category === null || category === undefined) ? Products : { ...Products, products: [...Products.products.filter(p => p.category === category)] }
        })
    }
    render() {
        const { categories, products, orders } = this.state.allProducts
        return (
            <div className="row">
                <div className="col col-4">
                    <button className="btn btn-outline-primary" onClick={() => this.displayProductsByCategory(null)}>All</button>
                    {
                        categories.map(c => <div className="m-2 p-2" key={c}>
                            <button onClick={() => this.displayProductsByCategory(c)} className="btn btn-outline-primary" >{c}</button></div>)
                    }
                </div>
                <div className="col col-6 bg-info">
                    {products.length != 0 &&
                        products.map(c => <div className="bg-dark m-2 p-2" key={c.name}>
                            <h6 className="btn btn-outline-primary">{c.name}</h6></div>)
                    }
                </div>
            </div>
        )
    }
}

export default ProductsCatalog
