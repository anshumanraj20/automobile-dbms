import React, { useState } from "react";
import { toast } from "react-toastify";
const AddBrands = () => {
  const [formData, setFormData] = useState({
    Brand_id: "",
    Brand_name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios
      .post('http://localhost:3000/api/addbrands', formData)
      .then((response) => {
        console.log('Response:', response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    setFormData({
      brand_id: '',
      name: '',
    });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h1>Brand Details</h1>
      <label>
        Brand ID:
        <input
          type="text"
          name="brand_id"
          value={formData.brand_id}
          onChange={handleChange}
        />
      </label>
      <label>
      name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add Brands</button>
    </form>
  );
};

export default AddBrands;
