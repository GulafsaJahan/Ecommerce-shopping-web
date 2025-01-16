import React, { useState } from "react";
import Img from "../../assets/login.webp";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // For navigation

const Login = ({ onClose, onOpenRegister }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false); // Loader state
  const [errorMessage, setErrorMessage] = useState(""); // Error state
  const navigate = useNavigate(); // Hook for navigation

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMessage(""); // Clear errors on input change
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:7860/api/login", formData);
      alert(response.data.message); // Success message

      // Save JWT token and user role to localStorage
      localStorage.setItem("token", response.data.token);
      const userRole = response.data.role || "user"; // Assuming the role is part of the response

      onClose(); // Close the modal

      // Redirect based on role
      if (userRole === "client") {
        navigate("/");
      } else if (userRole === "admin") {
        navigate("/admin-dashboard");
      } else {
        navigate("/"); // Default redirect
      }
    } catch (error) {
      // Check for specific error from backend and handle accordingly
      setErrorMessage(error.response?.data?.message || "Login failed");
      console.error("Login error:", error);
    } finally {
      setLoading(false); // Reset loader
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
          <img src={Img} alt="Login Visual" className="img-fluid h-100" style={{ objectFit: "cover" }} />
        </div>

        <div className="col-md-6 p-4">
          <h2 className="text-center mb-4">Login</h2>

          {errorMessage && (
            <div className="alert alert-danger mb-3">
              <strong>Error:</strong> {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} method="post">
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                name="email"
                className={`form-control ${errorMessage && "is-invalid"}`}
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className={`form-control ${errorMessage && "is-invalid"}`}
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="btn btn-success w-100 mb-3"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <div className="mt-4 text-center">
            Don't have an account?{" "}
            <span
              className="text-primary text-decoration-underline"
              style={{ cursor: "pointer" }}
              onClick={onOpenRegister}
            >
              Register
            </span>
            <br />
            <span
              className="text-primary text-decoration-underline mt-2"
              style={{ cursor: "pointer" }}
              onClick={() => alert("Forgot password functionality is not implemented yet.")}
            >
              Forgot Password?
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
