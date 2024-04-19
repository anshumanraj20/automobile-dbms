import React,{useState} from 'react'

const AddPlants = () => {
    const [formData, setFormData] = useState({
        plant_id:'',
        plant_address: '',
         
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      
  return (
    <form className="form-container">
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
       Plant Address:
      <input
        type="text"
        name="address"
        value={formData.plant_address}
        onChange={handleChange}
      />
    </label>
      
     
    <button type="submit">Add Plants</button>
  </form>
  )
}

export default AddPlants