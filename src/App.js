import './App.css';
import React from 'react'
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar';
import Slider from './components/Slider.js'
import { BrowserRouter as Router } from 'react-router-dom';
import data from "./data/data.json"
import Offers from "./components/Offers.js"
import Heading from './components/Heading';
import StarProduct from './components/StarProduct';

function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <Slider start={data.banner.start}/>
      <Offers offer={data.offer}/>
      <Heading text="STAR PRODUCTS" />
      <StarProduct starProduct={data.starProduct} />
    </Router>
  );
}

export default App;
