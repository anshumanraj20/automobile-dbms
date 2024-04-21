import React, { useState } from 'react';
import axios from 'axios';

const AddModels = () => {
    const [formData, setFormData] = useState({
        model_id: '',
        name: '',
        brand_id: '',
        price: '',
        category: '',
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
        axios.post('http://localhost:3000/api/addmodels', JSON.stringify(formData), {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                console.log('Response:', response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });

        setFormData({
            model_id: '',
            name: '',
            brand_id: '',
            price: '',
            category: '',
        });
    };

    return (
        <form className="form-container" onSubmit={handleSubmit}>
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
                Brand ID:
                <input
                    type="text"
                    name="brand_id"
                    value={formData.brand_id}
                    onChange={handleChange}
                />
            </label>
            <label>
                Price:
                <input
                    type="text"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                />
            </label>
            <label>
                Category:
                <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Add Model</button>
        </form>
    );
};

export default AddModels;
