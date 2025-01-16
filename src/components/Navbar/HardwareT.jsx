import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link for routing
import './HardwareT.css';

const HardwareT = () => {
  return (
    <div className="hardwaret">
        <div className="hardware_t d-flex align-items-center p-3">
            <Link to="/hardware-services" className="text-decoration-none text-dark">Motherboard Repair</Link>
        </div>
        <hr />
        <div className="hardware_t d-flex align-items-center p-3">
            <Link to="/hardware-services" className="text-decoration-none text-dark">Hard Drive Replacement</Link>
        </div>
        <hr />
        <div className="hardware_t d-flex align-items-center p-3">
            <Link to="/hardware-services" className="text-decoration-none text-dark">RAM Upgrades</Link>
        </div>
        <hr />
        <div className="hardware_t d-flex align-items-center p-3">
            <Link to="/hardware-services" className="text-decoration-none text-dark">Screen/LCD Repair</Link>
        </div>
        <hr />
        <div className="hardware_t d-flex align-items-center p-3">
            <Link to="/hardware-services" className="text-decoration-none text-dark">Keyboard Replacement</Link>
        </div>
        <hr />
        <div className="hardware_t d-flex align-items-center p-3">
            <Link to="/hardware-services" className="text-decoration-none text-dark">Battery Replacement (Laptops)</Link>
        </div>
    </div>
  );
};

export default HardwareT;
