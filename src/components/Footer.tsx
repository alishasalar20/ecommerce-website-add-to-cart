import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-lg font-bold">Shop.Co</h2>
          <p className="mt-4 text-sm">
            Your one-stop shop for the best products and deals. Shop with confidence and ease at Shop.Co!
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold">Quick Links</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
                <a className="hover:text-gray-300">About Us</a>
            </li>
            <li>
                <a className="hover:text-gray-300">Products</a>
            </li>
            <li>
                <a className="hover:text-gray-300">Contact</a>
            </li>
            <li>
                <a className="hover:text-gray-300">FAQs</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold">Follow Us</h2>
          <ul className="mt-4 flex space-x-4">
            <li>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <i className="bx bxl-linkedin text-2xl"></i>
              </a>
            </li>
            <li>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <i className="bx bxl-github text-2xl"></i>
              </a>
            </li>
            <li>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <i className="bx bxl-instagram text-2xl"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Shop.Co. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          Developed by{' '}
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Alisha Kafeel
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;