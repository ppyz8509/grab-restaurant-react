/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import AuthService from "../services/auth.server";
import { useState } from "react";

const NavBar = () => {
    const [user, setUser] =useState(AuthService.getCurrentUser)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Grab Restaurant</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/add">Add</Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link className="nav-link " to="/search">Search</Link>
                    </li>
                    {!user && (
                    <li className="nav-item">
                        <Link className="nav-link " to="/SingIn">SingIn</Link>
                    </li>
                    )}
                    {!user && (
                    <li className="nav-item">
                        <Link className="nav-link " to="/SingUp">SingUp</Link>
                    </li>
                    )}
                    {user && (
                    <li className="nav-item">
                        <Link className="nav-link " to="/SingUp">Logout</Link>
                    </li>
                    )}
                   
                   
                </ul>
               
            </div>
        </nav>
    )
}


export default NavBar;