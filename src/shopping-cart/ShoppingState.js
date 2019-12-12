import React, { Component } from 'react'
import { ShopContext } from './ShopContext'
import DisplayProducts from './DisplayProducts';
import { DisplayProductsInCart} from './DisplayCart';

export class ShoppingState extends Component {

    render() {
        return (
            <div>
                Hi, there!
                <ShopContext.Consumer>
                    {
                        (value) => <div>{value.cart[0]}</div>
                    }
                </ShopContext.Consumer>
            </div>
        )
    }
}

export default ShoppingState
{/* <React.Fragment>
                            <DisplayProducts products={value.products} addProductToCart={value.addProductToCart} />
                            Books in cart ......
                            <DisplayProductsInCart cart = {value.cart} removeProductFromCart= {value.removeProductFromCart} />
                        </React.Fragment> */}