import MainLayout from '../layouts/MainLayout';
import { Building2, GraduationCap, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PARTENAIRES = [
  {
    title: "Résidences & Propriétaires",
    subtitle: "Pour les gestionnaires d'actifs",
    icon: Building2,
    features: ['Gestion des offres', 'Disponibilités temps réel', 'Suivi des demandes'],
    link: "/login?type=pro",
    accent: "bg-orange-500",
    soft: "bg-[#FFF7F1]"
  },
  {
    title: "Universités",
    subtitle: "Pour les institutions académiques",
    icon: GraduationCap,
    features: ['Référencement étudiants', 'Suivi des réservations', 'Accompagnement dédié'],
    link: "/login?type=university",
    accent: "bg-[#08162F]",
    soft: "bg-zinc-50"
  }
];

export default function Partenaires() {
  return (
    <MainLayout>
      {/* HERO */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000')" }}
        >
          <div className="absolute inset-0 bg-[#08162F]/85 backdrop-blur-sm" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="inline-flex px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs tracking-[0.3em] uppercase text-white/60 mb-6">
            Partenaires Stratégiques
          </span>
          <h1 className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-[-0.04em] text-white">
            L'excellence opérationnelle<br className="hidden md:block" /> pour vos actifs.
          </h1>
          <p className="mt-8 text-lg leading-7 text-white/60 max-w-xl mx-auto font-light">
            LSF propose des solutions de gestion haute performance adaptées aux standards des professionnels.
          </p>
        </div>
      </section>

      {/* CARTES CENTRALISÉES */}
      <section className="relative z-10 flex justify-center px-6 pb-24 -mt-16">
        <div className="w-full max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
            {PARTENAIRES.map((item) => (
              <div
                key={item.title}
                className="group relative w-full flex flex-col bg-white rounded-3xl border border-zinc-100 p-8 md:p-10 shadow-[0_8px_40px_-16px_rgba(0,0,0,0.08)] hover:shadow-[0_24px_64px_-20px_rgba(0,0,0,0.12)] hover:-translate-y-1.5 transition-all duration-500"
              >
                {/* Liseré haut */}
                <div className={`absolute top-0 left-8 right-8 h-1 ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full`} />

                <div className={`w-14 h-14 rounded-full ${item.soft} border border-zinc-100 flex items-center justify-center mb-8`}>
                  <item.icon size={24} strokeWidth={1.5} className="text-zinc-900" />
                </div>

                <div>
                  <p className="text-[11px] tracking-[0.2em] uppercase text-zinc-400 font-medium mb-3">{item.subtitle}</p>
                  <h2 className="text-2xl font-semibold tracking-[-0.02em] text-zinc-900">{item.title}</h2>
                </div>

                <ul className="mt-8 space-y-4 flex-grow">
                  {item.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-zinc-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 group-hover:bg-zinc-900 transition-colors" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  to={item.link}
                  className="mt-10 inline-flex items-center justify-between w-full h-14 px-6 rounded-full border border-zinc-200 bg-zinc-50 text-zinc-900 text-sm font-semibold tracking-wide uppercase hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all"
                >
                  Accéder à l'espace
                  <span className="w-8 h-8 rounded-full bg-white group-hover:bg-white/10 flex items-center justify-center transition-colors">
                    <ArrowUpRight size={18} />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}