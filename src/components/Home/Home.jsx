
import NavBar from '../NavBar/NavBar'
import Products from '../Products/Products'

const Home = () => {
    return (
        <>
            <NavBar />
            <div className="card-container">
                <Products />
            </div>

        </>
    )
}

export default Home