export default function Contact() {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
  
  // Your Google Form Link
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLScO2ItNYYfsOnx3XxaEdxM1mkYMeI9QzPTsW_h03SHoYOcVrg/viewform?usp=dialog";

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. Hero Header */}
      <section className="bg-primary pt-32 pb-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter">
            BOOK YOUR <span className="text-accent">JOURNEY</span>
          </h1>
          <p className="text-blue-100 text-lg max-w-xl mx-auto font-medium">
            Fill out the form below or reach out to us directly via WhatsApp for instant booking.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
            
            {/* 2. Direct Contact Info (1 Column) */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
                <h3 className="text-2xl font-black text-primary mb-6 uppercase tracking-tight">Direct Contact</h3>
                
                <div className="space-y-6">
                  <a 
                    href={`https://wa.me/${whatsappNumber}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-green-50 text-green-700 hover:bg-green-100 transition-colors group"
                  >
                    <span className="text-3xl group-hover:scale-110 transition-transform">💬</span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-green-600/60">WhatsApp Now</p>
                      <p className="text-lg font-bold">+{whatsappNumber}</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-blue-50 text-blue-700">
                    <span className="text-3xl">📧</span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-blue-600/60">Email Us</p>
                      <p className="text-lg font-bold">rajvrajtours@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 text-slate-700">
                    <span className="text-3xl">📍</span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Office</p>
                      <p className="text-lg font-bold text-slate-900">Solapur, MH, India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Note */}
              <div className="bg-accent/10 p-8 rounded-[2rem] border border-accent/20">
                <h4 className="font-black text-primary mb-2">Note:</h4>
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  After submitting the form, our team will contact you within 30 minutes with the best quote and vehicle availability details.
                </p>
              </div>
            </div>

            {/* 3. Embedded Google Form (2 Columns) */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-slate-100 h-[800px] relative">
                {/* Note: Google Forms 'short' links (forms.gle) sometimes don't embed directly. 
                  If the form doesn't appear, open your Google Form, click 'Send', 
                  select the '< >' (Embed) icon, and copy the 'src' URL from there.
                */}
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLScO2ItNYYfsOnx3XxaEdxM1mkYMeI9QzPTsW_h03SHoYOcVrg/viewform?usp=dialog?embedded=true" 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  marginHeight="0" 
                  marginWidth="0"
                  className="absolute inset-0"
                >
                  Loading…
                </iframe>
              </div>
              
              {/* Fallback Link for Mobile/Errors */}
              <div className="mt-6 text-center">
                <p className="text-slate-400 text-sm">
                  Trouble viewing the form? {" "}
                  <a href={googleFormUrl} target="_blank" rel="noreferrer" className="text-primary font-bold underline">
                    Open in new tab
                  </a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}