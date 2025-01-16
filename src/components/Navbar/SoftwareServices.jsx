import React from 'react';
import { Link } from 'react-router-dom'; 
import './HardwareT.css';

const SoftwareServices = () => {
  return (
    <div className='hardwaret'>
        <div className="hardware_t d-flex align-items-center p-3">
            <Link to="/software-services" className="text-decoration-none text-dark">Operating System Installation/Repair</Link>
        </div>
        <hr />
        <div className="hardware_t d-flex align-items-center p-3">
            <Link to="/software-services" className="text-decoration-none text-dark">Software Troubleshooting</Link>
        </div>
        <hr />
        <div className="hardware_t d-flex align-items-center p-3">
            <Link to="/software-services" className="text-decoration-none text-dark">Virus/Malware Removal</Link>
        </div>
        <hr />
        <div className="hardware_t d-flex align-items-center p-3">
            <Link to="/software-services" className="text-decoration-none text-dark">Data Backup and Recovery</Link>
        </div>
        <hr />
        <div className="hardware_t d-flex align-items-center p-3">
            <Link to="/software-services" className="text-decoration-none text-dark">System Optimization</Link>
        </div>
        <hr />
        <div className="hardware_t d-flex align-items-center p-3">
            <Link to="/software-services" className="text-decoration-none text-dark">Driver Installation</Link>
        </div>
        <hr />
        <div className="hardware_t d-flex align-items-center p-3">
            <Link to="/software-services" className="text-decoration-none text-dark">Network Solutions</Link>
        </div>
        <hr />
        <div className="hardware_t d-flex align-items-center p-3">
            <Link to="/software-services" className="text-decoration-none text-dark">Wi-Fi Setup and Troubleshooting</Link>
        </div>
        <hr />
        <div className="hardware_t d-flex align-items-center p-3">
            <Link to="/software-services" className="text-decoration-none text-dark">LAN Network Repair</Link>
        </div>
        <hr />
        <div className="hardware_t d-flex align-items-center p-3">
            <Link to="/software-services" className="text-decoration-none text-dark">Router Configuration</Link>
        </div>
        <hr />
        <div className="hardware_t d-flex align-items-center p-3">
            <Link to="/software-services" className="text-decoration-none text-dark">Network Security Services</Link>
        </div>
        <hr />
        <div className="hardware_t d-flex align-items-center p-3">
            <Link to="/software-services" className="text-decoration-none text-dark">Internet Connectivity Issues</Link>
        </div>
    </div>
  );
};

export default SoftwareServices;
