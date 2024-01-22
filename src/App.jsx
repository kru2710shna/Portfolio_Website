import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import {Home , Contact , Project , About} from './pages'
import Navbar from './components/Navbar';


const App = () => {
  return (
    <main className="bg-slate-300/20 h-[100vh]">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
