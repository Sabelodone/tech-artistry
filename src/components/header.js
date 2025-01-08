import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Ensure motion is imported if you're using it

const Header = ({ onLinkClick }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isContentVisible, setContentVisible] = useState(true);
  const [isContactFormVisible, setContactFormVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleContactForm = () => setContactFormVisible((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`bg-white shadow-lg ${scrollPosition > 50 ? 'animate-fadeInDown' : ''}`}>

      {isContentVisible && (
        <>
          <header className="absolute inset-x-0 top-0 z-50">
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
              <div className="flex lg:flex-1">
                <Link to="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Tech Artistry Design</span>
                  <img
                    className="w-auto transition-transform duration-300 hover:scale-110"
                    src="/Black Logo croped.png"
                    alt="Company Logo"
                    style={{ height: '50px', width: 'auto' }}
                  />
                </Link>
              </div>
              <div className="flex lg:hidden">
                <button
                  type="button"
                  onClick={toggleMenu}
                  className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 transition-transform duration-300 hover:rotate-90"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </button>
              </div>
              <div className="hidden lg:flex lg:gap-x-12 animate-fadeIn">
                {['blog', 'Products', 'Company'].map((item) => (
                  <button
                    key={item}
                    onClick={() => onLinkClick(item.toLowerCase())}
                    className="text-sm font-semibold text-gray-900 hover:text-purple-500 transition-colors duration-300"
                  >
                    {item}
                  </button>
                ))}
              </div>
              <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <button
                  onClick={toggleContactForm}
                  className="text-sm font-semibold text-gray-900 hover:text-purple-500 transition-colors duration-300"
                >
                  Contact Us
                </button>
              </div>
            </nav>

            {/* Side Drawer for Mobile */}
            {isMenuOpen && (
              <div className="fixed inset-0 z-50 lg:hidden bg-black bg-opacity-60 backdrop-blur-md animate-fadeIn">
                <div className="bg-gradient-to-b from-purple-50 to-white w-72 h-full shadow-lg p-6 relative animate-slideInLeft">
                  {/* Close Button */}
                  <button
                    onClick={toggleMenu}
                    className="absolute top-4 right-4 text-gray-600 hover:text-purple-600 focus:ring-2 focus:ring-purple-300 rounded-full transition duration-300"
                    aria-label="Close Menu"
                  >
                    ✕
                  </button>

                  {/* Logo */}
                  <div className="flex items-center space-x-3 mb-6">
                    <img
                      src="/path-to-logo.png"
                      alt="Logo"
                      className="w-10 h-10 rounded-full shadow-md"
                    />
                  </div>

                  {/* Navigation Links */}
                  <nav className="mt-4 space-y-4">
                    {['Home', 'Products', 'Company', 'Contact'].map((item) => (
                      <button
                        key={item}
                        onClick={() => {
                          if (item === 'Contact') {
                            toggleContactForm();
                          } else {
                            onLinkClick(item.toLowerCase());
                          }
                          toggleMenu();
                        }}
                        className="block w-full text-left py-3 px-4 rounded-lg text-gray-700 hover:text-purple-600 hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-300 transition duration-300"
                      >
                        {item}
                      </button>
                    ))}
                  </nav>

                  {/* Footer */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-sm text-gray-500">
                      &copy; {new Date().getFullYear()} Your Company. All rights reserved.
                    </p>
                  </div>
                </div>
              </div>
            )}

          </header>

          <div className="relative flex items-center justify-center min-h-screen bg-white animate-fadeIn">
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 space-y-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-center text-black"
              >
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
                  Welcome to{' '}
                  <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-gradientText">
                    Tech Artistry Design
                  </span>
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Your gateway to innovative web solutions and artistic design experiences.
                </p>
              </motion.div>

              <motion.button
                onClick={() => setContentVisible((prev) => !prev)}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                className="inline-block rounded-lg bg-purple-500 px-4 py-2 text-white hover:bg-purple-600 mt-4 transition-colors duration-300 animate-pulse glow-animation"
              >
                Learn More
              </motion.button>
            </div>
          </div>

        </>
      )}

      {/* Contact Form */}
      {isContactFormVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-md animate-fadeIn">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
            <h2 className="text-xl font-semibold mb-4 text-purple-600">Contact Us</h2>
            <form>
              {['Name', 'Email', 'Phone Number'].map((label, index) => (
                <div key={index} className="mb-4">
                  <label className="block text-gray-700 font-medium">{label}</label>
                  <input
                    type={label === 'Email' ? 'email' : 'text'}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                    placeholder={`Your ${label}`}
                  />
                </div>
              ))}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium">Message</label>
                <textarea
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                  rows="4"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="flex justify-between space-x-2">
                <button
                  type="submit"
                  className="w-1/2 bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition-colors duration-300"
                >
                  Send
                </button>
                <button
                  type="button"
                  onClick={toggleContactForm}
                  className="w-1/2 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition-colors duration-300"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
