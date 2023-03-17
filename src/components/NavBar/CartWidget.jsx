import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    return (
        <Nav className="nav-cart mx-auto">
            <Link to={"/cart"}>
                <button className="btn-cart">
                    <span className="material-symbols-outlined">
                        shopping_cart
                    </span>

                </button>
            </Link>

        </Nav >
    )
}

export default CartWidget