import { Link } from 'react-router-dom';

export default function Footer() {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. Brand & About */}
          <div className="space-y-6">
            <Link to="/" className="flex flex-col">
              <span className="text-3xl font-black text-white tracking-tighter leading-none">
                RAJ-VRAJ
              </span>
              <span className="text-xs font-bold text-accent tracking-[0.3em] uppercase">
                Tours & Travels
              </span>
            </Link>
            <p className="text-slate-400 font-medium leading-relaxed">
              Your premier partner for comfortable and safe travel across India. Specializing in long-distance journeys with our professional fleet.
            </p>
          </div>

          {/* 2. Our Fleet */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-accent uppercase tracking-widest">Our Fleet</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li className="hover:text-white transition-colors">
                <Link to="/#fleet">Mahindra Scorpio (7+1)</Link>
              </li>
              <li className="hover:text-white transition-colors">
                <Link to="/#fleet">Toyota Innova Crysta (6+1)</Link>
              </li>
              <li className="hover:text-white transition-colors">
                <Link to="/#fleet">Nationwide Taxi Service</Link>
              </li>
              <li className="hover:text-white transition-colors">
                <Link to="/#fleet">Airport Transfers</Link>
              </li>
            </ul>
          </div>

          {/* 3. Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-accent uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/reviews" className="hover:text-white transition-colors">Client Reviews</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact & Booking</Link></li>
            </ul>
          </div>

          {/* 4. Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-accent uppercase tracking-widest">Contact Us</h4>
            <div className="space-y-4 text-slate-400 font-medium">
              <p className="flex items-center gap-3">
                <span className="text-xl">📍</span> Solapur, Maharashtra, India
              </p>
              <a 
                href={`https://wa.me/${whatsappNumber}`} 
                className="flex items-center gap-3 hover:text-green-400 transition-colors"
              >
                <span className="text-xl">💬</span> WhatsApp: +{whatsappNumber}
              </a>
              <p className="flex items-center gap-3">
                <span className="text-xl">📧</span> rajvrajtours@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm font-medium">
            © {currentYear} <span className="text-slate-300">Raj-VRAJ-TOURS and Traveles</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}