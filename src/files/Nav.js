
import React, { useState } from "react";
import { Link} from "react-router-dom";

function Nav() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header className="bg-blue-900 shadow sticky top-0 z-50">
      <nav className="w-full max-w-[1023px] mx-auto flex flex-wrap items-center justify-between px-2 sm:px-4 py-2">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 mb-2 sm:mb-0">
          <span className="inline-flex items-center">
            <svg
              className="w-8 h-8 text-yellow-400 mr-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7 18c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm10 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zM7.334 16l.94-2h7.452l.94 2H7.334zM6.16 14l-1.2-6h13.08l-1.2 6H6.16zM20 6H5.21l-.94-2H2V2h2.21l3.6 7.59-1.35 2.44C5.52 12.37 6.48 14 8 14h8c1.52 0 2.48-1.63 1.54-2.97l-1.35-2.44L19.79 6z" />
            </svg>
            <span className="text-white font-extrabold text-2xl tracking-tight font-sans">Delhi</span>
            <span className="text-yellow-400 font-extrabold text-2xl font-sans ml-1">Cart</span>
          </span>
        </Link>

        {/* Hamburger for mobile */}
        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={() => setSidebarOpen(true)}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Search Bar */}
        <div className="flex-1 mx-2 sm:mx-4 max-w-full sm:max-w-xl order-3 sm:order-none w-full sm:w-auto">
          <div className="flex rounded-lg overflow-hidden bg-white shadow-sm">
            <input
              type="text"
              className="flex-1 px-4 py-2 outline-none text-sm"
              placeholder="Search for products, brands and more"
            />
            <button className="bg-blue-600 px-4 flex items-center justify-center hover:bg-blue-700 transition">
              <svg width="20" height="20" viewBox="0 0 17 18" xmlns="http://www.w3.org/2000/svg">
                <g fill="#fff" fillRule="evenodd">
                  <path d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"></path>
                  <path d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"></path>
                </g>
              </svg>
            </button>
          </div>
        </div>

        {/* Nav Links (desktop) */}
        <div className="hidden sm:flex items-center gap-2 sm:gap-4 order-2 sm:order-none w-full sm:w-auto justify-end">
          <Link
            to="/"
            className="flex items-center gap-1 mx-2 text-white hover:text-yellow-300 font-semibold text-sm"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M3 12l9-9 9 9" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9 21V9h6v12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Home
          </Link>
          <Link
            to="/login"
            className="bg-white text-blue-700 font-semibold px-4 py-1 rounded hover:bg-blue-100 transition text-sm"
          >
            Login
          </Link>
          <button className="text-white hover:underline text-sm hidden md:inline">Become a Seller</button>
          <div className="relative group">
            <Link to="/profile" className="flex items-center gap-2 text-white hover:text-yellow-300 text-sm">
              <span className="bg-yellow-400 text-blue-900 rounded-full w-7 h-7 flex items-center justify-center font-bold">R</span>
              Profile
            </Link>
          </div>
          <Link
            to="/cart"
            className="flex items-center gap-1 text-white hover:text-blue-200 transition text-sm"
          >
            <svg className="w-5 h-5" fill="white" viewBox="0 0 16 16">
              <path d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" />
            </svg>
            Cart
          </Link>
        </div>

        {/* Sidebar for mobile */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-50 flex">
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black bg-opacity-40"
              onClick={() => setSidebarOpen(false)}
            ></div>
            {/* Sidebar */}
            <div className="relative bg-white w-64 max-w-full h-full shadow-lg z-50 p-6 flex flex-col">
              <button
                className="absolute top-2 right-2 text-blue-900"
                onClick={() => setSidebarOpen(false)}
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <nav className="flex flex-col gap-5 mt-8">
                <Link
                  to="/"
                  className="flex items-center gap-2 text-blue-900 font-semibold text-base hover:text-blue-700"
                  onClick={() => setSidebarOpen(false)}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M3 12l9-9 9 9" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 21V9h6v12" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Home
                </Link>
                <Link
                  to="/login"
                  className="font-semibold text-base text-blue-900 hover:text-blue-700"
                  onClick={() => setSidebarOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/profile"
                  className="flex items-center gap-2 text-blue-900 font-semibold text-base hover:text-blue-700"
                  onClick={() => setSidebarOpen(false)}
                >
                  <span className="bg-yellow-400 text-blue-900 rounded-full w-7 h-7 flex items-center justify-center font-bold">R</span>
                  Profile
                </Link>
                <Link
                  to="/cart"
                  className="flex items-center gap-2 text-blue-900 font-semibold text-base hover:text-blue-700"
                  onClick={() => setSidebarOpen(false)}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
                  </svg>
                  Cart
                </Link>
                <Link
                  to="/offers"
                  className="font-semibold text-base text-blue-900 hover:text-blue-700"
                  onClick={() => setSidebarOpen(false)}
                >
                  Offers
                </Link>
                <Link
                  to="/track-order"
                  className="font-semibold text-base text-blue-900 hover:text-blue-700"
                  onClick={() => setSidebarOpen(false)}
                >
                  Track Order
                </Link>
              </nav>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Nav;