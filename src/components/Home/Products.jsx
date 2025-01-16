import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductImg from "../../assets/product.jpeg";
// import "./Home.css";

const productData = [
  { id: 1, text: "Hardware Services", link: "/hardware-services" },
  { id: 2, text: "Software Services", link: "/software-services" },
  { id: 3, text: "Peripheral Devices", link: "/peripheral-devices" },
  { id: 4, text: "Customization & Upgrades", link: "/customization-upgrades" },
  { id: 5, text: "Diagnostic Services", link: "/diagnostic-services" },
  { id: 6, text: "Sales and Consultants", link: "/sales-and-consultants" },
  { id: 7, text: "Other Services", link: "/other-services" },
];

const Products = () => {
  const [cardsToShow, setCardsToShow] = useState(5);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const updateVisibleCards = () => {
      setCardsToShow(5); // Keep it fixed to 5 cards for all screen widths
    };

    window.addEventListener("resize", updateVisibleCards);
    updateVisibleCards();

    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const totalSlides = productData.length - cardsToShow + 1;

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => prev < totalSlides - 1 ? prev + 1 : totalSlides - 1);
  };

  return (
    <div className="container-fluid py-4 bg-light mt-2">
      <h2 className="text-center mb-5 pt-3">Product Categories</h2>
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          height: "280px",
        }}
      >
        {currentSlide > 0 && (
          <button
            onClick={handlePrev}
            style={{
              position: "absolute",
              top: "50%",
              left: "10px",
              transform: "translateY(-50%)",
              zIndex: 10,
              background: "rgba(0, 0, 0, 0.5)",
              color: "#fff",
              border: "none",
              borderRadius: "10%",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            &#10094;
          </button>
        )}
        {currentSlide < totalSlides - 1 && (
          <button
            onClick={handleNext}
            style={{
              position: "absolute",
              top: "50%",
              right: "10px",
              transform: "translateY(-50%)",
              zIndex: 10,
              background: "rgba(0, 0, 0, 0.5)",
              color: "#fff",
              border: "none",
              borderRadius: "10%",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            &#10095;
          </button>
        )}
        <div
          style={{
            display: "flex",
            transition: "transform 0.5s ease-in-out",
            transform: `translateX(-${
              currentSlide * (100 / cardsToShow)
            }%)`,
          }}
        >
          {productData.map((product) => (
            <div
              key={product.id}
              style={{
                flex: `0 0 ${100 / cardsToShow}%`,
                padding: "0 9px",
              }}
            >
              <Link to={product.link} style={{ textDecoration: "none" }}>
                <Card
                  className="shadow-sm"
                  style={{
                    height: "280px",
                    overflow: "hidden",
                    borderRadius: "8px",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={ProductImg}
                    style={{
                      height: "180px",
                      padding: "35px",
                      objectFit: "cover",
                    }}
                  />
                  <Card.Body className="d-flex justify-content-center align-items-center">
                    <Card.Text className="fw-semibold text-dark">
                      {product.text}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
