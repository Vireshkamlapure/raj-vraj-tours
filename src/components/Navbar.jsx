import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-20 flex justify-between items-center">
        
        {/* Logo Section */}
        <Link to="/" onClick={closeMenu} className="flex flex-col">
          <span className="text-2xl font-black text-primary tracking-tight leading-none">
            RAJ-VRAJ
          </span>
          <span className="text-xs font-bold text-accent tracking-[0.2em] uppercase">
            Tours & Travels
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="font-medium hover:text-primary transition-colors">Home</Link>
          <Link to="/about" className="font-medium hover:text-primary transition-colors">About</Link>
          <Link to="/reviews" className="font-medium hover:text-primary transition-colors">Reviews</Link>
          <Link to="/contact" className="bg-primary text-white px-6 py-2 rounded-full font-bold hover:bg-accent hover:text-primary transition-all">
            Book Now
          </Link>
        </div>

        {/* Hamburger Button (Mobile Only) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary focus:outline-none p-2"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              // X Icon
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            ) : (
              // Hamburger Icon
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`
        md:hidden absolute w-full bg-white border-b border-gray-100 transition-all duration-300 ease-in-out
        ${isOpen ? 'top-20 opacity-100 visible' : 'top-10 opacity-0 invisible'}
      `}>
        <div className="flex flex-col p-6 space-y-4">
          <Link to="/" onClick={closeMenu} className="text-lg font-bold text-primary border-b border-gray-50 pb-2">Home</Link>
          <Link to="/about" onClick={closeMenu} className="text-lg font-bold text-primary border-b border-gray-50 pb-2">About Us</Link>
          <Link to="/reviews" onClick={closeMenu} className="text-lg font-bold text-primary border-b border-gray-50 pb-2">Reviews</Link>
          <Link to="/contact" onClick={closeMenu} className="bg-primary text-white text-center px-6 py-4 rounded-2xl font-black uppercase tracking-widest">
            Book Your Ride
          </Link>
        </div>
      </div>
    </nav>
  );
}