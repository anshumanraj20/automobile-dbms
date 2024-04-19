import React, { useState } from 'react'
import './addcustomer.css'
import axios from 'axios'

const AddCustomers = () => {

  const [formData, setFormData] = useState({
    customer_id:'',
    customer_name: '',
    phone: '',
    address: '',
    gender: '',
    customer_id: "",
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
    console.log(formData);
    axios.post('http://localhost:3000/api/addcustomers', formData)
      .then(response => {
        console.log('Response:', response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });

    setFormData({
      customer_id:'',
      customer_name: '',
      phone: '',
      address: '',
      gender: ''
    });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h1>Customer Details</h1>
      <label>
        Customer ID:
        <input
          type="text"
          name="customer_id"
          value={formData.customer_id}
          onChange={handleChange}
        />
      </label>
      <label>
        Customer Name:
        <input
          type="text"
          name="customer_name"
          value={formData.customer_name}
          onChange={handleChange}
        />
      </label>
      
      <label>
        Phone No:
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </label>
      <label>
        Address:
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </label>
      <label>
        Gender:
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="M">Male</option>
          <option value="F">Female</option>
          <option value="O">Other</option>
        </select>
      </label>
      <button type="submit">Add Customer</button>
    </form>
  );
}

export default AddCustomers

