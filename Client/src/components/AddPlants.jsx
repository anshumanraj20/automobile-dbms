import React,{useState} from 'react'
import axios from 'axios';

const AddPlants = () => {
    const [formData, setFormData] = useState({
        plant_id:'',
        plant_name:'',
        plant_address: '',
         
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
        axios.post('http://localhost:3000/api/addplants', formData)
          .then(response => {
            console.log('Response:', response.data);
          })
          .catch(error => {
            console.error('Error:', error);
          });
    
        setFormData({
          plant_id:'',
          plant_name:'',
          plant_address: '',
        });
      };
    
    
      
  return (
    <form className="form-container" onSubmit={handleSubmit}>
    <h1>Plant Details</h1>
    <label>
      Plant ID:
      <input
        type="text"
        name="plant_id"
        value={formData.plant_id}
        onChange={handleChange}
      />
    </label>
    <label>
      plant_name:
      <input
        type="text"
        name="plant_name"
        value={formData.plant_name}
        onChange={handleChange}
      />
    </label>
    <label>
       Plant Address:
      <input
        type="text"
        name="plant_address"
        value={formData.plant_address}
        onChange={handleChange}
      />
    </label>
      
     
    <button type="submit">Add Plants</button>
  </form>
  )
}

export default AddPlants