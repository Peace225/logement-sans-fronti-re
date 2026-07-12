import { Shield, Home, Plane, CreditCard } from 'lucide-react';

const icons = { 
  garantie: Shield, 
  assurance: Home, 
  aeroport: Plane, 
  banque: CreditCard 
};

// Descriptions contextuelles pour rendre le rendu de votre grille ultra-professionnel
const descriptions = {
  garantie: "Obtenez un garant solide en Europe pour sécuriser votre dossier de location.",
  assurance: "Une couverture habitation complète et immédiate requise par les bailleurs.",
  aeroport: "Accueil personnalisé dès votre terminal pour un transfert sans stress.",
  banque: "Ouverture simplifiée de votre compte bancaire européen dès votre arrivée."
};

export default function ServiceCard({ s = { code: 'garantie', name: 'Garantie locative' } }) {
  const Icon = icons[s.code] || Shield;
  const description = descriptions[s.code] || "Accompagnement et activation immédiate de vos services.";

  return (
    <div className="bg-[#112240]/40 backdrop-blur-md p-8 border border-white/[0.06] hover:border-[#F25C05]/30 hover:-translate-y-1.5 transition-all duration-300 text-left flex flex-col justify-between h-full group">
      
      <div>
        {/* Conteneur d'icône minimaliste */}
        <div className="w-12 h-12 bg-white/[0.02] border border-white/[0.08] flex items-center justify-center mb-6 group-hover:border-[#F25C05]/40 transition-colors duration-300">
          <Icon className="text-[#F25C05] w-5 h-5 stroke-[1.5]" />
        </div>
        
        {/* Titre du Service */}
        <h3 className="font-bold text-lg text-white tracking-tight group-hover:text-[#F25C05] transition-colors duration-300">
          {s.name}
        </h3>
        
        {/* Description épurée */}
        <p className="text-xs text-gray-400 mt-3 leading-relaxed font-medium">
          {description}
        </p>
      </div>

      {/* Indicateur d'action discret "Style Tech" */}
      <div className="mt-8 pt-4 border-t border-white/[0.04] flex items-center text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors duration-300">
        Découvrir le service 
        <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300 text-[#F25C05]">→</span>
      </div>

    </div>
  );
}