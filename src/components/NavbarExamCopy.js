import React from "react";
import { NavLink } from "react-router-dom";

export const NavbarExam =()=>(
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
        <div className="navbar-brand">
            Github
        </div>
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/examinA" className="nav-link">Examin</NavLink>
            </li>
        </ul>
    </nav>
)