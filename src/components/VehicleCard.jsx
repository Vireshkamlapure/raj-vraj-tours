import { Link } from 'react-router-dom';

export default function VehicleCard({ name, capacity, features, image }) {
  return (
    <div className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col text-left">
      <div className="h-72 overflow-hidden relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-6 right-6">
          <span className="bg-white/90 backdrop-blur-md text-primary px-5 py-2 rounded-full text-sm font-black shadow-lg uppercase tracking-wider">
            {capacity} Seater
          </span>
        </div>
      </div>

      <div className="p-10 flex flex-col flex-grow">
        <h3 className="text-3xl font-black text-primary mb-6">{name}</h3>
        
        <ul className="grid grid-cols-1 gap-y-3 mb-10">
          {features.map((f, i) => (
            <li key={i} className="flex items-center text-slate-600 font-semibold italic">
              <span className="text-accent mr-3 text-xl">★</span> {f}
            </li>
          ))}
        </ul>

        {/* Redirecting to Contact Page */}
        <Link 
          to="/contact" 
          className="mt-auto w-full bg-primary text-white text-center font-bold py-5 rounded-2xl hover:bg-accent hover:text-primary transition-all text-lg shadow-lg shadow-primary/20"
        >
          Check Availability
        </Link>
      </div>
    </div>
  );
}