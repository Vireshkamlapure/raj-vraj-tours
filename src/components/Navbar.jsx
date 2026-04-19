import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-20 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="flex flex-col">
          <span className="text-2xl font-black text-primary tracking-tight leading-none">
            RAJ-VRAJ
          </span>
          <span className="text-xs font-bold text-accent tracking-[0.2em] uppercase">
            Tours & Travels
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="font-medium hover:text-primary transition-colors">Home</Link>
          <Link to="/about" className="font-medium hover:text-primary transition-colors">About</Link>
          <Link to="/reviews" className="font-medium hover:text-primary transition-colors">Reviews</Link>
          <Link to="/contact" className="bg-primary text-white px-6 py-2 rounded-full font-bold hover:bg-opacity-90 transition-all">
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}