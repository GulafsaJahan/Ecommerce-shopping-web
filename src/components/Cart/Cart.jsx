import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import productImg from "../../assets/pc1.webp";
import { Link } from "react-router-dom";
import StepProgressBar from "./StepProgressBar";

const Cart = () => {
  const [pinCode, setPinCode] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setShowModal(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
    setError(""); // Clear error when closing modal
    setPinCode(""); // Optionally reset the pin code input
  };

  // Handle pin code validation
  const handleCheckPinCode = () => {
    if (!pinCode) {
      setError("Invalid pin code");
    } else {
      setError(""); // Clear error if pin code is valid
    }
  };

  // Sample cart item data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Product Title 1",
      price: 1000,
      discount: 200,
      image: productImg,
      quantity: 1,
    },
    {
      id: 2,
      title: "Product Title 2",
      price: 2000,
      discount: 400,
      image: productImg,
      quantity: 1,
    },
  ]);

  // Handle increment quantity
  const incrementQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Handle decrement quantity
  const decrementQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Handle removing an item
  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Calculate total price
  const getTotalPrice = () =>
    cartItems.reduce(
      (acc, item) => acc + (item.price - item.discount) * item.quantity,
      0
    );

  return (
    <div style={{ background: "#e0e0e0" }}>
      <Header />
      {/* Step Progress Bar Section */}
      <div className="container my-3">
        <StepProgressBar currentStep={0} />
      </div>

      <div className="container my-3">
        <div className="row">
          {/* Left Side - Cart Items (8 columns) */}
          <div className="col-lg-8">
            {/* Address and Pin Code Section */}
            <div className="p-3 mb-2 bg-white shadow-sm d-flex justify-content-between align-items-center">
              <span className="fs-5 fw-bold">From Saved Address</span>
              <button className="btn btn-outline-primary" onClick={openModal}>
                Enter Pin Code
              </button>
            </div>

            {/* Modal Component */}
            {showModal && (
              <div className="modal fade show d-block" tabIndex="-1">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Enter Pin Code</h5>
                      <button
                        type="button"
                        className="btn-close"
                        onClick={closeModal}
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="input-group mb-3 border">
                        <input
                          type="text"
                          className="form-control border-0 focus:outline-0"
                          placeholder="Enter pin code"
                          value={pinCode}
                          onChange={(e) => setPinCode(e.target.value)}
                        />
                        <button
                          className="btn border-0 outline-0"
                          type="button"
                          onClick={handleCheckPinCode}
                        >
                          Check
                        </button>
                      </div>
                      {error && <div className="text-danger mt-2">{error}</div>}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Backdrop for the modal */}
            {showModal && (
              <div
                className="modal-backdrop fade show"
                onClick={closeModal}
              ></div>
            )}

            {/* Cart Items List */}
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="p-3 border bg-white shadow-sm d-flex"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="me-4"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "contain",
                  }}
                />
                <div className="flex-grow-1">
                  <h5 className="fw-bold">{item.title}</h5>
                  <p className="mb-1">
                    Price:{" "}
                    <span className="fw-bold">
                      ₹{item.price - item.discount}
                    </span>{" "}
                    <del className="text-muted">₹{item.price}</del>
                  </p>
                  <p className="text-success">Discount: ₹{item.discount}</p>

                  {/* Quantity Controls */}
                  <div className="d-flex align-items-center my-2">
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => decrementQuantity(item.id)}
                    >
                      -
                    </button>
                    <span className="mx-3">{item.quantity}</span>
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => incrementQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>

                  {/* Action Buttons */}
                  <div>
                    <button
                      className="btn btn-link text-decoration-none text-muted fs-6"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                    <button className="btn btn-link text-decoration-none text-muted fs-6">
                      Save for Later
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Price Details (4 columns) */}
          <div className="col-lg-4">
            <div className="p-3 bg-white shadow-sm">
              <h5 className="fw-bold mb-3">Price Details</h5>
              <hr />
              <div className="d-flex justify-content-between mb-2">
                <span>Price</span>
                <span>
                  ₹
                  {cartItems.reduce(
                    (acc, item) => acc + item.price * item.quantity,
                    0
                  )}
                </span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Discount</span>
                <span className="text-success">
                  -₹
                  {cartItems.reduce(
                    (acc, item) => acc + item.discount * item.quantity,
                    0
                  )}
                </span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Delivery Charges</span>
                <span className="text-success">Free</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between fw-bold">
                <span>Total Amount</span>
                <span>₹{getTotalPrice()}</span>
              </div>
              <Link to='/checkout/address' className="btn btn-primary w-100 mt-3">
              Place Order
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
