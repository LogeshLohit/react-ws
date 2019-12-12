import React from 'react'

function DisplayProducts(props) {
    return (
        <div>
            {
                props.products.map(
                    product => <h1 key={product.id}>{product.id} {product.category} {product.productName}
                        <button key={product.id} onClick={() => props.addProductToCart(product.id)}>Add to cart</button>
                        </h1>
                        )}
        </div>
    )
}

export default DisplayProducts
