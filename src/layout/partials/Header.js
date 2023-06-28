import {Navbar , Nav} from 'react-bootstrap';
import logo from '../../assets/image/logo.jpg';
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
    const navigate = useNavigate();

    const logMeOut = () => {
        navigate("/");
    }
    return (
        <Navbar collapseOnSelect bg="info" variant="dark" expand="md" className='w-100'>
            <Navbar.Brand className='mx-3'>
                <img src={logo} alt="logo" width="50px" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto nav">
                    <LinkContainer to="/dashboard">
                        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/tickets">
                        <Nav.Link href="/dashboard">Tickets</Nav.Link>
                    </LinkContainer>
                    <Nav.Link onClick={logMeOut}>Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;
