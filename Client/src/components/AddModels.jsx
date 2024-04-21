import React, { useState } from "react";
import { toast } from "react-toastify";
const AddModels = () => {
  const [formData, setFormData] = useState({
    model_id: "",
    name: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form className="form-container">
      <h1>Model Details</h1>
      <label>
        Model ID:
        <input
          type="text"
          name="model_id"
          value={formData.model_id}
          onChange={handleChange}
        />
      </label>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>

      <label>
        Price:
        <input
          type="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Add Model</button>
    </form>
  );
};

export default AddModels;
