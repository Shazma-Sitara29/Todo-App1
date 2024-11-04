import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import AboutUs from './Components/About';
import Services from './Components/Services';
import ContactUs from './Components/Contact';
import LoginForm from './Components/Login';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <section id="hero"><HeroSection /></section>
            <section id="about"><AboutUs /></section>
            <section id="services"><Services /></section>
            <section id="contact"><ContactUs /></section>
          </>
        } />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}

export default App;
