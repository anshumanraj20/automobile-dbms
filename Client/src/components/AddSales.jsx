import React,{useState} from 'react'

const AddSales = () => {
    const [formData, setFormData] = useState({
        sales_id:'',
        sales_date: '',
        selling_price:'',
         
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
    <h1>Sales Details</h1>
    <label>
      Sales ID:
      <input
        type="text"
        name="sales_id"
        value={formData.sales_id}
        onChange={handleChange}
      />
    </label>
    <label>
       Sales Date:
      <input
        type="date"
        name="selling_price"
        value={formData.sales_date}
        onChange={handleChange}
      />
    </label>
      
    <label>
       Sales Price:
      <input
        type="number"
        name="sales_date"
        value={formData.sales_price}
        onChange={handleChange}
      />
    </label>
      
     
    <button type="submit">Add Sales</button>
  </form>
  )
}

export default AddSales