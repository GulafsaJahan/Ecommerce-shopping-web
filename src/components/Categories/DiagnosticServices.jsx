import React, {useState} from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import product1 from "../../assets/pc1.webp";
import product3 from "../../assets/pc3.webp";
import product4 from "../../assets/pc4.webp";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const DiagnosticServices = () => {
const Categories = [
    {
    id: 1,
    title: "Full System Diagnostic",
    price: 400,
    category: "Full System Diagnostic",
    image: product1,
    text: "Expert Full System Diagnostic services.",
    link: "/link",
    },
    {
    id: 2,
    title: "Hardware Compatibility Checks",
    price: 300,
    category: "Hardware Compatibility Checks",
    image: product3,
    text: "Hardware Compatibility Checks.",
    link: "/link",
    },
    {
    id: 3,
    title: "Blue Screen Error Troubleshooting",
    price: 600,
    category: "Blue Screen Error Troubleshooting",
    image: product4,
    text: "Reliable repair services for external hard drives.",
    link: "/link",
    },

];

  const [selectedCategories, setSelectedCateories] = useState(["All"]); // Default is all

  // Filtered data based on selected categories
  const filteredData = selectedCategories.includes("All")
    ? Categories
    : Categories.filter((item) => selectedCategories.includes(item.category));

  // Handle checkbox change
  const handleCategoryChange = (category) => {
    let updatedCategories;
    if (category === "All") {
      updatedCategories = ["All"]; // If "All" is selected, clear others
    } else {
      if (selectedCategories.includes(category)) {
        // If already selected, remove it
        updatedCategories = selectedCategories.filter(
          (item) => item !== category
        );
      } else {
        // Add the category
        updatedCategories = [...selectedCategories, category].filter(
          (item) => item !== "All"
        ); // Remove "All" if specific categories are selected
      }
    }

    // If no categories are left , reset to All
    if (updatedCategories.length === 0) {
      updatedCategories = ["All"];
    }

    setSelectedCateories(updatedCategories);
  };

  return (
    <div style={{ background: "#e4e4e4" }}>
      <Header />
      <Navbar />
      <div className="py-4 bg-light mt-3">
        <h3 className="text-center mb-3 pt-3">Products</h3>
        <div className="container-fluid mb-3">
          <div className="row mt-5 mx-2">
            {/* Sidebar Filters */}
            <div className="col-md-3 ">
              <div className="p-4 rounded" style={{ backgroundColor: '#f5f1f1' }}>
                <div className="mb-4">
                  <h5 className="fs-4">Filter</h5>
                </div>
                <label className="d-flex align-items-center mb-3">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(
                      "Full System Diagnostic"
                    )}
                    onChange={() =>
                      handleCategoryChange("Full System Diagnostic")
                    }
                    className="me-2"
                  />
                  Full System Diagnostic
                </label>
                <label className="d-flex align-items-center mb-3">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(
                      "Hardware Compatibility Checks"
                    )}
                    onChange={() =>
                      handleCategoryChange("Hardware Compatibility Checks")
                    }
                    className="me-2"
                  />
                  Hardware Compatibility Checks
                </label>
                <label className="d-flex align-items-center mb-3">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(
                      "Blue Screen Error Troubleshooting"
                    )}
                    onChange={() =>
                      handleCategoryChange("Blue Screen Error Troubleshooting")
                    }
                    className="me-2"
                  />
                  Blue Screen Error Troubleshooting
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes("All")}
                    onChange={() => handleCategoryChange("All")}
                    className="me-2"
                  />
                  All
                </label>
              </div>
            </div>

            {/* Cards Section */}

            <div className="col-md-9">
              <div className="row g-3">
                {filteredData.map((item) => (
                  <div key={item.id} className="col-sm-6 col-md-4 col-lg-3">
                    <Link to={item.link} style={{textDecoration: 'none'}}>
                      <Card className="h-100 d-flex flex-column">
                        <Card.Img
                          variant="top"
                          src={item.image}
                          alt={item.title}
                          className="p-4"
                          style={{ height: "180px", objectFit: "cover" }}
                        />
                        <Card.Body>
                          <Card.Title>{item.title}</Card.Title>
                          <Card.Text>
                            {item.text.length > 50
                              ? `${item.text.slice(0, 50)}...`
                              : item.text}
                          </Card.Text>
                          <Card.Text> ₹ {item.price}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DiagnosticServices;
