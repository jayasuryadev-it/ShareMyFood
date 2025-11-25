import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';  // ✅ Import Navbar
import Home from './pages/Home';
import DonateFood from './pages/DonateFood';
import Order from './pages/Order';

function App() {
  return (
    <Router>
      <Navbar />  {/* ✅ Navbar added at the top */}
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<DonateFood />} />
          <Route path="/order" element={<Order />} />
          <Route path="/about" element={<h1>About Page</h1>} /> {/* Temporary About Page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
