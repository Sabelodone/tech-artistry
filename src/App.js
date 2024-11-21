import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes here
import Header from './components/header'; // Adjust path if necessary
import ProductsList from './components/ProductList'; // Adjust path if necessary
import Footer from './components/Footer'; // Import the Footer component
import Company from './components/company'; // Import the Company component
import Carousel from './components/Carousel'; // Adjust path as necessary
import TermsPage from './components/TermsPage'; // Import the Terms page
import PrivacyPolicyPage from './components/PrivacyPolicyPage'; // Import the Privacy Policy page
import RefundsPage from './components/RefundsPage'; // Import the Refunds page

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

        <section id="carousel" className="w-full">
          <Carousel />
        </section>

        {/* Add more sections as needed */}
        
        {/* Use Routes to define the Routes for the Policy pages */}
        <Routes>
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/refunds-returns" element={<RefundsPage />} />
          {/* You can add more routes here for other pages */}
        </Routes>

        <Footer /> {/* Always show the footer */}
      </div>
    </Router>
  );
};

export default App;
