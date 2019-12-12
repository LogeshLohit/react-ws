import React, { Component } from 'react'
import { ShopContext } from './ShopContext'
class ShoppingProvider extends Component {

    constructor(props) {
        super(props)

        this.state = {
            products: [
                { id: 100, category: "Books", productName: "Wings of fire" },
                { id: 101, category: "Cricket", productName: "SG bat" },
                { id: 102, category: "Books", productName: "Harry potter" }
            ],
            cart: []
        }
    }

    addProductToCart = (productId) => {
        console.log("this method is called.." + productId);
        const productToBeAdded = this.state.products.find(p => p.id === productId);
        console.log("found produt : " + JSON.stringify(productToBeAdded))
        console.log("cart list before" + this.state.cart.length)
        this.setState({
            cart:  [...this.state.cart, productToBeAdded] 
        })
        console.log("cart list after" + this.state.cart)
    }
    
    removeProductFromCart = (productId) => {
        this.setState({ cart: this.state.cart.filter(p => p.id !== productId) });
    }
    render() {
        return (
            <ShopContext.Provider value={{
                products: this.state.products, cart: this.state.cart,
                addProductToCart: this.addProductToCart, removeProductFromCart: this.removeProductFromCart
            }} >
                {this.props.children}
            </ShopContext.Provider >
        )
    }
}

export default ShoppingProvider
