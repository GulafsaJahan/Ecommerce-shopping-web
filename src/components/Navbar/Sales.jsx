import React from 'react'
import { Link } from 'react-router-dom'; 
import './HardwareT.css';

const Sales = () => {
  return (
    <div className="hardwaret">
      <div className="hardware_t d-flex align-items-center p-3">
        <Link to="/sales-and-consultants" className="text-decoration-none text-dark">
          New Hardware Sales
        </Link>
      </div>
      <hr />
      <div className="hardware_t d-flex align-items-center p-3">
        <Link to="/sales-and-consultants" className="text-decoration-none text-dark">
          Refurbished Computer Sales
        </Link>
      </div>
      <hr />
      <div className="hardware_t d-flex align-items-center p-3">
        <Link to="/sales-and-consultants" className="text-decoration-none text-dark">
          Upgrade Recommendations
        </Link>
      </div>
      <hr />
      <div className="hardware_t d-flex align-items-center p-3">
        <Link to="/sales-and-consultants" className="text-decoration-none text-dark">
          IT Consultation
        </Link>
      </div>
    </div>
  );
};

export default Sales;
