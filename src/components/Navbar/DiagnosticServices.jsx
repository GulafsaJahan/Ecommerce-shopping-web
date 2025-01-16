import React from 'react';
import { Link } from 'react-router-dom';
import './HardwareT.css';

const DiagnosticServices = () => {
  return (
    <div className="hardwaret">
      <div className="hardware_t d-flex align-items-center p-3">
        <Link to="/diagnostic-services" className="text-decoration-none text-dark">
          Full System Diagnostic
        </Link>
      </div>
      <hr />
      <div className="hardware_t d-flex align-items-center p-3">
        <Link to="/diagnostic-services" className="text-decoration-none text-dark">
          Hardware Compatibility Checks
        </Link>
      </div>
      <hr />
      <div className="hardware_t d-flex align-items-center p-3">
        <Link to="/diagnostic-services" className="text-decoration-none text-dark">
          Blue Screen Error Troubleshooting
        </Link>
      </div>
    </div>
  );
};

export default DiagnosticServices;
