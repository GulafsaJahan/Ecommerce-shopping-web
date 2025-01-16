import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Logo from "../../assets/electronic.png";
import Tippy from "@tippyjs/react";
import AccountT from "./AccountT";
import "tippy.js/themes/light.css";
import { Link } from "react-router-dom";
import { useCart } from "../../CartContext";
import RegisterModal from "./RegistraterModal";
import Login from "./Login";

const Header = () => {
  const { cartCount } = useCart();

  // State for modals and dropdown visibility
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  // Modal open/close handlers
  const closeRegisterModal = () => setRegisterModalOpen(false);
  const closeLoginModal = () => setLoginModalOpen(false);

  // Open Register Modal
  const openRegisterModal = () => {
    setRegisterModalOpen(true);
    setLoginModalOpen(false);  // Ensure login modal is closed when opening register
    setDropdownVisible(false); // Close dropdown when modal is opened
  };

  // Open Login Modal
  const openLoginModal = () => {
    setLoginModalOpen(true);
    setRegisterModalOpen(false); // Ensure register modal is closed when opening login
    setDropdownVisible(false); // Close dropdown when modal is opened
  };



  return (
    <div className="container-fluid bg-white z-3 position-sticky top-0 py-2 px-5 shadow-sm">
      <div className="d-flex align-items-center justify-content-between px-4">
        {/* Logo and Brand Name */}
        <div className="d-flex align-items-center">
          <Link to="/" className="d-flex align-items-center text-decoration-none text-dark">
            <img src={Logo} alt="logo" className="me-5" style={{ maxHeight: "50px" }} />
            <span className="fs-5 fw-bold d-none d-sm-block">PC RepairMaster</span>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="flex-grow-1 d-flex justify-content-center px-3">
          <div className="d-flex align-items-center bg-success-subtle rounded-4 px-2" style={{ width: "100%", maxWidth: "500px" }}>
            <SearchIcon className="text-muted fs-4" />
            <input
              type="text"
              placeholder="Search for products"
              className="border-0 bg-transparent p-2 fs-6 text-secondary w-100"
              style={{ outline: "none" }}
            />
          </div>
        </div>

        {/* Account and Cart */}
        <div className="d-flex align-items-center gap-3">
          {/* Account Dropdown */}
          <div className="position-relative me-5">
            <Tippy
              theme="light"
              visible={isDropdownVisible} // Control dropdown visibility
              onClickOutside={() => setDropdownVisible(false)} // Hide dropdown when clicked outside
              content={
                <AccountT
                  openRegisterModal={openRegisterModal}
                  openLoginModal={openLoginModal}
                />
              }
              interactive={true}
            >
              <button
                className="d-flex align-items-center justify-content-center p-2 fw-semibold border-0 bg-white gap-2 text-dark fs-6 rounded cursor-pointer"
                onClick={() => setDropdownVisible(!isDropdownVisible)} // Toggle dropdown visibility
              >
                <AccountCircleIcon />
                <span className="d-none d-sm-inline">Account</span>
                <ExpandMoreIcon />
              </button>
            </Tippy>
          </div>

          {/* Cart Icon */}
          <Link to="/checkout/cart" className="text-decoration-none text-dark">
            <div className="d-flex align-items-center position-relative">
              <ShoppingCartIcon className="fs-4" />
              {cartCount > 0 && (
                <span
                  className="badge bg-danger position-absolute"
                  style={{
                    top: "-10px",
                    right: "-10px",
                    borderRadius: "50%",
                    fontSize: "0.75rem",
                    padding: "4px 6px",
                  }}
                >
                  {cartCount}
                </span>
              )}
              <span className="fs-6 ms-2 d-none d-sm-inline">Cart</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Modals */}
      {isRegisterModalOpen && <RegisterModal onClose={closeRegisterModal} onOpenLogin={openLoginModal} />}
      {isLoginModalOpen && <Login onClose={closeLoginModal} onOpenRegister={openRegisterModal} />}
    </div>
  );
};

export default Header;
