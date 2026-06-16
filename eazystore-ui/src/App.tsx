import { useState } from 'react'
import Header from './components/Header';
import './App.css'
import ClassHeader from './components/ClassHeader';
import Footer from './components/footer/Footer';
import React from 'react';
import Home from './components/Home';
function App() {
  return (
    <React.Fragment>
    <Header />
    <Home />
    <Footer />
    </React.Fragment>

  );
}

export default App
