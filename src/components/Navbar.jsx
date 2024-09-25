import Nav from 'react-bootstrap/Nav';
import { Link, useLocation } from 'react-router-dom';
import { Form, FormControl, Button } from 'react-bootstrap';
import { ImSearch } from "react-icons/im";

function Navbar() {
  const location = useLocation();

  return (
    <Nav variant="tabs" defaultActiveKey="/home" className="justify-content-center p-2">
      <Nav.Item className="mx-2">
        <Nav.Link as={Link} to="/" disabled>
          MyApp
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="mx-2">
        <Nav.Link as={Link} to="/List-Products">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="mx-2">
        <Nav.Link as={Link} to="/Form">
          FormApp
        </Nav.Link>
      </Nav.Item>

      {location.pathname === '/List-Products' && (
        <div>
          <Form inline className="d-flex" style={{position:'absolute', right:0, marginRight:'30px'}}>
            <FormControl type="text" placeholder="Search Products" className="" />
            <Button variant="dark"><ImSearch /></Button>
          </Form>
        </div>
      )}
    </Nav>
  );
}

export default Navbar;
