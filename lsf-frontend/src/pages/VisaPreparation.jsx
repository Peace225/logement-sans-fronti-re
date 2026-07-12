import MainLayout from '../layouts/MainLayout';
import { ShieldCheck, FileText, CheckSquare, Briefcase, Plane, Sparkles } from 'lucide-react';

export default function VisaPreparation() {
  const points = [
    {
      title: 'Assurance voyage',
      desc: 'Souscrivez à une couverture complète incluant les frais médicaux et le rapatriement, souvent exigée pour l\'obtention du visa.',
      icon: ShieldCheck
    },
    {
      title: 'Demande de visa',
      desc: 'Accompagnement étape par étape : constitution du dossier, prise de rendez-vous consulaire et préparation à l\'entretien.',
      icon: FileText
    },
    {
      title: 'Check-list départ',
      desc: 'Ne rien oublier avant le décollage : réservations, bagages, produits essentiels et gestion des abonnements en cours.',
      icon: CheckSquare
    },
    {
      title: 'Documents obligatoires',
      desc: 'Inventaire précis des originaux et copies certifiées à emporter (passeport, diplômes, contrats, preuves de logement).',
      icon: Briefcase
    },
    {
      title: 'Conseils d\'installation',
      desc: 'Adaptation culturelle, climat, budget de vie et premiers réflexes pour une intégration réussie dès votre arrivée.',
      icon: Plane
    }
  ];

  return (
    <MainLayout>
      {/* HERO SECTION */}
      <section className="bg-[#0A192F] pt-24 pb-20 px-6 text-center border-b border-white/10">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
            <Sparkles size={12} className="text-[#F25C05]" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/70">Préparation</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Visa & Préparation</h1>
          <p className="text-white/60 text-lg font-light max-w-xl mx-auto">
            Nous sécurisons chaque étape de vos préparatifs administratifs pour un départ en toute sérénité.
          </p>
        </div>
      </section>

      {/* CONTENT GRID */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <div 
                key={index} 
                className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm hover:shadow-xl hover:border-orange-100 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-orange-50 text-[#F25C05] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#0A192F] mb-3">{point.title}</h3>
                <p className="text-zinc-500 leading-relaxed font-light text-sm">{point.desc}</p>
              </div>
            );
          })}
        </div>

        {/* SECTION FOOTER */}
        <div className="mt-20 bg-gradient-to-r from-orange-50 to-zinc-50 rounded-3xl p-12 text-center border border-orange-100">
          <h3 className="text-2xl font-bold text-[#0A192F] mb-4">Besoin d'un guide complet ?</h3>
          <p className="text-zinc-600 mb-8 max-w-md mx-auto">
            Téléchargez notre guide de préparation au départ incluant tous les modèles de documents nécessaires.
          </p>
          <button className="bg-[#0A192F] hover:bg-[#1e3a6e] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl">
            Télécharger le Guide PDF
          </button>
        </div>
      </section>
    </MainLayout>
  );
}