import { Link } from 'react-router-dom';

export default function About() {
  const stats = [
    { label: "Happy Clients", value: "500+" },
    { label: "Cities Covered", value: "100+" },
    { label: "Years Experience", value: "5+" },
    { label: "Safe Journeys", value: "1000+" },
  ];

  const values = [
    {
      title: "Safety First",
      desc: "Our drivers are highly experienced and vetted for long-distance highway driving.",
      icon: "🛡️"
    },
    {
      title: "24/7 Support",
      desc: "We are always a call away, ensuring you're never stranded during your trip.",
      icon: "📞"
    },
    {
      title: "Clean Fleet",
      desc: "Every Scorpio and Innova in our fleet undergoes a deep clean before every journey.",
      icon: "✨"
    }
  ];

  return (
    <div className="bg-white">
      {/* 1. Header Section */}
      <section className="bg-slate-900 pt-32 pb-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          {/* Subtle decorative pattern or map could go here */}
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
            OUR <span className="text-accent">STORY</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">
            Bridging distances and creating memories across India, one road trip at a time.
          </p>
        </div>
      </section>

      {/* 2. Mission Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square bg-slate-100 rounded-[3rem] overflow-hidden rotate-3 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=2070&auto=format&fit=crop"
                  alt="Indian Road Trip" 
                  className="w-full h-full object-cover -rotate-3 hover:scale-110 transition-transform duration-700"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-accent p-8 rounded-2xl shadow-xl hidden md:block">
                <p className="text-primary font-black text-3xl">Since 2019</p>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-black text-primary mb-8 leading-tight">
                Providing Premium Travel <br /> 
                <span className="text-accent">For Every Indian Soul.</span>
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Raj-VRAJ-TOURS was founded with a simple goal: to make outstation travel comfortable and accessible. We understood that while trains and planes get you there, the real India is seen from the window of a car.
              </p>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                With our flagship Scorpio and Innova Crysta, we ensure that whether you are traveling to the snowy peaks of the North or the coastal roads of the South, you do it in style and safety.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, i) => (
                  <div key={i} className="border-l-4 border-accent pl-4">
                    <p className="text-3xl font-black text-primary">{stat.value}</p>
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-primary mb-16 uppercase tracking-tight">Why Choose Us?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border border-slate-100">
                <div className="text-5xl mb-6">{v.icon}</div>
                <h3 className="text-2xl font-bold text-primary mb-4">{v.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Final CTA */}
      <section className="py-20 bg-primary overflow-hidden relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">Ready to start your journey?</h2>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-accent hover:text-primary transition-all shadow-xl">
              Book Your Ride Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}