import { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import {Container} from 'react-bootstrap';

function ListProducts() {
  const { products, dispatch } = useContext(ProductsContext);

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_PRODUCT', payload: id });
  };

  return (
    <Container className="mt-5">
      <h2 className='text-center mb-5'>PRODUCT LIST</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Label</th>
            <th>Image</th>
            <th>Prix</th>
            <th>Qte Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center">No products available</td>
            </tr>
          ) : (
            products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.label}</td>
                <td>
                  <img src={product.image} alt={product.label} style={{ width: '50px' }} />
                </td>
                <td>{product.prix}</td>
                <td>{product.qteStock}</td>
                <td>
                  <Button variant="warning" as={Link} to={`/edit/${product.id}`}>
                    <FaEdit /> Edit
                  </Button>{' '}
                  <Button variant="danger" onClick={() => handleDelete(product.id)}>
                    <FaTrash /> Delete
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
      <div className="text-center">
        <Button as={Link} to="/add" variant="primary">Add Product</Button>
      </div>
    </Container>
  );
}

export default ListProducts;
