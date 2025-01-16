import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import productImg from "../../assets/pc1.webp";
import { Link } from "react-router-dom";
import StepProgressBar from "./StepProgressBar";

const Address = () => {
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
        <StepProgressBar currentStep={1} />
      </div>
      <div className="container my-3">
        <div className="row">
          {/* Left Side - Cart Items (8 columns) */}
          <div className="col-lg-8">
            {/* Login Section */}
            <div className="p-3 mb-4 bg-white shadow-sm d-flex justify-content-between align-items-center">
              <div className="d-flex flex-column">
              <span className=" fs-5 text-muted">LOGIN</span>
              <span>+91 8852639568</span>
              </div>
              <button className="btn btn-outline-primary">
                CHANGE
              </button>
            </div>
            {/* Address Section */}
            <div className="p-3 mb-4 bg-white shadow-sm d-flex justify-content-between align-items-center">
              <div className="d-flex flex-column">
              <span className="fs-5 text-muted">DELIEVERY ADDRESS</span>
              <span>Kishangarh NEw Delhi , pin - 110030</span>
              </div>
              <button className="btn btn-outline-primary">
                CHANGE
              </button>
            </div>

          <div>
          <div className="p-3 border bg-primary shadow-sm d-flex">
              <span className="fs-5 text-white">ORDER SUMMARY</span>
            </div>
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
          <div className="p-3 mb-4 mt-2 bg-white shadow-sm d-flex justify-content-between align-items-center">
              <span className="text-muted">Order Confirmed</span>
              <Link to='/checkout/payment' className="btn btn-primary px-5 fs-5">
                Continue
              </Link>
            </div>
          </div>

          {/* Right Side - Price Details (4 columns) */}
          <div className="col-lg-4">
            <div className="p-3 bg-white border">
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
                <span>Delivery Charges</span>
                <span className="text-success">Free</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between fw-bold">
                <span>Total Amount</span>
                <span>₹{getTotalPrice()}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-2">
                <h5 className="text-success">Your Total saving on this Order
                ₹
                  {cartItems.reduce(
                    (acc, item) => acc + item.discount * item.quantity,
                    0
                  )}
                  </h5>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Address;
