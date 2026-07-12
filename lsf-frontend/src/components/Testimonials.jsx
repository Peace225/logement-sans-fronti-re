export default function Testimonials() {
  const items = [
    { 
      name: 'Aminata', 
      country: 'Côte d’Ivoire', 
      text: 'J’ai trouvé mon studio à Paris avant mon visa grâce à LSF.',
      image: '/images/testimonials/aminata.jpg'
    },
    { 
      name: 'Moussa', 
      country: 'Sénégal', 
      text: 'Accueil aéroport + installation, tout était prêt.',
      image: '/images/testimonials/moussa.jpg'
    }
  ];

  // Image par défaut si l'image locale n'est pas encore prête
  const defaultAvatar = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200";

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 border-t border-gray-100">
      
      {/* En-tête épuré et aligné */}
      <div className="mb-16 text-center max-w-2xl mx-auto">
        <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#F25C05]">
          Retours d'expérience
        </span>
        <h2 className="text-3xl md:text-4xl font-black tracking-tight mt-3 text-gray-900">
          Ils nous font confiance
        </h2>
        <div className="w-12 h-1 bg-[#F25C05] mx-auto mt-4"></div>
      </div>

      {/* Grille sans angles arrondis, style galerie d'art / éditorial */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((t) => (
          <div 
            key={t.name} 
            className="bg-white p-10 border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.02)] hover:border-gray-200 hover:shadow-[0_10px_35px_rgba(0,0,0,0.04)] transition-all duration-300 relative flex flex-col justify-between min-h-[200px]"
          >
            {/* Guillemet décoratif géant et discret en arrière-plan */}
            <span className="absolute top-4 right-8 text-7xl font-serif text-gray-100 select-none pointer-events-none">
              “
            </span>

            {/* Corps du témoignage */}
            <p className="text-gray-700 text-base md:text-lg font-medium italic leading-relaxed relative z-10 pr-6">
              "{t.text}"
            </p>

            {/* Signature épurée de l'auteur avec Image */}
            <div className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-between">
              <div className="flex items-center gap-4">
                {/* Cadre de l'image (Angles droits) */}
                <div className="w-12 h-12 bg-gray-100 border border-gray-200 overflow-hidden flex-shrink-0">
                  <img 
                    src={t.image} 
                    alt={t.name} 
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.src = defaultAvatar; }}
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm tracking-wide uppercase">
                    {t.name}
                  </h4>
                  <p className="text-[11px] text-gray-400 font-semibold mt-0.5 tracking-wider">
                    {t.country}
                  </p>
                </div>
              </div>
              
              {/* Rappel subtil de la couleur d'accent */}
              <div className="w-6 h-[2px] bg-[#F25C05] hidden sm:block"></div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}