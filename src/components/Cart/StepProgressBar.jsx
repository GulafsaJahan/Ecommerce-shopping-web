import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const StepProgressBar = ({ currentStep }) => {
  const steps = ["Cart", "Address", "Payment"];

  return (
    <div className="d-flex justify-content-evenly align-items-center my-4">
      {steps.map((step, index) => (
        <div key={index} className="position-relative">
          {/* Step Label with Bottom Border for Current Step */}
          <span
            className={`d-inline-block pb-1 ${
              currentStep === index ? "text-success fw-bold border-bottom border-3 border-success" : "text-muted"
            }`}
            style={{ fontSize: "1.2rem" }}
          >
            {step}
          </span>
          {/* Dashed Line Between Steps */}
          {index < steps.length - 1 && (
            <div
              className="position-absolute top-50 start-100 translate-middle-y"
              style={{
                width: "16rem", // Length of the dashed line
                // height: "4px",
                borderBottom: "3px dashed #6c757d", // Dashed line styling
                marginLeft: "15px", // Adjust to reduce the gap
                zIndex: 0,
              }}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StepProgressBar;
