import logo from './logo.svg'; 
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard'; // Import the new Dashboard component
import Footer from './components/Footer'; // Import the new Footer component
import './App.css';

function App() {
  return (
      <Router>
          <Navbar />
          <Routes>
              <Route path="/" element={<LandingPage/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register/>} />
              <Route path="/dashboard" element={<Dashboard/>} /> {/* Add the Dashboard route */}
          </Routes>
          <Footer /> {/* Add the Footer component */}
      </Router>
  );
}

export default App;
