import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import picture from "./Group 14865.png";
import pic from "./Support.png";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src={picture} alt="" width="100%" height="200px" />
      </div>

      <ul className="sidebar-menu">
        <li className="sidebar-menu-item">
          <Link to="/">Dashboard</Link>
        </li>
        <li className="sidebar-menu-item active">
          <Link to="/tasks">Tasks</Link>
        </li>
        <li className="sidebar-menu-item">
          <Link to="/investor">Investor</Link>
        </li>
        <li className="sidebar-menu-item">
          <Link to="/schedule">Schedule</Link>
        </li>
        <li className="sidebar-menu-item">Support</li>
      </ul>

      <div className="sidebar-footer">
        <button className="support-btn">Support</button>
        <ul className="sidebar-menu">
          <li className="sidebar-menu-item">Setting</li>
          <li className="sidebar-menu-item">Log Out</li>
        </ul>

        <div className="profile-section">
          <img src={pic} alt="" width="100%" height="250px" />
          <div>
            <p>Promod</p>
            <p>promod@capitalhub.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
