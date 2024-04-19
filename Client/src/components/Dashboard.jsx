import React from 'react'
import { Link, Outlet, useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import './dashboard.css'
import { MdDashboardCustomize } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { RiLogoutCircleLine } from "react-icons/ri";

function Dashboard() {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <Link
              to="/"
              className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-5 fw-bolder d-none d-sm-inline">
                LOGO
              </span>
            </Link>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="w-100">
                <Link
                  to="/"
                  className="nav-link text-white px-0 align-middle"
                >
                   <MdDashboardCustomize size={"1.5em"}/>
                  <span className="ms-2 d-none d-sm-inline">Dashboard</span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/addvehicles"
                  className="nav-link px-0 align-middle text-white"
                >
                 <FaCar size={"1.5em"}/>
                  <span className="ms-2 d-none d-sm-inline">Add Vehicles</span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/addcustomers"
                  className="nav-link px-0 align-middle text-white"
                >
                     <FaUserAlt size={"1.5em"}/>
                
                  <span className="ms-2 d-none d-sm-inline">Add Customer</span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/addsuppliers"
                  className="nav-link px-0 align-middle text-white"
                >
                     <FaUsers size={"1.5em"}/>
                  <span className="ms-2 d-none d-sm-inline">
                   Add Suppliers
                  </span>
                </Link>
              </li>
             
             
              <li className="w-100">
              <Link
                  className="nav-link px-0 align-middle text-white"
                >
                   <RiLogoutCircleLine size={"1.5em"}/>
                  <span className="ms-2 d-none d-sm-inline">Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col p-0 m-0">
            <div  className="p-4 d-flex justify-content-center shadow">
                <h4 id="head">Automobile </h4>
            </div>
            <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard