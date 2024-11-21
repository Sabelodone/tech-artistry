import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
              <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-50 lg:hidden animate-slideInLeft">
                <div className="bg-white w-64 h-full p-4">
                  <button onClick={toggleMenu} className="text-gray-700 hover:text-purple-500 transition-colors duration-300">
                    Close
                  </button>
                  <div className="mt-4 flex flex-col animate-fadeIn">
                    {['Home', 'Products', 'Company'].map((item) => (
                      <button
                        key={item}
                        onClick={() => {
                          onLinkClick(item.toLowerCase());
                          toggleMenu();
                        }}
                        className="py-2 text-gray-900 hover:text-purple-500 transition-colors duration-300"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </header>

          <div className="flex items-center justify-center min-h-screen bg-gray-100 animate-fadeIn">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Welcome to{' '}
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-gradientText">
                  Tech Artistry Design
                </span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Your gateway to innovative web solutions and artistic design experiences.
              </p>
              <button
                onClick={() => setContentVisible((prev) => !prev)}
                className="inline-block rounded-lg bg-purple-500 px-4 py-2 text-white hover:bg-purple-600 mt-4 transition-colors duration-300 animate-pulse glow-animation"
              >
                Learn More
              </button>
            </div>
          </div>
        </>
      )}

      {isContactFormVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-50 animate-fadeIn">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <form>
              {['Name', 'Email', 'Phone Number'].map((label, index) => (
                <div key={index} className="mb-4">
                  <label className="block text-gray-700">{label}</label>
                  <input
                    type={label === 'Email' ? 'email' : 'text'}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                    placeholder={`Your ${label}`}
                  />
                </div>
              ))}
              <div className="mb-4">
                <label className="block text-gray-700">Message</label>
                <textarea
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                  rows="4"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="w-1/2 bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition-colors duration-300"
                >
                  Send Message
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
            <button
              onClick={toggleContactForm}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 transition-colors duration-300"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;


/*
import React, { useState } from 'react';
import { Navbar, Nav, Button, Offcanvas } from 'react-bootstrap';

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="bg-white">
      <Navbar expand="lg" className="p-3">
        <Navbar.Brand href="#">
          <img
            className="h-8"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
        </Navbar.Brand>
        <Navbar.Toggle onClick={handleShow} aria-controls="offcanvasNavbar" />
        <Navbar.Collapse id="offcanvasNavbar">
          <Nav className="me-auto">
            <Nav.Link href="#">Product</Nav.Link>
            <Nav.Link href="#">Features</Nav.Link>
            <Nav.Link href="#">Marketplace</Nav.Link>
            <Nav.Link href="#">Company</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#">Log in</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Company</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="#">Product</Nav.Link>
            <Nav.Link href="#">Features</Nav.Link>
            <Nav.Link href="#">Marketplace</Nav.Link>
            <Nav.Link href="#">Company</Nav.Link>
            <Nav.Link href="#">Log in</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      <div className="relative px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            Data to enrich your online business
          </h1>
          <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button variant="primary">Get started</Button>
            <Nav.Link href="#" className="text-sm font-semibold text-gray-900">Learn more <span aria-hidden="true">→</span></Nav.Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
*/


/*
import React, { useState } from 'react';
import { Navbar, Nav, Button, Offcanvas } from 'react-bootstrap';

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="bg-white">
      <Navbar expand="lg" className="p-3">
        <Navbar.Brand href="#">
          <img
            className="h-8"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
        </Navbar.Brand>
        <Navbar.Toggle onClick={handleShow} aria-controls="offcanvasNavbar" />
        <Navbar.Collapse id="offcanvasNavbar">
          <Nav className="me-auto">
            <Nav.Link href="#">Product</Nav.Link>
            <Nav.Link href="#">Features</Nav.Link>
            <Nav.Link href="#">Marketplace</Nav.Link>
            <Nav.Link href="#">Company</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#">Log in</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Company</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="#">Product</Nav.Link>
            <Nav.Link href="#">Features</Nav.Link>
            <Nav.Link href="#">Marketplace</Nav.Link>
            <Nav.Link href="#">Company</Nav.Link>
            <Nav.Link href="#">Log in</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      <div className="relative px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            Data to enrich your online business
          </h1>
          <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button variant="primary">Get started</Button>
            <Nav.Link href="#" className="text-sm font-semibold text-gray-900">Learn more <span aria-hidden="true">→</span></Nav.Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
*/
