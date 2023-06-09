import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import "./Products.css"

const Products = () => {
    const { data, cart, setCart } = useContext(dataContext)
    const buyProducts = (product) => {
        setCart([...cart, product])

    }
    return data.map((product) => {
        return (

            <div className="card" key={product.key}>
                <img className="card-img-top" src={product.img} alt="img-product" />
                <h4 className="card-title">{product.city} </h4>
                <div className="card-body">
                    <p className="price">${product.price}</p>
                    <button onClick={() => buyProducts(product)} id={product.id} className="button"><span className="material-symbols-outlined">
                        flight_takeoff
                    </span></button>
                </div>
            </div >

        )
    })

}

export default Products