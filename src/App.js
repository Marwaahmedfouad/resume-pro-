
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Themes from './components/Themes'
import Home from './pages/home/Home';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';
function App() {
  return (<>
  <Router>
  <Navbar/>
  <Themes/>
  <Routes>
    <Route index element={<Home/>} />
    <Route path='about' element={<About/>}></Route>
    <Route path='portfolio' element={<Portfolio/>}></Route>
    <Route path='contact' element={<Contact/>}></Route>
  </Routes>
  </Router>
  
  </>
  )}

export default App;