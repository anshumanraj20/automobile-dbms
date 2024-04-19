import React from 'react'
import { FaUsers } from "react-icons/fa";
import { BsCarFrontFill } from "react-icons/bs";
import { SiGooglemaps } from "react-icons/si";
import { MdPersonPinCircle } from "react-icons/md";
import './home.css'

const Home = () => {
  return (
    <div className='container'>
    <div className='box' id='b1'>
        <div className='inside_box'>
             <FaUsers size={"3em"}/>
            <h2>Total Customers </h2>
            {/* <div className='counter'>{total} </div> */}
        </div>
    </div>
    <div className='box' id='b2'>
        <div className='inside_box'>
             <BsCarFrontFill size={"3em"}/>
            <h2>Total Vehicles</h2>
            {/* <div className='counter'>{failed} </div> */}
        </div>
    </div>
    <div className='box' id='b3'>
        <div className='inside_box'>
             <SiGooglemaps size={"3em"}/>
            <h2>Suppliers</h2>
            {/* <div className='counter'>{passed} </div> */}
        </div>
    </div>
    
    <div className='box' id='b4'>
        <div className='inside_box'>
             <MdPersonPinCircle size={"3em"}/>
            <h2>Dealers</h2>
            {/* <div className='counter'>{passed} </div> */}
        </div>
    </div>

</div>
  )
}

export default Home