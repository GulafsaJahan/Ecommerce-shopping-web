import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";

const AccountT = ({ openRegisterModal, openLoginModal }) => {
  return (
    <div className="container-fluid p-3 border rounded shadow-sm" style={{ width: "235px" }}>
      {/* Register Option */}
      <div
        className="d-flex align-items-center mb-2"
        style={{ cursor: "pointer" }}
        onClick={openRegisterModal} // Trigger Register Modal
      >
        <AccountCircleIcon className="me-2" />
        <p className="mb-0">Register</p>
      </div>
      <hr />
      {/* Login Option */}
      <div
        className="d-flex align-items-center mb-2"
        style={{ cursor: "pointer" }}
        onClick={openLoginModal} // Trigger Login Modal
      >
        <AccountCircleIcon className="me-2" />
        <p className="mb-0">Login</p>
      </div>
      <hr />
      {/* Logout Option */}
      <div
        className="d-flex align-items-center"
        style={{ cursor: "pointer" }}
      >
        <LogoutIcon className="me-2" />
        <p className="mb-0">Logout</p>
      </div>
    </div>
  );
};

export default AccountT;
