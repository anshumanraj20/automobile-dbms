import React,{useState}from 'react'

const AddBrands = () => {
  
    const [formData, setFormData] = useState({
      Brand_id:'',
      Brand_name: '',
       
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
  <h1>Brand Details</h1>
  <label>
    Brand ID:
    <input
      type="text"
      name="brand_id"
      value={formData.Brand_id}
      onChange={handleChange}
    />
  </label>
  <label>
     Brand Name:
    <input
      type="text"
      name="brand_name"
      value={formData.Brand_name}
      onChange={handleChange}
    />
  </label>
  
 
   
  
   
       
   
  <button type="submit">Add Brands</button>
</form>
)
}

export default AddBrands