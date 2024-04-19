import React, { useState } from 'react';
import './addsupplier.css'
import axios from 'axios';

const AddSupplierForm = () => {
  const [formData, setFormData] = useState({
    supplier_id:'',
    name: '',
    supplier_address: '',
    plant_id: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, for now, just log the form data
    console.log(formData);
    axios.post('http://localhost:3000/api/addsuppliers', formData)
      .then(response => {
        console.log('Response:', response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    // Clear form fields after submission
    setFormData({
      supplier_id:'',
      name: '',
      supplier_address: '',
      plant_id: ''
    });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h1>Supplier Details</h1>
      <label>
        Supplier ID:
        <input
          type="text"
          name="supplier_id"
          value={formData.supplier_id}
          onChange={handleChange}
        />
      </label>
      <label>
        Supplier Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Plant Address:
        <input
          type="text"
          name="supplier_address"
          value={formData.supplier_address}
          onChange={handleChange}
        />
      </label>
      <label>
        Plant ID:
        <input
          type="text"
          name="plant_id"
          value={formData.plant_id}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add Supplier</button>
    </form>
  );
};

export default AddSupplierForm;
