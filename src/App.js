import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header'; // Adjust path if necessary
import ProductsList from './components/ProductList'; // Adjust path if necessary
import Footer from './components/Footer'; // Import the Footer component
import Company from './components/company'; // Import the Company component
import Carousel from './components/Carousel'; // Adjust path as necessary

const App = () => {
  const [showHeader] = useState(true); // State to manage header visibility

  const handleLinkClick = (section) => {
    // Smooth scroll to the specified section
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      {showHeader && <Header onLinkClick={handleLinkClick} />} {/* Show header based on state */}

      <div className="min-h-screen relative">
        <section id="home" className="w-full">
          {/* Home section content */}
         
        </section>

    
        <section id="company" className="w-full">
          <Company />
        </section>

        <section id="products" className="w-full">
          <ProductsList />
        </section>
        <section id="company" className="w-full">
          <Carousel />
        </section>

        {/* Add more sections as needed */}

        <Footer /> {/* Always show the footer */}
      </div>
    </Router>
  );
};

export default App;
