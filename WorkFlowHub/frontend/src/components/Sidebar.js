import React from 'react';
import './Sidebar.css';
import { FaTachometerAlt, FaTasks, FaUsers, FaChartLine } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">WorkFlowHub</div>
      <ul>
        <li><FaTachometerAlt /> Dashboard</li>
        <li><FaTasks /> Tasks</li>
        <li><FaUsers /> Employees</li>
        <li><FaChartLine /> Reports</li>
      </ul>
    </div>
  );
}
export default Sidebar;
