
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <Nav variant="tabs" defaultActiveKey="/home" className='justify-content-center' >
      <Nav.Item className='justify-content-left'>
        <Nav.Link as={Link} to="/" disabled> 
          MyApp
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/List-Products">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/Form">
          Add Product
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navbar;
