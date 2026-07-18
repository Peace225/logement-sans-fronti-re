import { Link } from 'react-router-dom';
import { Menu, User, Key, FileText } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-[#0A192F] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
        
        {/* Logo - Poussé à gauche par le flex-grow des liens */}
        <Link to="/" className="flex items-center gap-4 shrink-0">
          <div className="bg-[#F25C05] p-2.5 rounded-xl shadow-lg shadow-[#F25C05]/20">
            <Key size={24} className="text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-xl tracking-tight text-white whitespace-nowrap">Les Clés de Lamine</span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400 whitespace-nowrap">
              Votre logement étudiant à l'international
            </span>
          </div>
        </Link>

        {/* Liens de navigation - flex-1 permet de prendre l'espace disponible et pousser le logo à gauche */}
        <div className="hidden xl:flex items-center justify-start gap-8 flex-1">
          <Link to="/" className="hover:text-[#F25C05] transition font-medium text-sm whitespace-nowrap">Accueil</Link>
          <Link to="/logements" className="hover:text-[#F25C05] transition font-medium text-sm whitespace-nowrap">Logements</Link>
          <Link to="/installation" className="hover:text-[#F25C05] transition font-medium text-sm whitespace-nowrap">Accompagnement</Link>
          <Link to="/bloc-et-conseil" className="hover:text-[#F25C05] transition font-medium text-sm whitespace-nowrap">Bloc et Conseil</Link>
          <Link to="/partenaires" className="hover:text-[#F25C05] transition font-medium text-sm whitespace-nowrap">Partenaires</Link>
          <Link to="/contact" className="hover:text-[#F25C05] transition font-medium text-sm whitespace-nowrap">Contact</Link>
        </div>

        {/* Actions - Reste à droite */}
        <div className="flex items-center gap-3 shrink-0">
          <Link 
            to="/attestation" 
            className="hidden lg:flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-all whitespace-nowrap"
          >
            <FileText size={16} />
            Attestation de logement
          </Link>

          <Link 
            to="/login" 
            className="flex items-center gap-2 bg-[#F25C05] text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-opacity-90 transition-all shadow-lg shadow-[#F25C05]/20 whitespace-nowrap"
          >
            <User size={16} />
            Mon espace
          </Link>
          
          <button className="xl:hidden text-white hover:text-[#F25C05] transition-colors ml-2">
            <Menu size={28} />
          </button>
        </div>
        
      </div>
    </nav>
  );
}