import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 fixed-top">
        <a className="navbar-brand text-warning fw-bold" href="/">#reduceHunger</a>
      </nav>
      
      {/* Hero Section */}
      <div className="overlay d-flex flex-column justify-content-center align-items-center text-center text-white">
        <h1 className="display-3 fw-bold">𝚂𝚑𝚊𝚛𝚎𝙼𝚢𝙵𝚘𝚘𝚍
        </h1>
        <p className="lead">Helping to reduce food waste by sharing excess food with those in need.</p>
        <div className="mt-4">
          <Link to="/donate" className="btn btn-success btn-lg me-3 px-4">Donate Food</Link>
          <Link to="/order" className="btn btn-warning btn-lg px-4">Order Food</Link>
        </div>
      </div>
      
      {/* Contact Section */}
      <footer className="contact-section text-center p-4">
        <h3 className="text-light">Need Help?</h3>
        <p className="text-white"><FaEnvelope className="icon" /> sharemyfood140330@gmail.com</p>
        <p className="text-white"><FaPhone className="icon" /> +91 9600373430</p>
      </footer>
    </div>
  );
};

export default Home;
