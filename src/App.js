import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';

function App() {
    return (
        <Router>
            
            <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/home' element={ <Home /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/services' element={ <Services /> } />
          <Route path='/portfolio' element={ <Portfolio /> } />
          <Route path='/blog' element={ <Blog /> } />
          <Route path='/contact' element={ <Contact /> } />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
