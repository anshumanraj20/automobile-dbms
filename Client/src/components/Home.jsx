import React, { useState, useEffect } from 'react';
import { FaUsers } from "react-icons/fa";
import { BsCarFrontFill } from "react-icons/bs";
import { SiGooglemaps } from "react-icons/si";
import { MdPersonPinCircle } from "react-icons/md";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import './home.css';
import axios from 'axios';
import { RiLogoutCircleLine } from "react-icons/ri";
import { TbBrandAnsible } from "react-icons/tb";
import { IoLogoModelS } from "react-icons/io";
import { TbChartHistogram } from "react-icons/tb";

const style = {
    position: 'absolute',
    top: '57%',
    left: '55%',
    bottom:'2%',
    transform: 'translate(-50%, -50%)',
    width: 850,
    height: 700,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
     
};

const Home = () => {
    const [open, setOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, [modalContent]);

    const fetchData = async () => {
        try {
            let endpoint = '';
            if (modalContent === 'Customers') {
                endpoint = '/api/showcustomers';
            } else if (modalContent === 'Vehicles') {
                endpoint = '/api/showvehicles';
            } else if (modalContent === 'Suppliers') {
                endpoint = '/api/showsuppliers';
            }
             else if (modalContent === 'Dealers') {
                endpoint = '/api/showdealers';
            }
             else if (modalContent === 'Models') {
                endpoint = '/api/showmodels';
            }
             else if (modalContent === 'Brands') {
                endpoint = '/api/showbrands';
            }
             else if (modalContent === 'Plants') {
                endpoint = '/api/showplants';
            }
             else if (modalContent === 'Sales') {
                endpoint = '/api/showsales';
            }
            const response = await axios.get(`http://localhost:3000${endpoint}`);
            // console.log(response.data)
            setData(response.data);
            setError(null);
        } catch (error) {
            console.error('Error fetching data:', error);
            // setError('Error fetching data. Please try again later.');
        }
    };

    const handleOpen = (content) => {
        setModalContent(content);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setModalContent('');
    };

    return (
        <div className='container'>
            {error && <p>{error}</p>}
            <div className='box' id='b1' onClick={() => handleOpen('Customers')}>
                <div className='inside_box' >
                    <FaUsers size={"2.5em"} />
                    <h2>Customers</h2>
                </div>
            </div>
            <div className='box' id='b2' onClick={() => handleOpen('Vehicles')}>
                <div className='inside_box'>
                    <BsCarFrontFill size={"2.5em"} />
                    <h2>Vehicles</h2>
                </div>
            </div>
            <div className='box' id='b3' onClick={() => handleOpen('Suppliers')}>
                <div className='inside_box'>
                    <SiGooglemaps size={"2.5em"} />
                    <h2>Suppliers</h2>
                </div>
            </div>
            <div className='box' id='b4' onClick={() => handleOpen('Dealers')}>
                <div className='inside_box'>
                    <MdPersonPinCircle size={"3em"} />
                    <h2>Dealers</h2>
                </div>
            </div>
            <div className='row_2 flex '>
            <div className='box' id='b5' onClick={() => handleOpen('Models')}>
                <div className='inside_box'>
                    <IoLogoModelS  size={"3em"} />
                    <h2>Models</h2>
                </div>
            </div>
            <div className='box' id='b6' onClick={() => handleOpen('Brands')}>
                <div className='inside_box'>
                    <TbBrandAnsible size={"3em"} />
                    <h2>Brands</h2>
                </div>
            </div>
            <div className='box' id='b7' onClick={() => handleOpen('Plants')}>
                <div className='inside_box'>
                    < RiLogoutCircleLine size={"3em"} />
                    <h2>Plants</h2>
                </div>
            </div>
            <div className='box' id='b8' onClick={() => handleOpen('Sales')}>
                <div className='inside_box'>
                    <TbChartHistogram  size={"3em"} />
                    <h2>Sales</h2>
                </div>
            </div>
            
            </div>
            
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='box_container'>
                        <h1 className='small_head'>{modalContent}</h1>
                        {modalContent && (
                            <table>
                                <thead>
                                    {modalContent === 'Customers' && (
                                        <tr>
                                            <th>customer_id</th>
                                            <th>Customer Name</th>
                                            <th>Phone No.</th>
                                            <th>Address</th>
                                            <th>Gender</th>
                                            {/* <th>Action</th> */}
                                        </tr>
                                    )}
                                    {modalContent === 'Vehicles' && (
                                        <tr>
                                            <th>vin</th>
                                            <th>Colour</th>
                                            <th>Manufacture Date</th>
                                            <th>Model ID</th>
                                            <th>Plant ID</th>
                                            <th>Supplier ID</th>
                                            {/* <th>Action</th> */}
                                        </tr>
                                    )}
                                    {modalContent === 'Suppliers' && (
                                        <tr>
                                            <th>supplier_id</th>
                                            <th>name</th>
                                            <th>supplier_address</th>
                                            <th>plant_id</th>
                                            {/* <th>Action</th> */}
                                        </tr>
                                    )}
                                    {modalContent === 'Dealers' && (
                                        <tr>
                                            <th>dealer_id</th>
                                            <th>dealer_name</th>
                                            <th>phone_no.</th>
                                            <th>dealer_address</th>
                                            <th>gender</th>
                                            {/* <th>Action</th> */}
                                        </tr>
                                    )}
                                    {modalContent === 'Models' && (
                                        <tr>
                                            <th>model_id</th>
                                            <th>model_name</th>
                                            <th>brand_id</th>
                                            <th>price</th>
                                            <th>category</th>
                                            {/* <th>Action</th> */}
                                        </tr>
                                    )}
                                    {modalContent === 'Brands' && (
                                        <tr>
                                            <th>brand_id</th>
                                            <th>brand_name</th>
                                            
                                            {/* <th>Action</th> */}
                                        </tr>
                                    )}
                                    {modalContent === 'Plants' && (
                                        <tr>
                                            <th>palnt_id</th>
                                            <th>plant_name</th>
                                            <th>plant_address</th>
                                            
                                            {/* <th>Action</th> */}
                                        </tr>
                                    )}
                                    {modalContent === 'Sales' && (
                                        <tr>
                                            <th>sales_id</th>
                                            <th>sale_date</th>
                                            <th>dealer_id</th>
                                            <th>customer_id</th>
                                            <th>selling_price</th>
                                            <th>VIN</th>
                                            {/* <th>Action</th> */}
                                        </tr>
                                    )}
                                </thead>
                                <tbody>
                                    {data.map((item,key) => (
                                        <tr key={key}> {/* Assuming each item has a unique identifier */}
                                            {modalContent === 'Customers' && (
                                                <>
                                                    <td>{item.customer_id}</td>
                                                    <td>{item.customer_name}</td>
                                                    <td>{item.phone_no}</td>
                                                    <td>{item.address}</td>
                                                    <td>{item.gender}</td>
                                                </>
                                            )}
                                            {modalContent === 'Vehicles' && (
                                                <>
                                                    <td>{item.vin}</td>
                                                    <td>{item.color}</td>
                                                    <td>{item.manufacture_date}</td>
                                                    <td>{item.model_id}</td>
                                                    <td>{item.plant_id}</td>
                                                    <td>{item.supplier_id}</td>
                                                </>
                                            )}
                                            {modalContent === 'Suppliers' && (
                                                <>
                                                    <td>{item.supplier_id}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.supplier_address}</td>
                                                    <td>{item.plant_id}</td>
                                                </>
                                            )}
                                            {modalContent === 'Dealers' && (
                                                <>
                                                    <td>{item.dealer_id}</td>
                                                    <td>{item.dealer_name}</td>
                                                    <td>{item.phone_no}</td>
                                                    <td>{item.dealer_address}</td>
                                                    <td>{item.gender}</td>
                                                </>
                                            )}
                                            {modalContent === 'Sales' && (
                                                <>
                                                    <td>{item.sales_id}</td>
                                                    <td>{item.sale_date}</td>
                                                    <td>{item.dealer_id}</td>
                                                    <td>{item.customer_id}</td>
                                                    <td>{item.selling_price}</td>
                                                    <td>{item.vin}</td>
                                                </>
                                            )}
                                            {modalContent === 'Models' && (
                                                <>
                                                    <td>{item.model_id}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.brand_id}</td>
                                                    <td>{item.price}</td>
                                                    <td>{item.category}</td>
                                                </>
                                            )}
                                            {modalContent === 'Brands' && (
                                                <>
                                                    <td>{item.brand_id}</td>
                                                    <td>{item.name}</td>
                                                   
                                                </>
                                            )}
                                            {modalContent === 'Plants' && (
                                                <>
                                                    <td>{item.plant_id}</td>
                                                    <td>{item.plant_name}</td>
                                                    <td>{item.plant_address}</td>
                                                  
                                                </>
                                            )}
                                            {/* <td><button className='btttn'>Delete</button></td> */}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </Box>
            </Modal>
            </div>
        
    );
}

export default Home;
