import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between px-4">
        <div className="flex flex-col mb-6 md:w-1/5">
          <h3 className="text-md font-semibold mb-2 pl-4">Solutions</h3>
          <ul className="space-y-2 pl-4">
            <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Marketing</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Analytics</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Automation</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Commerce</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Insights</a></li>
          </ul>
        </div>

        <div className="flex flex-col mb-6 md:w-1/5">
          <h3 className="text-md font-semibold mb-2 pl-4">Support</h3>
          <ul className="space-y-2 pl-4">
            <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Submit a ticket</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Documentation</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Guides</a></li>
          </ul>
        </div>

        <div className="flex flex-col mb-6 md:w-1/5">
          <h3 className="text-md font-semibold mb-2 pl-4">Company</h3>
          <ul className="space-y-2 pl-4">
            <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">About Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Blog</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Careers</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Press</a></li>
          </ul>
        </div>

        <div className="flex flex-col mb-6 md:w-1/5">
          <h3 className="text-md font-semibold mb-2 pl-4">Legal</h3>
          <ul className="space-y-2 pl-4">
            <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Terms of Service</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">License</a></li>
          </ul>
        </div>

        <div className="flex flex-col mb-6 md:w-1/5">
          <h3 className="text-md font-semibold mb-2 pl-4">Follow Us</h3>
          <ul className="flex space-x-4 pl-4">
            <li><a href="#" className="text-gray-400 hover:text-white transition duration-200"><FaFacebookF /></a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition duration-200"><FaInstagram /></a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition duration-200"><FaTwitter /></a></li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8 text-sm border-t border-gray-700 pt-4">
        © 2024 Your Company Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
