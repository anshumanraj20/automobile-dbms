import React, { useState } from "react";
import "./adddealer.css";
import axios from "axios";
import { toast } from "react-toastify";
const AddDealers = () => {
  const [formData, setFormData] = useState({
    dealer_id: "",
    dealer_name: "",
    phone_no: "",
    dealer_address: "",
    gender: "",
    dealer_id: "",
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
      .post("http://localhost:3000/api/adddealers", formData)
      .then((response) => {
        toast.success("dealer added successfully");
        console.log("Response:", response.data);
      })
      .catch((error) => {
        toast.error(error.message);
        console.error("Error ");
      });

    setFormData({
      dealer_id: "",
      dealer_name: "",
      phone_no: "",
      dealer_address: "",
      gender: "",
    });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h1>Dealer Details</h1>
      <label>
        Dealer ID:
        <input
          type="text"
          name="dealer_id"
          value={formData.dealer_id}
          onChange={handleChange}
        />
      </label>
      <label>
        Dealer Name:
        <input
          type="text"
          name="dealer_name"
          value={formData.dealer_name}
          onChange={handleChange}
        />
      </label>

      <label>
        Phone No:
        <input
          type="tel"
          name="phone_no"
          value={formData.phone_no}
          onChange={handleChange}
        />
      </label>
      <label>
        Address:
        <input
          type="text"
          name="dealer_address"
          value={formData.dealer_address}
          onChange={handleChange}
        />
      </label>
      <label>
        Gender:
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">Select</option>
          <option value="M">Male</option>
          <option value="F">Female</option>
          <option value="O">Other</option>
        </select>
      </label>
      <button type="submit">Add dealer</button>
    </form>
  );
};

export default AddDealers;
