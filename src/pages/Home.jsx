import heroImgUrl from '../assets/hero.png'; // Fallback if needed, but we'll use the link
import scorpioImg from '../assets/scorpio.png'; 
import innovaImg from '../assets/innova.png';
import VehicleCard from '../components/VehicleCard';

export default function Home() {
  // The new hero image link you requested
  const heroLink = "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=2070&auto=format&fit=crop";
  
  // Accessing the WhatsApp number from environment variables
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi Raj-VRAJ-TOURS, I'm interested in booking a vehicle.`;

  const fleet = [
    {
      name: "Mahindra Scorpio",
      capacity: "7+1",
      image: scorpioImg,
      features: ["Tough Off-roading", "Powerful AC", "Roof Carrier", "Perfect for Hills"]
    },
    {
      name: "Toyota Innova Crysta",
      capacity: "6+1 / 7+1",
      image: innovaImg,
      features: ["Premium Interior", "Climate Control", "Airbags Safety", "Ultra Comfort"]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroLink} 
            alt="Scenic Road" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <div className="inline-block px-6 py-2 rounded-full bg-accent/20 border border-accent/40 backdrop-blur-md mb-8">
            <span className="text-accent text-sm font-bold tracking-[0.3em] uppercase text-shadow-sm">All India Tour Specialist</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter drop-shadow-2xl uppercase">
            RAJ-VRAJ <br /> 
            <span className="text-accent underline decoration-white/20 underline-offset-8">TOURS & TRAVELS</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            Experience the ultimate road trip with our premium fleet. Reliable, comfortable, and safe.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="#fleet" className="bg-primary text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-primary/40 transition-all transform hover:-translate-y-1">
              View Our Fleet
            </a>
            {/* Functional WhatsApp Button */}
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-green-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-green-500 transition-all flex items-center justify-center gap-2"
            >
              Book via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className="py-32 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-black text-primary uppercase tracking-tighter mb-4">Our Fleet</h2>
          <div className="w-24 h-2 bg-accent mx-auto rounded-full mb-20"></div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {fleet.map((car, index) => (
              <VehicleCard key={index} {...car} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}