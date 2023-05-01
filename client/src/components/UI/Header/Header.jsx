import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../context/AuthContext'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(UserContext)

    const logout = () => {
        localStorage.removeItem("token")
        localStorage.setItem('isLoggedIn', false);
        setIsLoggedIn(false)
    }
    
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">Task Manager</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {!isLoggedIn
                            ?
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            :
                            <Nav.Link onClick={logout}>Logout</Nav.Link>
                        }
                        {!isLoggedIn && <Nav.Link as={Link} to="/register">Registration</Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;