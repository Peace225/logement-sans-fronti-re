import { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { Search, Calendar, Clock, ArrowRight, Tag, Mail, Sparkles, ChevronRight } from 'lucide-react';

// Données (inchangées)
const ARTICLES = [
  { id: 1, title: "Réussir son entretien consulaire pour le visa étudiant", excerpt: "Maîtrisez les questions stratégiques et la préparation documentaire pour sécuriser votre visa.", category: "Visas & Démarches", date: "12 Oct 2023", readTime: "5 min", featured: true, gradient: "from-orange-500 to-rose-500" },
  { id: 2, title: "Les quartiers étudiants les plus abordables à Paris", excerpt: "Sélection rigoureuse des zones offrant le meilleur compromis loyer-accessibilité.", category: "Logements", date: "05 Oct 2023", readTime: "4 min", featured: false, gradient: "from-blue-500 to-indigo-600" },
  { id: 3, title: "Guide complet : Garant, caution et dépôt de garantie", excerpt: "Décryptage des rouages juridiques pour signer votre contrat en toute sérénité.", category: "Logements", date: "28 Sep 2023", readTime: "6 min", featured: false, gradient: "from-emerald-500 to-teal-600" },
  { id: 4, title: "Optimiser son budget étudiant : outils et méthodes", excerpt: "Structurer vos finances mensuelles avec des astuces concrètes.", category: "Vie Étudiante", date: "15 Sep 2023", readTime: "3 min", featured: false, gradient: "from-purple-500 to-pink-600" }
];

const CATEGORIES = ["Tous", "Visas & Démarches", "Logements", "Vie Étudiante", "Astuces"];

export default function BlocEtConseil() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  return (
    <MainLayout>
      {/* HERO SECTION : Effet Glassmorphism et typographie bold */}
      <section className="relative pt-32 pb-24 px-6 text-center overflow-hidden bg-[#0A192F]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#F25C05] rounded-full blur-[150px] opacity-20"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#F25C05] text-xs font-bold uppercase tracking-[0.2em] mb-8">
            <Sparkles size={14} /> Ressources exclusives
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter">
            BLOC & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F25C05] to-[#FF9D66]">CONSEILS</span>
          </h1>
          <p className="text-zinc-400 text-xl font-light max-w-2xl mx-auto leading-relaxed">
            L'excellence dans l'accompagnement. Accédez à nos analyses stratégiques pour transformer vos projets en succès.
          </p>
        </div>
      </section>

      {/* FILTRES MODERNES */}
      <section className="py-12 px-6 flex justify-center">
        <div className="bg-white p-2 rounded-full shadow-xl border border-zinc-100 flex flex-wrap gap-2">
          {CATEGORIES.map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${activeCategory === cat ? 'bg-[#0A192F] text-white shadow-lg' : 'text-zinc-500 hover:bg-zinc-100'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* GRILLE D'ARTICLES : Effet 3D et Liseré Brillant */}
      <section className="py-12 px-6 max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ARTICLES.map((art) => (
          <div key={art.id} className="group relative bg-white p-1 rounded-[2.5rem] border border-zinc-100 shadow-sm hover:shadow-2xl transition-all duration-500">
            <div className={`h-64 w-full rounded-[2rem] bg-gradient-to-br ${art.gradient} relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all"></div>
            </div>
            <div className="p-6">
              <span className="text-[#F25C05] text-[10px] font-black uppercase tracking-[0.1em]">{art.category}</span>
              <h3 className="text-xl font-bold text-[#0A192F] mt-2 mb-4 group-hover:text-[#F25C05] transition-colors">{art.title}</h3>
              <p className="text-zinc-500 text-sm mb-6 line-clamp-2">{art.excerpt}</p>
              <div className="flex items-center justify-between border-t border-zinc-100 pt-4">
                <span className="text-[10px] font-bold text-zinc-400 flex items-center gap-1"><Clock size={12}/> {art.readTime}</span>
                <button className="bg-zinc-100 p-2 rounded-full text-[#0A192F] group-hover:bg-[#F25C05] group-hover:text-white transition-all">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* NEWSLETTER PRESTIGE */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#0A192F] to-[#1a2e4d] rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <h2 className="text-4xl font-black mb-6">Rejoignez l'élite des étudiants</h2>
          <p className="text-zinc-400 mb-10 max-w-md mx-auto">Recevez nos dossiers complets et conseils exclusifs chaque mois.</p>
          <div className="max-w-md mx-auto flex gap-2 bg-white p-1.5 rounded-full">
            <input className="flex-1 bg-transparent px-6 text-black outline-none" placeholder="Votre email..." />
            <button className="bg-[#F25C05] px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">S'abonner</button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}