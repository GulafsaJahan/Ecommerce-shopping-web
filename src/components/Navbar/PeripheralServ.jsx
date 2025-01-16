import React from 'react';
import { Link } from 'react-router-dom'; 
import './HardwareT.css';

const PeripheralServ = () => {
  return (
    <div className="hardwaret">
      <div className="hardware_t d-flex align-items-center p-3">
        <Link to="/peripheral-devices" className="text-decoration-none text-dark">
          Printer Repair and Setup
        </Link>
      </div>
      <hr />
      <div className="hardware_t d-flex align-items-center p-3">
        <Link to="/peripheral-devices" className="text-decoration-none text-dark">
          Scanner Troubleshooting
        </Link>
      </div>
      <hr />
      <div className="hardware_t d-flex align-items-center p-3">
        <Link to="/peripheral-devices" className="text-decoration-none text-dark">
          External Hard Drive Repair
        </Link>
      </div>
      <hr />
      <div className="hardware_t d-flex align-items-center p-3">
        <Link to="/peripheral-devices" className="text-decoration-none text-dark">
          Webcam and Microphone Issues
        </Link>
      </div>
    </div>
  );
};

export default PeripheralServ;
