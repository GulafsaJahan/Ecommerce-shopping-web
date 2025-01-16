import React from "react";
// import "./Navbar.css";
import Electronics from "../../assets/electronic.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Tippy from "@tippyjs/react";
import "tippy.js/themes/light.css";
import HardwareT from "./HardwareT";
import SoftwareServices from "./SoftwareServices";
import PeripheralServ from "./PeripheralServ";
import Upgrades from "./Upgrades";
import DiagnosticServices from "./DiagnosticServices";
import Sales from "./Sales";
import OtherServices from "./OtherServices";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mx-3 my-2">
      <div className="container-fluid">
        <div className="d-flex flex-wrap justify-content-evenly w-100">
          {/* Hardware Repair */}
          <Tippy theme="light" content={<HardwareT />} interactive={true}>
            <a href="#" className="nav-link text-center mb-2">
              <div className="hardwareS">
                <div className="outer">
                  <div className="img-grp">
                    <img src={Electronics} alt="Hardware Repair" />
                  </div>
                  <div className="text-icon-group">
                    <span>Hardware Repair</span>
                    <ExpandMoreIcon />
                  </div>
                </div>
              </div>
            </a>
          </Tippy>

          {/* Software Services */}
          <Tippy theme="light" content={<SoftwareServices />} interactive={true}>
            <a href="#" className="nav-link text-center mb-2">
              <div className="hardwareS">
                <div className="outer">
                  <div className="img-grp">
                    <img src={Electronics} alt="Software Services" />
                  </div>
                  <div className="text-icon-group">
                    <span>Software Services</span>
                    <ExpandMoreIcon />
                  </div>
                </div>
              </div>
            </a>
          </Tippy>

          {/* Peripheral Services */}
          <Tippy theme="light" content={<PeripheralServ />} interactive={true}>
            <a href="#" className="nav-link text-center mb-2">
              <div className="hardwareS">
                <div className="outer">
                  <div className="img-grp">
                    <img src={Electronics} alt="Peripheral Services" />
                  </div>
                  <div className="text-icon-group">
                    <span>Peripheral Services</span>
                    <ExpandMoreIcon />
                  </div>
                </div>
              </div>
            </a>
          </Tippy>

          {/* Customization and Upgrades */}
          <Tippy theme="light" content={<Upgrades />} interactive={true}>
            <a href="#" className="nav-link text-center mb-2">
              <div className="hardwareS">
                <div className="outer">
                  <div className="img-grp">
                    <img src={Electronics} alt="Customization and Upgrades" />
                  </div>
                  <div className="text-icon-group">
                    <span>Customization and Upgrades</span>
                    <ExpandMoreIcon />
                  </div>
                </div>
              </div>
            </a>
          </Tippy>

          {/* Diagnostic Services */}
          <Tippy theme="light" content={<DiagnosticServices />} interactive={true}>
            <a href="#" className="nav-link text-center mb-2">
              <div className="hardwareS">
                <div className="outer">
                  <div className="img-grp">
                    <img src={Electronics} alt="Diagnostic Services" />
                  </div>
                  <div className="text-icon-group">
                    <span>Diagnostic Services</span>
                    <ExpandMoreIcon />
                  </div>
                </div>
              </div>
            </a>
          </Tippy>

          {/* Sales and Consultation */}
          <Tippy theme="light" content={<Sales />} interactive={true}>
            <a href="#" className="nav-link text-center mb-2">
              <div className="hardwareS">
                <div className="outer">
                  <div className="img-grp">
                    <img src={Electronics} alt="Sales and Consultation" />
                  </div>
                  <div className="text-icon-group">
                    <span>Sales and Consultation</span>
                    <ExpandMoreIcon />
                  </div>
                </div>
              </div>
            </a>
          </Tippy>

          {/* Other Services */}
          <Tippy theme="light" content={<OtherServices />} interactive={true}>
            <a href="#" className="nav-link text-center mb-2">
              <div className="hardwareS">
                <div className="outer">
                  <div className="img-grp">
                    <img src={Electronics} alt="Other Services" />
                  </div>
                  <div className="text-icon-group">
                    <span>Other Services</span>
                    <ExpandMoreIcon />
                  </div>
                </div>
              </div>
            </a>
          </Tippy>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
