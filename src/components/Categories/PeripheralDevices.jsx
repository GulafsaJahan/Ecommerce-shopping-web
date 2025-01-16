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
      title: "Printer Repair and Setup",
      price: 400,
      category: "Printer Repair and Setup",
      image: product1,
      text: "Expert printer repair and setup services.",
      link: "/PrinterRepair",
    },
    {
      id: 2,
      title: "Scanner Troubleshooting",
      price: 300,
      category: "Scanner Troubleshooting",
      image: product3,
      text: "Professional troubleshooting for scanner issues.",
      link: "/ScannerTroubleshooting",
    },
    {
      id: 3,
      title: "External Hard Drive Repair",
      price: 600,
      category: "External Hard Drive Repair",
      image: product4,
      text: "Reliable repair services for external hard drives.",
      link: "/ExternalHardDriveRepair",
    },
    {
      id: 4,
      title: "Webcam and Microphone Issues",
      price: 250,
      category: "Webcam and Microphone Issues",
      image: product2,
      text: "Fix issues with webcams and microphones promptly.",
      link: "/WebcamMicrophoneIssues",
    },
    {
        id: 5,
        title: "Printer Repair and Setup",
        price: 400,
        category: "Printer Repair and Setup",
        image: product1,
        text: "Expert printer repair and setup services.",
        link: "/PrinterRepair",
      },
      {
        id: 6,
        title: "Scanner Troubleshooting",
        price: 300,
        category: "Scanner Troubleshooting",
        image: product3,
        text: "Professional troubleshooting for scanner issues.",
        link: "/ScannerTroubleshooting",
      },
      {
        id: 6,
        title: "Scanner Troubleshooting",
        price: 300,
        category: "Scanner Troubleshooting",
        image: product3,
        text: "Professional troubleshooting for scanner issues.",
        link: "/ScannerTroubleshooting",
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
                      "Printer Repair and Setup"
                    )}
                    onChange={() =>
                      handleCategoryChange("Printer Repair and Setup")
                    }
                    className="me-2"
                  />
                  Printer Repair and Setup
                </label>
                <label className="d-flex align-items-center mb-3">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(
                      "Scanner Troubleshooting"
                    )}
                    onChange={() =>
                      handleCategoryChange("Scanner Troubleshooting")
                    }
                    className="me-2"
                  />
                  Scanner Troubleshooting
                </label>
                <label className="d-flex align-items-center mb-3">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(
                      "External Hard Drive Repair"
                    )}
                    onChange={() =>
                      handleCategoryChange("External Hard Drive Repair")
                    }
                    className="me-2"
                  />
                  External Hard Drive Repair
                </label>
                <label className="d-flex align-items-center mb-3">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(
                      "Webcam and Microphone Issues"
                    )}
                    onChange={() =>
                      handleCategoryChange("Webcam and Microphone Issues")
                    }
                    className="me-2"
                  />
                  Webcam and Microphone Issues
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

export default PeripheralDevices;
