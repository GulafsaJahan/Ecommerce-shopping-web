import React, { useState } from "react";
import ReactDOM from "react-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import StepProgressBar from "./StepProgressBar";

const Payment = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const cartItems = [
    { id: 1, name: "Product 1", price: 500, quantity: 2 },
    { id: 2, name: "Product 2", price: 300, quantity: 1 },
  ];

  const getTotalPrice = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div style={{ background: "#e0e0e0" }}>
      <Header />
      <div className="container my-3">
        <StepProgressBar currentStep={2} />
      </div>

      <div className="container my-3">
        <div className="row">
          {/* Left Side */}
          <div className="col-lg-8">
            {/* Login Section */}
            <div className="p-3 mb-3 bg-white shadow-sm d-flex justify-content-between align-items-center">
              <div>
                <span className="fs-5 text-muted">LOGIN</span>
                <span>+91 8852639568</span>
              </div>
              <button className="btn btn-outline-primary">CHANGE</button>
            </div>

            {/* Delivery Section */}
            <div className="p-3 mb-3 bg-white shadow-sm d-flex justify-content-between align-items-center">
              <div>
                <span className="fs-5 text-muted">DELIVERY ADDRESS</span>
                <span>Kishangarh, New Delhi, PIN - 110030</span>
              </div>
              <button className="btn btn-outline-primary">CHANGE</button>
            </div>

            {/* Order Summary */}
            <div className="p-3 mb-3 bg-white shadow-sm d-flex justify-content-between align-items-center">
              <span className="fs-5 text-muted">ORDER SUMMARY</span>
              <Link to="/checkout/address" className="btn btn-outline-primary">
                CHANGE
              </Link>
            </div>

            {/* Payment Options */}
            <div className="p-3 border bg-primary text-white shadow-sm">
              <span className="fs-5">PAYMENT OPTIONS</span>
            </div>
            <div className="p-3 bg-white shadow-sm">
              <div className="form-check p-2 ps-5 fs-5">
                <input
                  className="form-check-input"
                  type="radio"
                  name="paymentMethod"
                  id="cod"
                  defaultChecked
                />
                <button
                  className="form-check-label border-0 bg-white"
                  onClick={openModal}
                >
                  Cash on Delivery
                </button>
              </div>

              <hr />

              {/* Modal Component */}
              {showModal &&
                ReactDOM.createPortal(
                  <>
                    <div className="modal fade show d-block" tabIndex="-1">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title"></h5>
                            <button
                              type="button"
                              className="btn-close"
                              onClick={closeModal}
                            ></button>
                          </div>
                          <div className="modal-body">
                            <div className="input-group mb-3 border rounded">
                              <button
                                className="btn btn-primary w-100"
                                type="button"
                              >
                                Place Order
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="modal-backdrop fade show"
                      onClick={closeModal}
                    ></div>
                  </>,
                  document.body
                )}

              <div className="form-check p-2 ps-5 fs-5">
                <input
                  className="form-check-input"
                  type="radio"
                  name="paymentMethod"
                  id="creditCard"
                />
                <label className="form-check-label" htmlFor="creditCard">
                  Credit/Debit Card
                </label>
              </div>
              <hr />
              {/* Additional Payment Options */}
              <div className="form-check p-2 ps-5 fs-5">
                <input
                  className="form-check-input"
                  type="radio"
                  name="paymentMethod"
                  id="creditCard"
                />
                <label className="form-check-label" htmlFor="creditCard">
                  Credit/Debit Card
                </label>
              </div>
              <hr />
              <div className="form-check p-2 ps-5 fs-5">
                <input
                  className="form-check-input"
                  type="radio"
                  name="paymentMethod"
                  id="upi"
                />
                <label className="form-check-label" htmlFor="upi">
                  UPI Payment
                </label>
              </div>
              <hr />
              <div className="form-check p-2 ps-5 fs-5">
                <input
                  className="form-check-input"
                  type="radio"
                  name="paymentMethod"
                  id="wallets"
                />
                <label className="form-check-label" htmlFor="wallets">
                  Wallets
                </label>
              </div>
              <hr />
              <div className="form-check p-2 ps-5 fs-5">
                <input
                  className="form-check-input"
                  type="radio"
                  name="paymentMethod"
                  id="netBanking"
                />
                <label className="form-check-label" htmlFor="netBanking">
                  Net Banking
                </label>
              </div>
              <hr />
              <div className="form-check p-2 ps-5 fs-5">
                <input
                  className="form-check-input"
                  type="radio"
                  name="paymentMethod"
                  id="emi"
                />
                <label className="form-check-label" htmlFor="emi">
                  EMI (Easy Installments)
                </label>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-lg-4">
            <div className="p-3 bg-white border">
              <h5 className="fw-bold mb-3">Price Details</h5>
              <hr />
              <div className="d-flex justify-content-between mb-2">
                <span>Price</span>
                <span>₹{getTotalPrice()}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Delivery Charges</span>
                <span className="text-success">Free</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between fw-bold">
                <span>Amount Payable</span>
                <span>₹{getTotalPrice()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Payment;
