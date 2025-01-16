import React from 'react';
import { Link } from 'react-router-dom'; 
import './HardwareT.css';

const Upgrades = () => {
  return (
    <div className="hardwaret">
      <div className="hardware_t d-flex align-items-center p-3">
        <Link to="/customization-upgrades" className="text-decoration-none text-dark">
          Custom PC Builds
        </Link>
      </div>
      <hr />
      <div className="hardware_t d-flex align-items-center p-3">
        <Link to="/customization-upgrades" className="text-decoration-none text-dark">
          Gaming PC Upgrades
        </Link>
      </div>
      <hr />
      <div className="hardware_t d-flex align-items-center p-3">
        <Link to="/customization-upgrades" className="text-decoration-none text-dark">
          Performance Optimization
        </Link>
      </div>
      <hr />
      <div className="hardware_t d-flex align-items-center p-3">
        <Link to="/customization-upgrades" className="text-decoration-none text-dark">
          Overclocking Setup
        </Link>
      </div>
      <hr />
      <div className="hardware_t d-flex align-items-center p-3">
        <Link to="/customization-upgrades" className="text-decoration-none text-dark">
          Graphics Card Installation
        </Link>
      </div>
    </div>
  );
};

export default Upgrades;
