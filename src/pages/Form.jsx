import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from "react-bootstrap";

function FormApp() {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', birthDate: '', ville: '', gender: '', interests: [], address: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Handle checkboxes separately
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        interests: checked
          ? [...prevData.interests, value]
          : prevData.interests.filter((interest) => interest !== value)
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required.';
    if (!formData.lastName) newErrors.lastName = 'Last name is required.';
    if (!formData.email) {
      newErrors.email = 'Email is required.';
    } else if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = 'Invalid email.';
    }
    if (!formData.birthDate) newErrors.birthDate = 'Birth date is required.';
    if (!formData.ville) newErrors.ville = 'City is required.';
    if (!formData.gender) newErrors.gender = 'Gender is required.';
    if (formData.interests.length === 0) newErrors.interests = 'At least one interest is required.';
    if (!formData.address) newErrors.address = 'Address is required.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log(formData);
      // Submit form data here
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <Container className="w-50">
    <Form onSubmit={handleSubmit} className="mt-5 w-100">
        <h1 className="text-center">FORM APP</h1>
      <Form.Group className="mb-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter FirstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          isInvalid={!!errors.firstName}
        />
        <Form.Control.Feedback type="invalid">
          {errors.firstName}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter LastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          isInvalid={!!errors.lastName}
        />
        <Form.Control.Feedback type="invalid">
          {errors.lastName}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          isInvalid={!!errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {errors.email}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Birth Date</Form.Label>
        <Form.Control
          type="date"
          name="birthDate"
          value={formData.birthDate}
          onChange={handleChange}
          isInvalid={!!errors.birthDate}
        />
        <Form.Control.Feedback type="invalid">
          {errors.birthDate}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Ville</Form.Label>
        <Form.Select
          name="ville"
          value={formData.ville}
          onChange={handleChange}
          isInvalid={!!errors.ville}>

          <option value="">Select City</option>
          <option value="City1">City1</option>
          <option value="City2">City2</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          {errors.ville}
        </Form.Control.Feedback>
      </Form.Group>


      <Form.Group className="mb-3">
        <Form.Label>Gender</Form.Label>
        <Form.Check
          type="radio"
          label="Female"
          name="gender"
          value="female"
          checked={formData.gender === "female"}
          onChange={handleChange}
          isInvalid={!!errors.gender}
        />
        <Form.Check
          type="radio"
          label="Male"
          name="gender"
          value="male"
          checked={formData.gender === "male"}
          onChange={handleChange}
          isInvalid={!!errors.gender}
        />
        <Form.Control.Feedback type="invalid">
          {errors.gender}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Interests</Form.Label>
        <Form.Check
          type="checkbox"
          label="Reading"
          name="interests"
          value="Reading"
          checked={formData.interests.includes('Reading')}
          onChange={handleChange}
          isInvalid={!!errors.interests}
        />
        <Form.Check
          type="checkbox"
          label="Sleeping"
          name="interests"
          value="Sleeping"
          checked={formData.interests.includes('Sleeping')}
          onChange={handleChange}
          isInvalid={!!errors.interests}
        />
        <Form.Check
          type="checkbox"
          label="Coding"
          name="interests"
          value="Coding"
          checked={formData.interests.includes('Coding')}
          onChange={handleChange}
          isInvalid={!!errors.interests}
        />
        <Form.Control.Feedback type="invalid">
          {errors.interests}
        </Form.Control.Feedback>
      </Form.Group>


      <Form.Group className="mb-3">
        <Form.Label>Address</Form.Label>
        <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            isInvalid={!!errors.address} 
        />
        <Form.Control.Feedback type="invalid">
            {errors.address}
        </Form.Control.Feedback>
    </Form.Group>

        <div className="text-center">
      <Button variant="primary" type="submit" className="px-5">
        Submit
      </Button>
      </div>
    </Form>
    </Container>
  );
}

export default FormApp;
