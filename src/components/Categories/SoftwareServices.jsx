import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Card from "react-bootstrap/Card";
// import Categories from "./Categories"; // Make sure this path is correct
import Navbar from "../Navbar/Navbar";
import product1 from "../../assets/pc1.webp";
import product2 from "../../assets/pc2.webp";
import product3 from "../../assets/pc3.webp";
import product4 from "../../assets/pc4.webp";
import product5 from "../../assets/pc5.webp";

const SoftwareServices = () => {
  const Categories = [
    {
      id: 1,
      title: "Operating System Installation/Repair",
      price: 400,
      category: "Operating System Installation/Repair",
      image: product1,
      text: "Complete installation or repair services for your operating system.",
    },
    {
      id: 2,
      title: "OS System Upgrade",
      price: 350,
      category: "Operating System Installation/Repair",
      image: product4,
      text: "Upgrading your operating system to the latest version for improved performance and security.",
    },
    {
      id: 3,
      title: "OS Reinstallation and Recovery",
      price: 450,
      category: "Operating System Installation/Repair",
      image: product3,
      text: "Reinstalling and recovering your operating system in case of crashes or failures.",
    },
    {
      id: 4,
      title: "Windows/Linux OS Repair",
      price: 400,
      category: "Operating System Installation/Repair",
      image: product1,
      text: "Repairing common errors or issues with Windows or Linux operating systems.",
    },
    {
      id: 5,
      title: "OS Corruption Fix",
      price: 420,
      category: "Operating System Installation/Repair",
      image: product2,
      text: "Fixing file system corruption or other errors preventing your OS from running smoothly.",
    },
    // Software Troubleshooting
    {
      id: 6,
      title: "Operating System Installation",
      price: 300,
      category: "Software Troubleshooting",
      image: product1,
      text: "Install or reinstall operating systems.",
    },
    {
      id: 7,
      title: "Software Bug Fixes",
      price: 400,
      category: "Software Troubleshooting",
      image: product2,
      text: "Troubleshooting and fixing software bugs.",
    },
    {
      id: 8,
      title: "Application Compatibility Issues",
      price: 350,
      category: "Software Troubleshooting",
      image: product3,
      text: "Resolve compatibility issues with applications.",
    },
    {
      id: 9,
      title: "Software Configuration",
      price: 450,
      category: "Software Troubleshooting",
      image: product4,
      text: "Configure software to meet system requirements.",
    },
    {
      id: 10,
      title: "OS Error Troubleshooting",
      price: 500,
      category: "Software Troubleshooting",
      image: product5,
      text: "Troubleshoot and resolve operating system errors.",
    },
  
    // Virus/Malware Removal
    {
      id: 11,
      title: "Virus Removal",
      price: 250,
      category: "Virus/Malware Removal",
      image: product1,
      text: "Complete virus removal services.",
    },
    {
      id: 12,
      title: "Malware Removal",
      price: 300,
      category: "Virus/Malware Removal",
      image: product2,
      text: "Comprehensive malware removal from your system.",
    },
    {
      id: 13,
      title: "Spyware Removal",
      price: 200,
      category: "Virus/Malware Removal",
      image: product3,
      text: "Remove spyware and ensure privacy.",
    },
    {
      id: 14,
      title: "Ransomware Removal",
      price: 500,
      category: "Virus/Malware Removal",
      image: product4,
      text: "Remove ransomware and recover files.",
    },
    {
      id: 15,
      title: "Antivirus Installation",
      price: 150,
      category: "Virus/Malware Removal",
      image: product5,
      text: "Install and configure antivirus protection.",
    },
  
    // Data Backup and Recovery
    {
      id: 16,
      title: "Data Backup Setup",
      price: 350,
      category: "Data Backup and Recovery",
      image: product1,
      text: "Setup regular data backup solutions for your system.",
    },
    {
      id: 17,
      title: "File Recovery from Hard Drive",
      price: 500,
      category: "Data Backup and Recovery",
      image: product2,
      text: "Recover files from damaged hard drives.",
    },
    {
      id: 18,
      title: "Cloud Backup Solutions",
      price: 400,
      category: "Data Backup and Recovery",
      image: product3,
      text: "Setup cloud-based data backup services.",
    },
    {
      id: 19,
      title: "Data Migration Services",
      price: 600,
      category: "Data Backup and Recovery",
      image: product4,
      text: "Migrate data securely from one system to another.",
    },
    {
      id: 20,
      title: "System Restore and Recovery",
      price: 350,
      category: "Data Backup and Recovery",
      image: product5,
      text: "Perform system restore to recover lost data.",
    },
  
    // System Optimization
    {
      id: 21,
      title: "System Performance Tuning",
      price: 300,
      category: "System Optimization",
      image: product1,
      text: "Improve system performance with advanced tuning.",
    },
    {
      id: 22,
      title: "Disk Cleanup",
      price: 150,
      category: "System Optimization",
      image: product2,
      text: "Clean up your disk to improve speed and performance.",
    },
    {
      id: 23,
      title: "System Speed Up",
      price: 350,
      category: "System Optimization",
      image: product3,
      text: "Optimize your system to boost its speed.",
    },
    {
      id: 24,
      title: "Startup Optimization",
      price: 200,
      category: "System Optimization",
      image: product4,
      text: "Reduce system startup time by optimizing settings.",
    },
    {
      id: 25,
      title: "Memory Optimization",
      price: 250,
      category: "System Optimization",
      image: product5,
      text: "Optimize memory usage for better performance.",
    },
  
    // Driver Installation
    {
      id: 26,
      title: "Install Graphics Driver",
      price: 150,
      category: "Driver Installation",
      image: product1,
      text: "Install or update graphics drivers for optimal performance.",
    },
    {
      id: 27,
      title: "Install Network Driver",
      price: 120,
      category: "Driver Installation",
      image: product2,
      text: "Install network drivers for stable connectivity.",
    },
    {
      id: 28,
      title: "Install Audio Driver",
      price: 100,
      category: "Driver Installation",
      image: product3,
      text: "Install drivers for audio hardware.",
    },
    {
      id: 29,
      title: "Printer Driver Installation",
      price: 180,
      category: "Driver Installation",
      image: product4,
      text: "Install printer drivers and configure devices.",
    },
    {
      id: 30,
      title: "Bluetooth Driver Installation",
      price: 150,
      category: "Driver Installation",
      image: product5,
      text: "Install Bluetooth drivers for wireless connectivity.",
    },
  
    // Network Solutions
    {
      id: 31,
      title: "Router Setup",
      price: 200,
      category: "Network Solutions",
      image: product1,
      text: "Setup and configure your router for optimal performance.",
    },
    {
      id: 32,
      title: "Network Troubleshooting",
      price: 300,
      category: "Network Solutions",
      image: product2,
      text: "Troubleshoot and resolve network issues.",
    },
    {
      id: 33,
      title: "VPN Setup",
      price: 250,
      category: "Network Solutions",
      image: product3,
      text: "Setup a secure VPN for your network.",
    },
    {
      id: 34,
      title: "Firewall Configuration",
      price: 350,
      category: "Network Solutions",
      image: product4,
      text: "Configure firewall settings to enhance security.",
    },
    {
      id: 35,
      title: "Port Forwarding Setup",
      price: 180,
      category: "Network Solutions",
      image: product5,
      text: "Setup port forwarding for your network.",
    },
  
    // Wi-Fi Setup and Troubleshooting
    {
      id: 36,
      title: "Wi-Fi Network Setup",
      price: 200,
      category: "Wi-Fi Setup and Troubleshooting",
      image: product1,
      text: "Setup and configure Wi-Fi networks.",
    },
    {
      id: 37,
      title: "Wi-Fi Signal Boosting",
      price: 250,
      category: "Wi-Fi Setup and Troubleshooting",
      image: product2,
      text: "Improve the range and strength of your Wi-Fi signal.",
    },
    {
      id: 38,
      title: "Wi-Fi Connectivity Issues",
      price: 300,
      category: "Wi-Fi Setup and Troubleshooting",
      image: product3,
      text: "Resolve Wi-Fi connectivity problems.",
    },
    {
      id: 39,
      title: "Wi-Fi Security Configuration",
      price: 350,
      category: "Wi-Fi Setup and Troubleshooting",
      image: product4,
      text: "Ensure the security of your Wi-Fi network.",
    },
    {
      id: 40,
      title: "Wi-Fi Network Troubleshooting",
      price: 200,
      category: "Wi-Fi Setup and Troubleshooting",
      image: product5,
      text: "Troubleshoot Wi-Fi network issues and restore connections.",
    },
  
    // LAN Network Repair
    {
      id: 41,
      title: "LAN Cable Repair",
      price: 150,
      category: "LAN Network Repair",
      image: product1,
      text: "Repair damaged LAN cables.",
    },
    {
      id: 42,
      title: "Switch Repair and Configuration",
      price: 200,
      category: "LAN Network Repair",
      image: product2,
      text: "Repair and configure network switches.",
    },
    {
      id: 43,
      title: "Router Troubleshooting",
      price: 180,
      category: "LAN Network Repair",
      image: product3,
      text: "Fix issues with your LAN router.",
    },
    {
      id: 44,
      title: "LAN Connection Setup",
      price: 250,
      category: "LAN Network Repair",
      image: product4,
      text: "Setup LAN connections for your network.",
    },
    {
      id: 45,
      title: "LAN Security Configuration",
      price: 300,
      category: "LAN Network Repair",
      image: product5,
      text: "Configure LAN network security.",
    },
  
    // Router Configuration
    {
      id: 46,
      title: "Router Setup and Configuration",
      price: 200,
      category: "Router Configuration",
      image: product1,
      text: "Setup and configure your router for the network.",
    },
    {
      id: 47,
      title: "Router Firmware Update",
      price: 150,
      category: "Router Configuration",
      image: product2,
      text: "Update router firmware to the latest version.",
    },
    {
      id: 48,
      title: "Wi-Fi Settings Configuration",
      price: 250,
      category: "Router Configuration",
      image: product3,
      text: "Configure Wi-Fi settings on your router.",
    },
    {
      id: 49,
      title: "Router Security Setup",
      price: 300,
      category: "Router Configuration",
      image: product4,
      text: "Enhance router security by configuring settings.",
    },
    {
      id: 50,
      title: "Router Troubleshooting and Repair",
      price: 350,
      category: "Router Configuration",
      image: product5,
      text: "Troubleshoot and repair router issues.",
    },
  
    // Network Security Services
    {
      id: 51,
      title: "Network Security Audit",
      price: 400,
      category: "Network Security Services",
      image: product1,
      text: "Conduct a security audit for your network.",
    },
    {
      id: 52,
      title: "Firewall Setup",
      price: 350,
      category: "Network Security Services",
      image: product2,
      text: "Setup firewalls to protect your network.",
    },
    {
      id: 53,
      title: "Intrusion Detection System Setup",
      price: 500,
      category: "Network Security Services",
      image: product3,
      text: "Setup intrusion detection systems for enhanced security.",
    },
    {
      id: 54,
      title: "Network Monitoring and Threat Detection",
      price: 600,
      category: "Network Security Services",
      image: product4,
      text: "Monitor and detect threats in your network.",
    },
    {
      id: 55,
      title: "Encryption and Secure Access",
      price: 550,
      category: "Network Security Services",
      image: product5,
      text: "Implement encryption and secure access protocols.",
    },
  
    // Internet Connectivity Issues
    {
      id: 56,
      title: "Fix Slow Internet",
      price: 200,
      category: "Internet Connectivity Issues",
      image: product1,
      text: "Resolve slow internet speed issues.",
    },
    {
      id: 57,
      title: "Resolve DNS Issues",
      price: 180,
      category: "Internet Connectivity Issues",
      image: product2,
      text: "Troubleshoot and resolve DNS issues.",
    },
    {
      id: 58,
      title: "Internet Connection Setup",
      price: 250,
      category: "Internet Connectivity Issues",
      image: product3,
      text: "Setup your internet connection and ensure stability.",
    },
    {
      id: 59,
      title: "Wi-Fi Troubleshooting",
      price: 300,
      category: "Internet Connectivity Issues",
      image: product4,
      text: "Fix issues with your Wi-Fi connectivity.",
    },
    {
      id: 60,
      title: "Internet Connectivity Diagnostics",
      price: 350,
      category: "Internet Connectivity Issues",
      image: product5,
      text: "Diagnose and fix internet connectivity issues.",
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
              <div className="p-4 rounded" style={{ backgroundColor: '#f5f1f1' }} >
                <div className="mb-4">
                  <h5 className="fs-4">Filter</h5>
                </div>
                <label className="d-flex align-items-center mb-3">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes("Operating System Installation/Repair")}
                    onChange={() => handleCategoryChange("Operating System Installation/Repair")}
                    className="me-2"
                  />
                  Operating System Installation/Repair
                </label>
                <label className="d-flex align-items-center mb-3">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(
                      "Software Troubleshooting"
                    )}
                    onChange={() =>
                      handleCategoryChange("Software Troubleshooting")
                    }
                    className="me-2"
                  />
                  Software Troubleshooting
                </label>
                <label className="d-flex align-items-center mb-3">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes("Virus/Malware Removal")}
                    onChange={() => handleCategoryChange("Virus/Malware Removal")}
                    className="me-2"
                  />
                  Virus/Malware Removal
                </label>
                <label className="d-flex align-items-center mb-3">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(
                      "Data Backup and Recovery"
                    )}
                    onChange={() =>
                      handleCategoryChange("Data Backup and Recovery")
                    }
                    className="me-2"
                  />
                  Data Backup and Recovery
                </label>
                <label className="d-flex align-items-center mb-3">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes("System Optimization")}
                    onChange={() => handleCategoryChange("System Optimization")}
                    className="me-2"
                  />
                  System Optimization
                </label>
                <label className="d-flex align-items-center mb-3">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(
                      "Driver Installation"
                    )}
                    onChange={() =>
                      handleCategoryChange("Driver Installation")
                    }
                    className="me-2"
                  />
                  Driver Installation
                </label>
                <label className="d-flex align-items-center mb-3">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(
                      "Network Solutions"
                    )}
                    onChange={() =>
                      handleCategoryChange("Network Solutions")
                    }
                    className="me-2"
                  />
                  Network Solutions
                </label>
                <label className="d-flex align-items-center mb-3">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(
                      "Wi-Fi Setup and Troubleshooting"
                    )}
                    onChange={() =>
                      handleCategoryChange("Wi-Fi Setup and Troubleshooting")
                    }
                    className="me-2"
                  />
                  Wi-Fi Setup and Troubleshooting
                </label>
                <label className="d-flex align-items-center mb-3">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(
                      "LAN Network Repair"
                    )}
                    onChange={() =>
                      handleCategoryChange("LAN Network Repair")
                    }
                    className="me-2"
                  />
                  LAN Network Repair
                </label>
                <label className="d-flex align-items-center mb-3">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(
                      "Router Configuration"
                    )}
                    onChange={() =>
                      handleCategoryChange("Router Configuration")
                    }
                    className="me-2"
                  />
                  Router Configuration
                </label>
                <label className="d-flex align-items-center mb-3">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(
                      "Network Security Services"
                    )}
                    onChange={() =>
                      handleCategoryChange("Network Security Services")
                    }
                    className="me-2"
                  />
                  Network Security Services
                </label>
                <label className="d-flex align-items-center mb-3">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(
                      "Internet Connectivity Issues"
                    )}
                    onChange={() =>
                      handleCategoryChange("Internet Connectivity Issues")
                    }
                    className="me-2"
                  />
                  Internet Connectivity Issues
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

export default SoftwareServices;
