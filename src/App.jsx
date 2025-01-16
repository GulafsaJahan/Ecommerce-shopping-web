import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import HardwareServices from './components/Categories/HardwareServices';
import SoftwareServices from './components/Categories/SoftwareServices';
import Motherboard from './components/Categories/Motherboard';
import PeripheralDevices from './components/Categories/PeripheralDevices';
import Upgrades from './components/Categories/Upgrades';
import 'bootstrap/dist/css/bootstrap.min.css';
import DiagnosticServices from './components/Categories/DiagnosticServices';
import Sales from './components/Categories/Sales';
import OtherServices from './components/Categories/OtherServices';
import Cart from './components/Cart/Cart';
import Address from './components/Cart/Address';
import Payment from './components/Cart/Payment';



const App = () => {
  return (
    <div className='app'>
      <Router>
      <Routes>
      <Route path="/" element={<Home />} /> {/* Home route */}
      <Route path="/hardware-services" element={<HardwareServices/>} />
      <Route path="/software-services" element={<SoftwareServices/>} />
      <Route path="/Motherboard" element={<Motherboard></Motherboard>} />
      <Route path="/peripheral-devices" element={<PeripheralDevices></PeripheralDevices>} />
      <Route path="/customization-upgrades" element={<Upgrades></Upgrades>} />
      <Route path="/diagnostic-services" element={<DiagnosticServices></DiagnosticServices>} />
      <Route path="/sales-and-consultants" element={<Sales></Sales>} />
      <Route path="/other-services" element={<OtherServices></OtherServices>} />
      <Route path="/checkout/cart" element={<Cart></Cart>} />
      <Route path='/checkout/address' element={<Address></Address>} />
      <Route path="/checkout/payment" element={<Payment></Payment>} />
      
      </Routes>
    </Router>
    </div>
  )
}

export default App
