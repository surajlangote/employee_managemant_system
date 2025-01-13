import React from 'react';
import { Link } from 'react-router-dom';
// import emp1 from './Images/emp1.jpg';
// import './Header.css'; // Custom CSS

export default function EmpHeader() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
                <div className="container-fluid">
                    <Link className="nav-link text-light" to="/home"><img src=""></img>Employee Management System</Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/home">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/about">
                                    About
                                </Link>
                            </li>



                        </ul>
                    </div>

                    <div className='navbar-nav ms-auto'>
                        <Link className='btn btn-outline-warning' state={{ marginLeft: "20px" }} to="/">Logout</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}