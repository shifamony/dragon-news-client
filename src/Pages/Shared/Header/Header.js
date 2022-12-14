import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {
  const {user, logOut} = useContext(AuthContext);

const handleLogOut = () => {
  logOut()
  .then(() => {})
  .catch(error => console.error(error))
}

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand><Link to='/'>React-Bootstrap</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/">Home</Nav.Link>
            <Nav.Link to="/news">News</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className='align-items-center'>
            <>
              {
                user?.uid 
                ?
               <>
                <span>{user?.displayName} </span>
                <Button variant="success" onClick={handleLogOut}>Logout</Button>
               </>
                :
                <>
                 <Link to='/login' className='ms-3 text-decoration-none bg-danger text-white p-2 rounded fw-bold'>Login</Link>
                 <Link to='/register' className='ms-3 text-decoration-none bg-warning text-white p-2 rounded fw-bold'>Register</Link>
                </>
              }
              
            
            </>
            <Link to='/profile'>
              {
                user?.photoURL ?
                <Image style={{height:'60px'}} roundedCircle src={user.photoURL}></Image>
                :
                <FaUser></FaUser>
              }
            </Link>
          </Nav>
          <div  className="d-lg-none">
            <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;