import { reviewsData } from '../data/reviewsData';

export default function Reviews() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-primary pt-32 pb-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter">
            CLIENT <span className="text-accent">REVIEWS</span>
          </h1>
          <p className="text-blue-100 text-lg max-w-xl mx-auto font-medium">
            Don't just take our word for it. Here is what our travelers say about their experiences with us.
          </p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviewsData.map((rev) => (
              <div key={rev.id} className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col">
                {/* Destination Photo */}
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={rev.image} 
                    alt={rev.destination} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Trip to {rev.destination}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8 flex flex-col flex-grow">
                  {/* Stars */}
                  <div className="flex text-accent mb-4 text-xl">
                    {[...Array(rev.rating)].map((_, i) => <span key={i}>★</span>)}
                  </div>

                  <p className="text-slate-600 italic mb-6 flex-grow leading-relaxed">
                    "{rev.text}"
                  </p>

                  <div className="border-t border-slate-50 pt-6 flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl">
                      {rev.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-black text-primary leading-none mb-1">{rev.name}</p>
                      <p className="text-xs font-bold text-slate-400 uppercase">Verified Customer</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review CTA */}
      <section className="py-20 border-t border-slate-200">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-black text-primary mb-4 uppercase">Have a story to share?</h3>
          <p className="text-slate-500 mb-8 font-medium italic">We'd love to hear about your trip with Raj-VRAJ-TOURS.</p>
          <a href="https://wa.me/917773980664" className="inline-block bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-accent hover:text-primary transition-all">
            Submit Your Review
          </a>
        </div>
      </section>
    </div>
  );
}