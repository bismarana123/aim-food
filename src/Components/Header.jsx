import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [activeTab, setActiveTab] = useState("/");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header>
        <nav className="bg-red-500 border-gray-200 px-5 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex justify-between items-center mx-auto max-w-screen-xl w-full">
            {/* Logo Section */}
            <a href=" " className="flex items-center flex-shrink-0">
              <div className="size-20 lg:ml-16">
                <img src="/images/logo.png" alt="Logo" />
              </div>
            </a>

            {/* Spacer to make equal space between logo and menu button */}
            <div className="flex-1"></div>

            {/* Mobile menu button */}
            <div className="flex items-center lg:order-2 sticky top-6 right-4 z-50 lg:hidden">
              <button
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                onClick={toggleMenu} // Toggle the mobile menu visibility
                aria-controls="mobile-menu-2"
                aria-expanded={isMenuOpen ? "true" : "false"}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`w-6 h-6 ${isMenuOpen ? "hidden" : "block"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className={`w-6 h-6 ${isMenuOpen ? "block" : "hidden"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            {/* Desktop menu links */}
            <div className="lg:flex lg:order-1 hidden">
              <ul className="flex justify-between space-x-8 font-medium w-full lg:mt-0 lg:mr-24">
                {/* <li>
                  <Link
                    to="/"
                    className="block py-2 pr-4 pl-3 text-xl rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li> */}
                <li>
                  <Link
                    to="/"
                    onClick={() => setActiveTab("/")}
                    className={`block py-2 pr-4 pl-3 text-xl rounded lg:p-0 dark:text-white ${
                      activeTab === "/" ? "bg-primary-700 text-white" : ""
                    }`}
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    to="/about"
                    onClick={() => setActiveTab("/about")}
                    className={`block py-2 pr-4 pl-3 text-xl rounded lg:p-0 dark:text-white ${
                      activeTab === "/about" ? "bg-primary-700 text-white" : ""
                    }`}
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    to="/shop"
                    onClick={() => setActiveTab("/shop")}
                    className={`block py-2 pr-4 pl-3 text-xl rounded lg:p-0 dark:text-white ${
                      activeTab === "/shop" ? "bg-primary-700 text-white" : ""
                    }`}
                  >
                    Shop
                  </Link>
                </li>

               <li>
                  <Link
                    to="/cart"
                    onClick={() => setActiveTab("/cart")}
                    className={`block py-2 pr-4 pl-3 text-xl rounded lg:p-0 dark:text-white ${
                      activeTab === "/cart" ? "bg-primary-700 text-white" : ""
                    }`}
                  >
                    Cart
                  </Link>
                </li>

                <li>
                  <Link
                    to="/checkout"
                    onClick={() => setActiveTab("/checkout")}
                    className={`block py-2 pr-4 pl-3 text-xl rounded lg:p-0 dark:text-white ${
                      activeTab === "/checkout" ? "bg-primary-700 text-white" : ""
                    }`}
                  >
                    Checkout
                  </Link>
                </li>
                
              </ul>
            </div>

            {/* Mobile menu dropdown */}
            <div
              className={`lg:hidden ${
                isMenuOpen ? "block" : "hidden"
              } fixed top-20 right-4 bg-white shadow-lg w-48 z-40`}
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium">
                <li>
                  <Link
                    to="/"
                    className="block py-2 pr-4 pl-3 text-lg rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="block py-2 pr-4 pl-3 text-lg border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shop"
                    className="block py-2 pr-4 pl-3 border-b text-lg border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cart"
                    className="block py-2 pr-4 pl-3 border-b text-lg border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Cart
                  </Link>
                </li>
                <li>
                  <Link
                    to="/checkout"
                    className="block py-2 pr-4 pl-3 border-b text-lg border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Checkout
                  </Link>
                </li>
              </ul>
              ;
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
