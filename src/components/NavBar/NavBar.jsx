import CartWidget from "./CartWidget"
import "./NavBar.css"
import { Container, Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"


const NavBar = () => {
    return (
        <>
            <Navbar className="navBar" expand="lg">
                <Container className="nav-container">
                    <Link className="logo" to={"/"}> <img src="/src/assets/gate 05.png" alt="" width={120} height={80} /> </Link>
                    <Navbar.Toggle className="ms-auto" aria-controls="basic-nnpavbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="nav-link mx-auto">
                            <Link to={"/"}>Home</Link>
                            <Link to={"/"}>Flights</Link>
                            <Link to={"/"}>Offers</Link>
                        </Nav>

                    </Navbar.Collapse>

                    <CartWidget />

                </Container>
            </Navbar>
        </>
    )
}

export default NavBar