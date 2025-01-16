import React, { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import FeaturedVideoOutlinedIcon from "@mui/icons-material/FeaturedVideoOutlined";
import "../../index.css";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal"; // Using Bootstrap Modal
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form"; // Importing Form component from React Bootstrap

const Footer = () => {
  const navigate = useNavigate();

  const [isCodModalOpen, setCodModalOpen] = useState(false);
  const [isSupportModalOpen, setSupportModalOpen] = useState(false);
  const [supportQuery, setSupportQuery] = useState("");

  const goToAbout = () => {
    navigate("/");
    setTimeout(() => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };

  const goToContact = () => {
    navigate("/");
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };

  // Modal open and close handlers for COD
  const openCodModal = () => setCodModalOpen(true);
  const closeCodModal = () => setCodModalOpen(false);

  // Modal open and close handlers for Support
  const openSupportModal = () => setSupportModalOpen(true);
  const closeSupportModal = () => setSupportModalOpen(false);

  // Handle input change in Support Modal
  const handleSupportInputChange = (e) => {
    setSupportQuery(e.target.value);
  };

  return (
    <>
      <div className="bg-black text-white py-4">
        <div className="container-fluid">
          <div className="row">
            {/* Combined Sections */}
            <div className="col-12 col-md-4 mb-4 mb-md-0 ps-md-5">
              <div className="d-flex flex-column flex-md-row gap-4">
                {/* ABOUT Section */}
                <div>
                  <h3 className="text-secondary">ABOUT</h3>
                  <nav>
                    <ul className="list-unstyled mt-2">
                      <li>
                        <button
                          className="fs-5 text-white text-decoration-none bg-transparent border-0"
                          onClick={goToContact}
                        >
                          Contact Us
                        </button>
                      </li>
                      <li>
                        <button
                          className="fs-5 text-white text-decoration-none bg-transparent border-0"
                          onClick={goToAbout}
                        >
                          About Us
                        </button>
                      </li>
                      <li>
                        <span className="fs-5 text-white text-decoration-none">
                          Corporate Information
                        </span>
                      </li>
                    </ul>
                  </nav>
                </div>

                {/* HELP Section */}
                <div>
                  <h3 className="text-secondary">HELP</h3>
                  <ul className="list-unstyled mt-2">
                    <li>
                      <button
                        className="fs-5 text-white text-decoration-none bg-transparent border-0"
                        onClick={goToContact}
                      >
                        Contact Us
                      </button>
                    </li>
                    <li>
                      <button
                        className="fs-5 text-white text-decoration-none bg-transparent border-0"
                        onClick={openSupportModal}
                      >
                        Support
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="col-md-1 d-none d-md-block">
              <div
                className="mx-auto"
                style={{ width: "1.5px", height: "100%", background: "#5f5e5e" }}
              ></div>
            </div>

            {/* Mail, Social Media, Registered Office, and Subscribe */}
            <div className="col-12 col-md-5 mb-4 mb-md-0">
              <div className="d-flex flex-column flex-md-row gap-4">
                <div>
                  <h3 className="text-secondary">Mail us</h3>
                  <p className="my-1">Flipkart Internet Private Limited,</p>
                  <p className="my-1">Building Alyssa, Begonia &</p>
                  <p className="my-1">India</p>

                  <h3 className="text-secondary mt-4">Social:</h3>
                  <div className="d-flex gap-3 mt-2">
                    <a
                      className="text-decoration-none text-white"
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FacebookIcon className="social-icon" />
                    </a>
                    <a
                      className="text-decoration-none text-white"
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <InstagramIcon className="social-icon" />
                    </a>
                    <a
                      className="text-decoration-none text-white"
                      href="https://www.twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TwitterIcon className="social-icon" />
                    </a>
                    <a
                      className="text-decoration-none text-white"
                      href="https://www.whatsapp.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <WhatsAppIcon className="social-icon" />
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-secondary">Registered Office Address</h3>
                  <p className="my-1">Flipkart Internet Private Limited,</p>
                  <p className="my-1">Building Alyssa, Begonia &</p>
                  <p className="my-1">India</p>
                  <p className="my-1">CIN: 0988785645454787</p>
                  <p className="my-1">
                    Telephone:{" "}
                    <a
                      href="tel:088009989988"
                      className="text-decoration-none text-white"
                    >
                      088009989988
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Subscribe Button */}
            <div className="col-12 col-md-2 d-flex justify-content-center align-items-center">
              <button className="btn btn-info px-4 fs-5 w-100">Subscribe</button>
            </div>
          </div>

          {/* Horizontal Divider */}
          <hr className="my-4" style={{ height: "2.5px", background: "#5f5e5e" }} />

          {/* Bottom Section */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-secondary mx-2 mx-md-5">
            <ul className="d-flex flex-column flex-md-row list-unstyled mb-0 align-items-center w-100 justify-content-around">
              <li className="mb-2 mb-md-0 me-md-5">
                <button className="text-decoration-none text-white bg-transparent border-0">
                  <FeaturedVideoOutlinedIcon /> Advertise
                </button>
              </li>
              <li className="mb-2 mb-md-0 me-md-5">
                <button className="text-decoration-none text-white bg-transparent border-0">
                  <HelpOutlineIcon /> Help Center
                </button>
              </li>
              <li className="mb-2 mb-md-0 me-md-5">
                <p className="mb-0 text-white text-center">
                  &copy; 2024 RepairMaster PC & Gadget Care
                </p>
              </li>
              <li>
                <button
                  className="text-decoration-none text-white bg-transparent border-0"
                  onClick={openCodModal}
                >
                  Cash On Delivery
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Cash On Delivery Modal */}
      <Modal show={isCodModalOpen} onHide={closeCodModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Cash On Delivery</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Cash on Delivery is available for selected items in your cart.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={closeCodModal}>
            Place Order
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Support Modal */}
      <Modal show={isSupportModalOpen} onHide={closeSupportModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Support</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>How can I help you?</p>
          <Form>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Type your query here..."
              value={supportQuery}
              onChange={handleSupportInputChange}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeSupportModal}>
            Close
          </Button>
          <Button variant="primary" onClick={closeSupportModal}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Footer;
