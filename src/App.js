import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import SlidePage from './components/SlidePage';
import About from './components/About';
import Contact from './components/Contact';
import Fruits from './components/Fruits';
import Coconuts from './components/Coconuts';
import SpicesCollections from './components/SpicesCollections';
import TextilesGarments from './components/TextilesGarments';
import EngineeringCollections from './components/EngineeringCollections';
import SeaFoods from './components/SeaFoods';
import ChatWidget from './components/ChatWidget';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Router>
      <div>
        <Home /> {/* Navbar will remain constant */}
        <Routes>
          <Route path="/" element={<SlidePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/fruits" element={<Fruits />} />
          <Route path="/coconuts" element={<Coconuts />} />
          <Route path="/spices" element={<SpicesCollections />} />
          <Route path="/textiles" element={<TextilesGarments />} />
          <Route path="/engineering" element={<EngineeringCollections />} />
          <Route path="/seafoods" element={<SeaFoods />} />
          
        </Routes>
        <ChatWidget />
      </div>
    </Router>
  );
}

export default App;
