import React, { Component } from "react";

import imagine from "../assets/img/sidebar-3.jpg";
//import logo from "./assets/img/reactlogo.png";

class Sidebar extends Component {
    render() {
        return (

            <div className="sidebar" data-image="../assets/img/sidebar-5.jpg">

                <div className="sidebar-wrapper">
                    <div className="logo">
                        <a href="#" className="simple-text">
                            IOT Dashboard
                    </a>
                    </div>
                    <ul className="nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="dashboard.html">
                                <i className="nc-icon nc-chart-pie-35"></i>
                                <p>Dashboard</p>
                            </a>
                        </li>
                        
                        
                    </ul>
                </div>
            </div>
        )
    }
}

export default Sidebar;