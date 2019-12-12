import React from 'react'

export function DisplayProductsInCart(props) {
    return (
        <div>
            {
                props.cart.map(
                    product => <h1 key={product.id}>{product.id} {product.category} {product.productName}
                        <button key={product.id} onClick={() => props.removeProductFromCart(product.id)}>Remove Item</button>
                        </h1>
                        )}
        </div>
    )
}

export default DisplayProductsInCart
