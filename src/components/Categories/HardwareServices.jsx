import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
// import Categories from "./Categories"; // Make sure this path is correct
import Navbar from "../Navbar/Navbar";
import product1 from "../../assets/pc1.webp";
import product2 from "../../assets/pc2.webp";
import product3 from "../../assets/pc3.webp";
import product4 from "../../assets/pc4.webp";
import product5 from "../../assets/pc5.webp";

const HardwareServices = () => {
  const Categories = [
    // Motherboard Repair
    {
      id: 1,
      title: "Motherboard Diagnosis",
      price: 500,
      category: "Motherboard Repair",
      image: product1,
      text: "Comprehensive diagnostic services for motherboards.",
      link: "/Motherboard",
    },
    {
      id: 2,
      title: "Motherboard Replacement",
      price: 1500,
      category: "Motherboard Repair",
      image: product2,
      text: "Replace damaged or malfunctioning motherboards.",
      link:"/Motherboard",
    },
    {
      id: 3,
      title: "Chip Level Repair",
      price: 800,
      category: "Motherboard Repair",
      image: product3,
      text: "Advanced chip-level repair services.",
      link: "/Motherboard",
    },
    {
      id: 4,
      title: "BIOS Update",
      price: 300,
      category: "Motherboard Repair",
      image: product4,
      text: "Update your BIOS for optimal motherboard performance.",
      link: "/Motherboard",
    },
    {
      id: 5,
      title: "Power Supply Connection Repair",
      price: 400,
      category: "Motherboard Repair",
      image: product5,
      text: "Fix power supply connection issues on motherboards.",
      link: "/Motherboard",
    },
    {
      id: 6,
      title: "Overheating Solution",
      price: 700,
      category: "Motherboard Repair",
      image: product1,
      text: "Resolve overheating issues in motherboards.",
      link: "/Motherboard",
    },
    {
      id: 7,
      title: "Faulty Capacitor Replacement",
      price: 600,
      category: "Motherboard Repair",
      image: product2,
      text: "Replace damaged capacitors for improved stability.",
      link: "/Motherboard",

    },
    {
      id: 8,
      title: "Motherboard Reflow Service",
      price: 1000,
      category: "Motherboard Repair",
      image: product3,
      text: "Reflow solder to fix motherboard connections.",
      link: "/Motherboard",

    },

    // Hard Drive Replacement
    {
      id: 9,
      title: "HDD to SSD Upgrade",
      price: 1200,
      category: "Hard Drive Replacement",
      image: product1,
      text: "Upgrade your system's storage with a faster SSD.",
      link: "/HardDrive",

    },
    {
      id: 10,
      title: "External Hard Drive Setup",
      price: 600,
      category: "Hard Drive Replacement",
      image: product2,
      text: "Set up and configure external hard drives.",
      link: "/HardDrive",

    },
    {
      id: 11,
      title: "Hard Drive Formatting",
      price: 200,
      category: "Hard Drive Replacement",
      image: product3,
      text: "Format hard drives for fresh installations.",
      link: "/HardDrive",

    },
    {
      id: 12,
      title: "Data Cloning",
      price: 400,
      category: "Hard Drive Replacement",
      image: product4,
      text: "Clone your data to a new hard drive safely.",
      link: "/HardDrive",

    },
    {
      id: 13,
      title: "Hard Drive Failure Recovery",
      price: 1500,
      category: "Hard Drive Replacement",
      image: product5,
      text: "Recover data from failing hard drives.",
      link: "/HardDrive",

    },
    {
      id: 14,
      title: "RAID Setup",
      price: 800,
      category: "Hard Drive Replacement",
      image: product1,
      text: "Configure RAID systems for enhanced storage performance.",
      link: "/HardDrive",

    },
    {
      id: 15,
      title: "Partition Management",
      price: 300,
      category: "Hard Drive Replacement",
      image: product2,
      text: "Optimize your hard drive with partition management.",
      link: "/HardDrive",

    },
    {
      id: 16,
      title: "Hard Drive Encryption Setup",
      price: 500,
      category: "Hard Drive Replacement",
      image: product3,
      text: "Secure your data with drive encryption.",
      link: "/HardDrive",

    },

    // RAM Upgrades
    {
      id: 17,
      title: "RAM Upgrade Service",
      price: 700,
      category: "RAM Upgrades",
      image: product1,
      text: "Upgrade your system's RAM for better performance.",
      link: "/RAMUpgrades",
    },
    {
      id: 18,
      title: "RAM Diagnosis",
      price: 400,
      category: "RAM Upgrades",
      image: product2,
      text: "Identify issues with existing RAM modules.",
      link: "/RAMUpgrades",

    },
    {
      id: 19,
      title: "RAM Compatibility Check",
      price: 200,
      category: "RAM Upgrades",
      image: product3,
      text: "Ensure new RAM modules are compatible with your system.",
      link: "/RAMUpgrades",

    },
    {
      id: 20,
      title: "Laptop RAM Installation",
      price: 500,
      category: "RAM Upgrades",
      image: product4,
      text: "Install new RAM in laptops for improved speed.",
      link: "/RAMUpgrades",

    },
    {
      id: 21,
      title: "Gaming RAM Installation",
      price: 1000,
      category: "RAM Upgrades",
      image: product5,
      text: "Install high-performance RAM for gaming setups.",
      link: "/RAMUpgrades",

    },
    {
      id: 22,
      title: "ECC RAM Setup",
      price: 1200,
      category: "RAM Upgrades",
      image: product1,
      text: "Install ECC RAM for enterprise or server setups.",
      link: "/RAMUpgrades",

    },
    {
      id: 23,
      title: "RAM Cleaning and Maintenance",
      price: 300,
      category: "RAM Upgrades",
      image: product2,
      text: "Clean and maintain RAM for sustained performance.",
      link: "/RAMUpgrades",

    },

    // Power Supply Repair/Replacement
    {
      id: 24,
      title: "PSU Repair Service",
      price: 1000,
      category: "Power Supply Repair/Replacement",
      image: product1,
      text: "Repair faulty power supply units.",
      link: "/PowerSupply",
    },
    {
      id: 25,
      title: "PSU Replacement",
      price: 2000,
      category: "Power Supply Repair/Replacement",
      image: product2,
      text: "Replace old or malfunctioning power supply units.",
      link: "/PowerSupply",

    },
    {
      id: 26,
      title: "Cable Management Service",
      price: 500,
      category: "Power Supply Repair/Replacement",
      image: product3,
      text: "Improve cable management for better airflow.",
      link: "/PowerSupply",

    },
    {
      id: 27,
      title: "High-Wattage PSU Installation",
      price: 2500,
      category: "Power Supply Repair/Replacement",
      image: product4,
      text: "Install high-wattage PSUs for gaming or workstation setups.",
      link: "/PowerSupply",

    },
    {
      id: 28,
      title: "Power Surge Protection",
      price: 800,
      category: "Power Supply Repair/Replacement",
      image: product5,
      text: "Install surge protectors to safeguard your devices.",
      link: "/PowerSupply",

    },
    {
      id: 29,
      title: "PSU Fan Replacement",
      price: 400,
      category: "Power Supply Repair/Replacement",
      image: product1,
      text: "Replace noisy or damaged PSU fans.",
      link: "/PowerSupply",

    },
    {
      id: 30,
      title: "Modular PSU Cable Setup",
      price: 600,
      category: "Power Supply Repair/Replacement",
      image: product2,
      text: "Install modular cables for a cleaner build.",
      link: "/PowerSupply",

    },
    // Screen/LCD Repair
    {
      id: 31,
      title: "Cracked Screen Replacement",
      price: 3000,
      category: "Screen/LCD Repair",
      image: product1,
      text: "Replace cracked or broken screens on laptops.",
      link:"/ScreenRepair",
    },
    {
      id: 32,
      title: "Screen Calibration",
      price: 600,
      category: "Screen/LCD Repair",
      image: product2,
      text: "Calibrate your screen for optimal color accuracy.",
      link:"/ScreenRepair",

    },
    {
      id: 33,
      title: "LCD Backlight Repair",
      price: 1200,
      category: "Screen/LCD Repair",
      image: product3,
      text: "Repair backlight issues in LCD screens.",
      link:"/ScreenRepair",

    },
    {
      id: 34,
      title: "Touchscreen Repair",
      price: 2000,
      category: "Screen/LCD Repair",
      image: product4,
      text: "Fix issues with touchscreen functionality.",
      link:"/ScreenRepair",

    },
    {
      id: 35,
      title: "Laptop Screen Bezel Repair",
      price: 800,
      category: "Screen/LCD Repair",
      image: product5,
      text: "Repair or replace damaged screen bezels.",
      link:"/ScreenRepair",

    },

    // Keyboard Replacement
    {
      id: 36,
      title: "Laptop Keyboard Replacement",
      price: 1200,
      category: "Keyboard Replacement",
      image: product1,
      text: "Replace damaged or non-functional laptop keyboards.",
      link: "/KeyboardReplacement",
    },
    {
      id: 37,
      title: "Mechanical Keyboard Repair",
      price: 800,
      category: "Keyboard Replacement",
      image: product2,
      text: "Repair switches on mechanical keyboards.",
      link: "/KeyboardReplacement",

    },
    {
      id: 38,
      title: "Keycap Replacement",
      price: 300,
      category: "Keyboard Replacement",
      image: product3,
      text: "Replace worn or missing keycaps.",
      link: "/KeyboardReplacement",

    },
    {
      id: 39,
      title: "Wireless Keyboard Setup",
      price: 400,
      category: "Keyboard Replacement",
      image: product4,
      text: "Set up and configure wireless keyboards.",
      link: "/KeyboardReplacement",

    },
    {
      id: 40,
      title: "Gaming Keyboard Maintenance",
      price: 500,
      category: "Keyboard Replacement",
      image: product5,
      text: "Maintain gaming keyboards for optimal performance.",
      link: "/KeyboardReplacement",

    },

    // Battery Replacement (Laptops)
    {
      id: 41,
      title: "Battery Health Check",
      price: 300,
      category: "Battery Replacement (Laptops)",
      image: product1,
      text: "Check the health and performance of your laptop battery.",
      link: "/BatteryReplacement",
    },
    {
      id: 42,
      title: "Laptop Battery Replacement",
      price: 2000,
      category: "Battery Replacement (Laptops)",
      image: product2,
      text: "Replace old or degraded laptop batteries.",
      link: "/BatteryReplacement",

    },
    {
      id: 43,
      title: "Power Efficiency Upgrade",
      price: 500,
      category: "Battery Replacement (Laptops)",
      image: product3,
      text: "Improve laptop power efficiency with new batteries.",
      link: "/BatteryReplacement",

    },
    {
      id: 44,
      title: "Battery Disposal Service",
      price: 200,
      category: "Battery Replacement (Laptops)",
      image: product4,
      text: "Dispose of old batteries responsibly.",
      link: "/BatteryReplacement",

    },
  ];

  const [selectedCategories, setSelectedCategories] = useState(["All"]); // Default is "All"

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

    // If no categories are left, reset to "All"
    if (updatedCategories.length === 0) {
      updatedCategories = ["All"];
    }

    setSelectedCategories(updatedCategories);
  };

  return (
    <div style={{background:'#e4e4e4'}}>
      <Header />
      <Navbar />
      <div className="text-center py-4  bg-light">
        <h3 className="mb-3">Products</h3>
        <div className="container-fluid mb-3">
          <div className="row mt-5 mx-2">
            {/* Sidebar Filters */}
            <div
              className="col-md-3 position-sticky top-0"
              style={{ zIndex: 1 }}
            >
              <div className="p-4 rounded" style={{ backgroundColor: '#f5f1f1' }}>
                <div className="mb-4">
                  <h5 className="fs-4">Filter</h5>
                </div>
                <label className="d-flex align-items-center mb-3">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes("Motherboard Repair")}
                    onChange={() => handleCategoryChange("Motherboard Repair")}
                    className="me-2"
                  />
                  Motherboard Repair
                </label>
                <label className="d-flex align-items-center mb-3">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(
                      "Hard Drive Replacement"
                    )}
                    onChange={() =>
                      handleCategoryChange("Hard Drive Replacement")
                    }
                    className="me-2"
                  />
                  Hard Drive Replacement
                </label>
                <label className="d-flex align-items-center mb-3">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes("RAM Upgrades")}
                    onChange={() => handleCategoryChange("RAM Upgrades")}
                    className="me-2"
                  />
                  RAM Upgrades
                </label>
                <label className="d-flex align-items-center mb-3">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(
                      "Power Supply Repair/Replacement"
                    )}
                    onChange={() =>
                      handleCategoryChange("Power Supply Repair/Replacement")
                    }
                    className="me-2"
                  />
                  Power Supply Repair/Replacement
                </label>
                <label className="d-flex align-items-center mb-3">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes("Screen/LCD Repair")}
                    onChange={() => handleCategoryChange("Screen/LCD Repair")}
                    className="me-2"
                  />
                  Screen/LCD Repair
                </label>
                <label className="d-flex align-items-center mb-3">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(
                      "Keyboard Replacement"
                    )}
                    onChange={() =>
                      handleCategoryChange("Keyboard Replacement")
                    }
                    className="me-2"
                  />
                  Keyboard Replacement
                </label>
                <label className="d-flex align-items-center mb-3">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(
                      "Battery Replacement (Laptops)"
                    )}
                    onChange={() =>
                      handleCategoryChange("Battery Replacement (Laptops)")
                    }
                    className="me-2"
                  />
                  Battery Replacement (Laptops)
                </label>
                <label className="d-flex align-items-center mb-3">
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
                    <Link to={item.link} style={{ textDecoration: "none" }}>
                    <Card className="h-100 d-flex flex-column">
                      <Card.Img
                        variant="top"
                        src={item.image}
                        alt={item.title}
                        className="p-4"
                        style={{ height: "180px", objectFit: "cover" }}
                      />
                      <Card.Body className="d-flex flex-column justify-content-between p-4">
                        <Card.Title className="fs-6">{item.title}</Card.Title>
                        <Card.Text className="text-muted">
                          {item.text.length > 50
                            ? `${item.text.slice(0, 50)}...`
                            : item.text}
                        </Card.Text>
                        <Card.Text className="fw-bold ">
                          ₹ {item.price}
                        </Card.Text>
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

export default HardwareServices;
