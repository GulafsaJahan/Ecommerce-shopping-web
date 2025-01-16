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

const PeripheralDevices = () => {
  const Categories = [
    {
      id: 1,
      title: "Custom PC Builds",
      price: 400,
      category: "Custom PC Builds",
      image: product1,
      text: "Expert Custom PC Builds services.",
      link: "/link1",
    },
    {
      id: 2,
      title: "Gaming PC Upgrades",
      price: 300,
      category: "Gaming PC Upgrades",
      image: product3,
      text: "Professional troubleshooting for scanner issues.",
      link: "/link1",
    },
    {
      id: 3,
      title: "Performance Optimization",
      price: 600,
      category: "Performance Optimization",
      image: product4,
      text: "Reliable repair services for external hard drives.",
      link: "/link1",
    },
    {
      id: 4,
      title: "Overclocking Setup",
      price: 250,
      category: "Overclocking Setup",
      image: product2,
      text: "Fix issues with webcams and microphones promptly.",
      link: "/link1",
    },
    {
        id: 5,
        title: "Graphics Card Installation",
        price: 400,
        category: "Graphics Card Installation",
        image: product1,
        text: "Expert Graphics Card Installation services.",
        link: "/link1",
      },
      {
        id: 6,
        title: "Gaming PC Upgrades",
        price: 300,
        category: "Gaming PC Upgrades",
        image: product3,
        text: "Professional troubleshooting for scanner issues.",
        link: "/link1",
      },
      {
        id: 7,
        title: "Performance Optimization",
        price: 300,
        category: "Performance Optimization",
        image: product3,
        text: "Professional troubleshooting for scanner issues.",
        link: "/link1",
      },
      {
        id: 8,
        title: "Performance Optimization",
        price: 300,
        category: "Performance Optimization",
        image: product3,
        text: "Professional troubleshooting for scanner issues.",
        link: "/link1",
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
                      "Custom PC Builds"
                    )}
                    onChange={() =>
                      handleCategoryChange("Custom PC Builds")
                    }
                    className="me-2"
                  />
                  Custom PC Builds
                </label>
                <label className="d-flex align-items-center mb-3">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(
                      "Gaming PC Upgrades"
                    )}
                    onChange={() =>
                      handleCategoryChange("Gaming PC Upgrades")
                    }
                    className="me-2"
                  />
                  Gaming PC Upgrades
                </label>
                <label className="d-flex align-items-center mb-3">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(
                      "Performance Optimization"
                    )}
                    onChange={() =>
                      handleCategoryChange("Performance Optimization")
                    }
                    className="me-2"
                  />
                  Performance Optimization
                </label>
                <label className="d-flex align-items-center mb-3">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(
                      "Overclocking Setup"
                    )}
                    onChange={() =>
                      handleCategoryChange("Overclocking Setup")
                    }
                    className="me-2"
                  />
                  Overclocking Setup
                </label>
                <label className="d-flex align-items-center mb-3">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(
                      "Graphics Card Installation"
                    )}
                    onChange={() =>
                      handleCategoryChange("Graphics Card Installation")
                    }
                    className="me-2"
                  />
                  Graphics Card Installation
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
                      <Card>
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

export default PeripheralDevices;
