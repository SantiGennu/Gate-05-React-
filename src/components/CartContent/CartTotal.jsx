import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const CartTotal = () => {
    const { cart } = useContext(dataContext)
    console.log(cart)
    const total = cart.reduce((acc, el) => acc + parseFloat(el.price), 0)

    return (
        <div className="cart-total">
            <p>total:$ {total}</p>
        </div>
    )
}

export default CartTotal