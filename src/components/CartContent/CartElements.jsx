import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import React from 'react'

const CartElements = () => {
    const { cart } = useContext(dataContext)
    return (
        cart.map((product) => {
            return (
                <div className="cartContainer" key={product.key}>
                    <div className="cart-content">
                        <img src={product.img} alt={product.city} />

                        <p>City: {product.city}</p>

                        <p>Price: ${product.price}</p>
                        {/* <button onClick={() => removeProduct(item.id)}>Eliminar</button> */}
                    </div>

                </div>

            )


        })
    )
}

export default CartElements