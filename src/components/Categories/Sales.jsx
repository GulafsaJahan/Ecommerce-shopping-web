import React, {useState} from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import product1 from "../../assets/pc1.webp";
import product2 from "../../assets/pc2.webp";
import product3 from "../../assets/pc3.webp";
import product4 from "../../assets/pc4.webp";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const Sales = () => {
  const Categories = [
    {
      id: 1,
      title: "New Hardware Sales",
      price: 400,
      category: "New Hardware Sales",
      image: product1,
      text: "Expert New Hardware Sales services.",
      link: "/link",
    },
    {
      id: 2,
      title: "Refurbished Computer Sales",
      price: 300,
      category: "Refurbished Computer Sales",
      image: product3,
      text: "Refurbished Computer Sales.",
      link: "/link",
    },
    {
      id: 3,
      title: "Upgrade Recommendations",
      price: 600,
      category: "Upgrade Recommendations",
      image: product4,
      text: "Reliable repair services for external hard drives.",
      link: "/link",
    },
    {
      id: 4,
      title: "IT Consultation",
      price: 250,
      category: "IT Consultation",
      image: product2,
      text: "Fix issues with webcams and microphones promptly.",
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
                      "New Hardware Sales"
                    )}
                    onChange={() =>
                      handleCategoryChange("New Hardware Sales")
                    }
                    className="me-2"
                  />
                  New Hardware Sales
                </label>
                <label className="d-flex align-items-center mb-3">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(
                      "Refurbished Computer Sales"
                    )}
                    onChange={() =>
                      handleCategoryChange("Refurbished Computer Sales")
                    }
                    className="me-2"
                  />
                  Refurbished Computer Sales
                </label>
                <label className="d-flex align-items-center mb-3">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(
                      "Upgrade Recommendations"
                    )}
                    onChange={() =>
                      handleCategoryChange("Upgrade Recommendations")
                    }
                    className="me-2"
                  />
                  Upgrade Recommendations
                </label>
                <label className="d-flex align-items-center mb-3">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(
                      "IT Consultation"
                    )}
                    onChange={() =>
                      handleCategoryChange("IT Consultation")
                    }
                    className="me-2"
                  />
                  IT Consultation
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

export default Sales;
