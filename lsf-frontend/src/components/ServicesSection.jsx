import ServiceCard from './ServiceCard';

export default function ServicesSection({ services }) {
  return (
    <section className="bg-[#0A192F] text-white py-28 relative overflow-hidden border-t border-b border-gray-800">
      
      {/* Halos lumineux subtils en arrière-plan (Effet Premium/SaaS) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F25C05]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* En-tête épuré et structuré */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#F25C05]">
            Accompagnement Sur-Mesure
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mt-3 mb-5 text-white">
            Nos services d'installation
          </h2>
          <div className="w-12 h-1 bg-[#F25C05] mx-auto mb-6"></div> {/* Ligne d'accent épurée */}
          <p className="text-gray-400 text-sm md:text-base font-medium max-w-xl mx-auto leading-relaxed">
            Tout ce dont vous avez besoin pour sécuriser votre logement et faciliter votre emménagement en toute sérénité.
          </p>
        </div>
        
        {/* Grille aérée avec un gap plus important (gap-8) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s) => (
            <ServiceCard key={s.code} s={s} />
          ))}
        </div>

      </div>
    </section>
  );
}