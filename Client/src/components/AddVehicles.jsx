import React, { useState } from 'react';
import './addvehicles.css'
import axios from 'axios';

const AddVehicles = () => {
  const [formData, setFormData] = useState({
    vin:'',
    color: '',
    manufacture_date: '',
    model_id: '',
    plant_id: '',
    supplier_id: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios.post('http://localhost:3000/api/addvehicles', formData)
      .then(response => {
        console.log('Response:', response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    setFormData({
      vin:'',
      color: '',
      manufacture_date: '',
      model_id: '',
      plant_id: '',
      supplier_id: '',
    });
  }


  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h1>Add vehicles</h1>
      <div>
        <label htmlFor="plant_id">VIN:</label>
        <input
          type="text"
          id="vin"
          name="vin"
          value={formData.vin}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="color">Color:</label>
        <input
          type="text"
          id="color"
          name="color"
          value={formData.color}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="manufacture_date">Manufacture Date:</label>
        <input
          type="date"
          id="manufacture_date"
          name="manufacture_date"
          value={formData.manufacture_date}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="model_id">Model ID:</label>
        <input
          type="text"
          id="model_id"
          name="model_id"
          value={formData.model_id}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="plant_id">Plant ID:</label>
        <input
          type="text"
          id="plant_id"
          name="plant_id"
          value={formData.plant_id}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="supplier_id">Supplier ID:</label>
        <input
          type="text"
          id="supplier_id"
          name="supplier_id"
          value={formData.supplier_id}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add Vehicles</button>
    </form>

  )
}

export default AddVehicles