
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Navbar/Footer";
import HomePage from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Product from "./Pages/Product";
import Email from "./Pages/Email";
import  Carousel  from "./Components/Carousel/Carousel";

const App = () => {

 return (
   <Router>
      <Navbar />
      <Carousel  />
     <main className="main-content">
       <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/about-us" element={<About />} />
         <Route path="/product" element={<Product />} />
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
         <Route path="/email" element={<Email />} />
       </Routes>
     </main>
     <div style={{ clear: 'both' }}></div> {/* Ajout d'un élément vide avec clear: both */}
     <Footer />
   </Router>
 );
};

export default App;