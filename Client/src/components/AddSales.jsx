import React, { useState } from 'react';
import axios from 'axios';

const AddSales = () => {
  const [formData, setFormData] = useState({
    sales_id: '',
    sale_date: '',
    dealer_id: '',
    customer_id: '',
    selling_price: '',
    vin: '',
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null); // Clear any previous errors

    // Validation example: check if required fields are filled
    if (!formData.sales_id || !formData.sale_date) {
      setError('Please fill out all required fields.');
      return;
    }

    axios
      .post('http://localhost:3000/api/addSales', formData)
      .then((response) => {
        console.log('Response:', response.data);
        setFormData({
          sales_id: '',
          sale_date: '',
          dealer_id: '',
          customer_id: '',
          selling_price: '',
          vin: '',
        });
      })
      .catch((error) => {
        console.error('Error:', error);
        setError('An error occurred. Please try again later.');
      });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h1>Sales Details</h1>
      {error && <div className="error-message">{error}</div>}
      <label>
        sales_id:
        <input
          type="text"
          name="sales_id"
          value={formData.sales_id}
          onChange={handleChange}
        />
      </label>

      <label>
        sale_date:
        <input
          type="date"
          name="sale_date"
          value={formData.sale_date}
          onChange={handleChange}
        />
      </label>

      <label>
        dealer_id:
        <input
          type="text"
          name="dealer_id"
          value={formData.dealer_id}
          onChange={handleChange}
        />
      </label>
      <label>
        customer_id:
        <input
          type="text"
          name="customer_id"
          value={formData.customer_id}
          onChange={handleChange}
        />
      </label>
      <label>
        selling_price:
        <input
          type="text"
          name="selling_price"
          value={formData.selling_price}
          onChange={handleChange}
        />
      </label>
      <label>
        vin:
        <input
          type="text"
          name="vin"
          value={formData.vin}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Add Sales</button>
    </form>
  );
};

export default AddSales;
