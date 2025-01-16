import React, { useState } from "react";
import Img from "../../assets/login.webp";
import axios from "axios";

const RegisterModal = ({ onClose, onOpenLogin }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMessage(""); // Clear error on input change
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedPassword = formData.password.trim();
    const trimmedConfirmPassword = formData.confirmPassword.trim();

    if (trimmedPassword !== trimmedConfirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    if (!trimmedPassword || !trimmedConfirmPassword) {
      setErrorMessage("Password fields cannot be empty.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:7860/api/register", { // Adjust endpoint if needed
        username: formData.username,
        email: formData.email,
        password: trimmedPassword,
        confirmPassword: trimmedConfirmPassword,
        role: "client", // Explicitly set role as "client"
      });

      alert(response.data.message);
      onClose(); // Close the modal after success
      onOpenLogin(); // Open login modal after registration
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Registration failed.");
      console.error("Registration error:", error);
    }
  };

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 1050,
      }}
    >
      <div className="row w-75 bg-white shadow-lg rounded overflow-hidden position-relative">
        <button
          type="button"
          className="btn-close position-absolute top-0 end-0 m-3"
          aria-label="Close"
          onClick={onClose}
        />
        <div className="col-md-6 d-none d-md-block p-0">
          <img src={Img} alt="Register Visual" className="img-fluid h-100" style={{ objectFit: "cover" }} />
        </div>

        <div className="col-md-6 p-4">
          <h2 className="text-center mb-4">Register as Client</h2>

          {errorMessage && (
            <div className="alert alert-danger mb-3">
              <strong>Error:</strong> {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} method="post">
            <div className="mb-3">
              <label className="form-label">User Name</label>
              <input
                type="text"
                name="username"
                className="form-control"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleChange}
                autoComplete="username"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="new-password"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                className="form-control"
                placeholder="Re-enter your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                autoComplete="new-password"
              />
            </div>

            <button type="submit" className="btn btn-success w-100 mb-3">
              Register as Client
            </button>
          </form>

          <div className="mt-4 text-center">
            Already have an account?{" "}
            <span
              className="text-primary text-decoration-underline"
              style={{ cursor: "pointer" }}
              onClick={onOpenLogin}
            >
              Login
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
