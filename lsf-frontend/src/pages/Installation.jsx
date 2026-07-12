import MainLayout from '../layouts/MainLayout';
import { Check, Plane, Home, CreditCard, FileText, MapPin, ShieldCheck, Phone, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Installation() {
  const steps = [
    { id: 1, title: 'Recherche de logement', desc: 'Sélection et validation de votre futur lieu de vie selon vos critères.', icon: Home, status: 'done', time: 'J-15' },
    { id: 2, title: 'Garant financier', desc: 'Constitution et dépôt de votre dossier de garantie certifié.', icon: ShieldCheck, status: 'done', time: 'J-7' },
    { id: 3, title: 'Transfert aéroport', desc: 'Accueil personnalisé à votre arrivée par l\'équipe LSF.', icon: Plane, status: 'done', time: 'Jour J' },
    { id: 4, title: 'Remise des clés', desc: 'État des lieux complet, inventaire et installation accompagnée.', icon: MapPin, status: 'current', time: 'Jour J' },
    { id: 5, title: 'Assurance habitation', desc: 'Souscription et attestation transmise directement au propriétaire.', icon: FileText, status: 'upcoming', time: 'J+1' },
    { id: 6, title: 'Compte bancaire', desc: 'Ouverture assistée avec attestation de domicile fournie.', icon: CreditCard, status: 'upcoming', time: 'J+2' },
    { id: 7, title: 'Téléphone & Internet', desc: 'Activation de votre ligne et forfait étudiant négocié.', icon: Phone, status: 'upcoming', time: 'J+3' },
    { id: 8, title: 'Intégration & CAF', desc: 'Optimisation de vos aides et suivi complet pendant 3 mois.', icon: Check, status: 'upcoming', time: 'J+7' },
  ];

  return (
    <MainLayout>
      {/* HERO PREMIUM */}
      <section className="relative bg-[#0A192F] pt-32 pb-32 px-6 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.05),transparent_70%)]" />
        <div className="relative max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            <Sparkles size={12} className="text-[#F25C05]" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/70">Parcours d'installation</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight text-white mb-6">
            Votre installation<br />
            <span className="font-light italic text-white/70">sur mesure</span>
          </h1>
          <p className="text-lg leading-relaxed text-white/50 max-w-lg mx-auto font-light">
            Un accompagnement complet, de la recherche de logement à votre intégration finale. Sans friction.
          </p>
        </div>
      </section>

      {/* TIMELINE CENTRALISÉE */}
      <section className="px-6 py-24 bg-zinc-50/50">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Ligne verticale guide */}
            <div className="absolute left-[24px] top-4 bottom-4 w-px bg-zinc-200 hidden md:block" />

            <div className="space-y-8">
              {steps.map((step) => {
                const Icon = step.icon;
                const isDone = step.status === 'done';
                const isCurrent = step.status === 'current';

                return (
                  <div key={step.id} className="relative flex gap-6 group">
                    {/* Pastille */}
                    <div
                      className={`relative z-10 w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border transition-all duration-300
                      ${isDone ? 'bg-[#0A192F] border-[#0A192F] text-white shadow-lg' : ''}
                      ${isCurrent ? 'bg-[#F25C05] border-[#F25C05] text-white shadow-lg shadow-orange-500/20' : ''}
                      ${!isDone && !isCurrent ? 'bg-white border-zinc-200 text-zinc-400' : ''}
                      `}
                    >
                      {isDone ? <Check size={20} strokeWidth={2.5} /> : <Icon size={20} strokeWidth={1.5} />}
                    </div>

                    {/* Carte */}
                    <div
                      className={`flex-1 rounded-2xl p-8 transition-all duration-300 border
                      ${isCurrent ? 'bg-white border-orange-100 shadow-xl shadow-orange-500/5' : 'bg-white border-zinc-100 shadow-sm hover:shadow-md hover:border-zinc-200'}
                      `}
                    >
                      <div className="flex flex-wrap justify-between items-start gap-3 mb-3">
                        <h3 className="text-xl font-bold tracking-tight text-zinc-900">
                          <span className="text-zinc-300 font-mono text-sm mr-3">0{step.id}</span>
                          {step.title}
                        </h3>
                        <span className={`text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-lg
                          ${isDone ? 'bg-zinc-100 text-zinc-600' : ''}
                          ${isCurrent ? 'bg-orange-50 text-orange-600' : ''}
                          ${!isDone && !isCurrent ? 'bg-zinc-100 text-zinc-400' : ''}
                        `}>
                          {step.time}
                        </span>
                      </div>

                      <p className="text-zinc-500 leading-relaxed font-light">{step.desc}</p>

                      {isCurrent && (
                        <div className="mt-6 pt-5 border-t border-zinc-50 flex items-center justify-between">
                          <span className="text-xs font-medium text-zinc-400 uppercase tracking-wide">Action en cours</span>
                          <Link to="#" className="text-sm font-semibold text-[#F25C05] hover:text-orange-700 inline-flex items-center gap-1">
                            Voir les détails <span aria-hidden>→</span>
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* SUPPORT CARD */}
          <div className="mt-20">
            <div className="bg-[#0A192F] rounded-3xl px-8 md:px-12 py-12 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(242,92,5,0.15),transparent_60%)]" />
              <div className="relative">
                <h3 className="text-2xl font-bold tracking-tight text-white">Besoin d'une assistance immédiate ?</h3>
                <p className="mt-2 text-white/50 font-light">Notre équipe répond en moins de 10 minutes.</p>
                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                  <a href="https://wa.me/33600000000" className="h-14 px-8 rounded-xl bg-white text-[#0A192F] font-bold inline-flex items-center justify-center hover:bg-zinc-100 transition-all shadow-lg hover:shadow-xl">
                    Contacter sur WhatsApp
                  </a>
                  <a href="tel:+33600000" className="h-14 px-8 rounded-xl bg-white/10 border border-white/10 text-white font-semibold inline-flex items-center justify-center hover:bg-white/15 transition-all backdrop-blur">
                    Appeler l'équipe
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}