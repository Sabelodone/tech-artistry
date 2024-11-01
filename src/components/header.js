// Import necessary libraries
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isContentVisible, setContentVisible] = useState(true);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isContactFormVisible, setContactFormVisible] = useState(false);

  const handleButtonClick = () => {
    setContentVisible((prev) => !prev);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const toggleContactForm = () => {
    setContactFormVisible((prev) => !prev);
  };

  return (
    <div className="bg-white shadow-lg">
      {isContentVisible && (
        <>
          <header className="absolute inset-x-0 top-0 z-50">
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
              <div className="flex lg:flex-1">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">TECH ARTISTRY DESIGN</span>
                  <img
                    className="w-auto"
                    src="/Black Logo croped.png"
                    alt="Company Logo"
                    style={{ height: '50px', width: 'auto' }}
                  />
                </a>
              </div>
              <div className="flex lg:hidden">
                <button
                  type="button"
                  onClick={() => setMenuOpen(!isMenuOpen)}
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
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
              <div className="hidden lg:flex lg:gap-x-12">
                <Link to="/products" className="text-sm font-semibold text-gray-900">Product</Link>
                <div className="relative">
                  <button
                    onClick={toggleDropdown}
                    className="flex items-center text-sm font-semibold text-gray-900 focus:outline-none"
                  >
                    Features
                    <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M5.2 7.4a.5.5 0 01.8 0l3.5 3.6 3.5-3.6a.5.5 0 01.8.6l-4.3 4.4a.5.5 0 01-.7 0l-4.3-4.4a.5.5 0 010-.6z" />
                    </svg>
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute z-10 mt-1 w-48 rounded-md bg-white shadow-lg">
                      <Link to="/feature1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Feature 1</Link>
                      <Link to="/feature2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Feature 2</Link>
                      <Link to="/feature3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Feature 3</Link>
                    </div>
                  )}
                </div>
                <a href="#" className="text-sm font-semibold text-gray-900">Marketplace</a>
                <Link to="/company" className="text-sm font-semibold text-gray-900">Company</Link>
              </div>
              <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <button onClick={toggleContactForm} className="text-sm font-semibold text-gray-900">
                  Contact Us
                </button>
              </div>
            </nav>
            {/* Mobile menu... */}
          </header>

          <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Welcome to{' '}
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Tech Artistry Design
                </span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Your gateway to innovative web solutions and artistic design experiences.
              </p>
              <button
                onClick={handleButtonClick}
                className="inline-block rounded-lg bg-purple-500 px-4 py-2 text-white hover:bg-purple-600 mt-4"
              >
                Learn More
              </button>
            </div>
          </div>
        </>
      )}

      {isContactFormVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  placeholder="Your Phone Number"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Message</label>
                <textarea
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  rows="4"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="w-1/2 bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600"
                >
                  Send Message
                </button>
                <button
                  onClick={toggleContactForm}
                  className="w-1/2 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300"
                >
                  Close
                </button>
              </div>
            </form>
            <button
              onClick={toggleContactForm}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
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
