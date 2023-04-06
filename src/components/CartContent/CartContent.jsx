import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import CartElements from './CartElements'
import "./CartContent.css"
import CartTotal from './CartTotal'
import Navbar from "../NavBar/NavBar"

const CartContent = () => {
    const { cart } = useContext(dataContext)

    return cart.length > 0 ? (

        <>
            <Navbar />

            <div className="cartElements">

                <CartElements />
                <CartTotal />
            </div>

        </>

    ) : (
        <>
            <Navbar />
            <h2>Your cart is empty</h2>
        </>
    )

}

export default CartContent