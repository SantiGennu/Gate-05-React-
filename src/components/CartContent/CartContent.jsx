import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import CartElements from './CartElements'
import "./CartContent.css"
import CartTotal from './CartTotal'



const CartContent = () => {
    const { cart } = useContext(dataContext)



    return cart.length > 0 ? (
        <>
            <div className="cartElements">
                <CartElements />
                <CartTotal />
            </div>
        </>

    ) : (
        <h2>Your cart is empty</h2>
    )

}

export default CartContent