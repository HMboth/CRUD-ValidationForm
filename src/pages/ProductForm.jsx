import { useContext, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductsContext } from '../context/ProductsContext';
import { Button, Form } from 'react-bootstrap';
import { faker } from '@faker-js/faker';

function ProductForm() {
  const { products, dispatch } = useContext(ProductsContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const isEditMode = !!id;

  const initialFormData = {
    label: '',
    image: '',
    prix: '',
    qteStock: ''
  };

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (isEditMode) {
      const productToEdit = products.find(product => product.id === id);
      if (productToEdit) {
        setFormData(productToEdit);
      }
    }
  }, [id, products, isEditMode]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditMode) {
      dispatch({ type: 'EDIT_PRODUCT', payload: formData });
    } else {
      const newProduct = {
        id: faker.datatype.uuid(), 
        ...formData
      };
      dispatch({ type: 'ADD_PRODUCT', payload: newProduct });
    }
    navigate('/List-Products'); 
  };

  return (
    <div className="container mt-5 w-50">
      <h2 className='text-center'>{isEditMode ? 'EDIT PRODUCT' : 'ADD NEW PRODUCT'}</h2>
      <Form onSubmit={handleSubmit} className='w-100'>
        <Form.Group className="mb-3">
          <Form.Label>Label</Form.Label>
          <Form.Control
            type="text"
            name="label"
            value={formData.label}
            onChange={handleChange}
            placeholder="Enter product label"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Enter image URL"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="prix"
            value={formData.prix}
            onChange={handleChange}
            placeholder="Enter product price"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Quantity in Stock</Form.Label>
          <Form.Control
            type="number"
            name="qteStock"
            value={formData.qteStock}
            onChange={handleChange}
            placeholder="Enter quantity in stock"
            required
          />
        </Form.Group>
        <div className='text-center'>
        <Button variant="success" type="submit" className="px-5">
          {isEditMode ? 'Save Changes' : 'Add Product'}
        </Button>
        </div>
      </Form>
    </div>
  );
}

export default ProductForm;
