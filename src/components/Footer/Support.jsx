import React from "react";
import { Link } from "react-router-dom";

const Support = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Support</h1>

      {/* FAQ Section */}
      <section className="mb-5">
        <h2 className="mb-3">Frequently Asked Questions</h2>
        <div className="accordion" id="faqAccordion">
          {/* FAQ Item 1 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                How can I reset my password?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Go to the login page and click on "Forgot Password?" to reset your password.
              </div>
            </div>
          </div>

          {/* FAQ Item 2 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                How can I contact customer support?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                You can contact us via the contact form below or call us at 1-800-123-4567.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="mb-5">
        <h2 className="mb-3">Contact Support</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Your Name
            </label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea className="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </section>

      {/* Additional Resources */}
      <section>
        <h2 className="mb-3">Additional Resources</h2>
        <ul className="list-unstyled">
          <li>
            <Link to="/help-center" className="text-decoration-none">
              Visit our Help Center
            </Link>
          </li>
          <li>
            <Link to="/terms-and-conditions" className="text-decoration-none">
              Terms and Conditions
            </Link>
          </li>
          <li>
            <Link to="/privacy-policy" className="text-decoration-none">
              Privacy Policy
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Support;
