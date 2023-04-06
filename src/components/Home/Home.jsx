import Navbar from "../NavBar/NavBar"
import Hero from '../Hero/Hero'
import Products from '../Products/Products'

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <div className="card-container">
                <Products />
            </div>
        </>


    )
}

export default Home