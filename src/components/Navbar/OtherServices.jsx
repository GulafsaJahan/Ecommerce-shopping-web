import React from 'react';
import { Link } from 'react-router-dom'; 
import './HardwareT.css';

const OtherServices = () => {
  return (
    <div className="hardwaret">
      <div className="hardware_t d-flex align-items-center p-3">
        <Link to="/other-services" className="text-decoration-none text-dark">
          Laptop Cleaning (Internal/External)
        </Link>
      </div>
      <hr />
      <div className="hardware_t d-flex align-items-center p-3">
        <Link to="/other-services" className="text-decoration-none text-dark">
          Dust and Heat Management
        </Link>
      </div>
      <hr />
      <div className="hardware_t d-flex align-items-center p-3">
        <Link to="/other-services" className="text-decoration-none text-dark">
          Data Migration Services
        </Link>
      </div>
      <hr />
      <div className="hardware_t d-flex align-items-center p-3">
        <Link to="/other-services" className="text-decoration-none text-dark">
          Computer Recycling
        </Link>
      </div>
    </div>
  );
};

export default OtherServices;
