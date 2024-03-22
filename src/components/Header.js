import { Navbar, Nav, Container } from "react-bootstrap";
import {Link} from 'react-router-dom';

function Header(){
    return (
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto navbar-wrapper">
                <Link to="/home">Home</Link>
                <Link to="/add-product" >Add</Link>
                <Link to="/update-product" >Update</Link>
                <Link to="/login" >Login</Link>
                <Link to="/register" >Signup</Link>
            </Nav>

            </Container>
        </Navbar>
    )
}

export default Header;