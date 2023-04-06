import CartWidget from "./CartWidget";
import "./NavBar.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Navbar className="navBar" expand="lg">
        <Container className="nav-container">
          <Link className="logo" to={"/"}>
            {" "}
            <img
              src="/public/gate 05.png"
              alt=""
              width={140}
              height={100}
            />{" "}
          </Link>
          <Navbar.Toggle
            className="ms-auto"
            aria-controls="basic-nnpavbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-link mx-auto">
              <Link to={"/"}>Home</Link>
              <Link to={"/"}>Flights</Link>
              <Link to={"/"}>Offers</Link>
              <Link to={"/"}>Contact Us</Link>
            </Nav>
          </Navbar.Collapse>

          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
