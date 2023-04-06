import { Button, Dropdown, Nav } from "react-bootstrap"
import DropdownMenu from "react-bootstrap/esm/DropdownMenu"
import DropdownToggle from "react-bootstrap/esm/DropdownToggle"
import { Link } from "react-router-dom"



const CartWidget = () => {
    return (
        <Nav className="nav-cart mx-auto">
            <Link to={"/cart"}>
                <button className="btn-cart">
                    <span className="material-symbols-outlined">
                        shopping_cart
                    </span>
                    <span className="quantity">
                        0
                    </span>
                </button>
            </Link>
        </Nav>



    )
}

export default CartWidget