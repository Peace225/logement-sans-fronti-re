import { Link } from 'react-router-dom';
import { Menu, User, Home, FileText } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-[#0A192F] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-[#F25C05] p-2 rounded-lg">
            <Home size={20} className="text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight">LSF</span>
        </Link>

        {/* Liens de navigation (Desktop) */}
        <div className="hidden xl:flex items-center gap-6">
          <Link to="/" className="hover:text-[#F25C05] transition font-medium text-sm">Accueil</Link>
          <Link to="/logements" className="hover:text-[#F25C05] transition font-medium text-sm">Logements</Link>
          <Link to="/installation" className="hover:text-[#F25C05] transition font-medium text-sm">Accompagnement</Link>
          <Link to="/visa-preparation" className="hover:text-[#F25C05] transition font-medium text-sm">Visa & Préparation</Link>
          <Link to="/partenaires" className="hover:text-[#F25C05] transition font-medium text-sm">Partenaires</Link>
          <Link to="/contact" className="hover:text-[#F25C05] transition font-medium text-sm">Contact</Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Bouton Attestation */}
          <Link 
            to="/attestation" 
            className="hidden lg:flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-all"
          >
            <FileText size={16} />
            Attestation logement
          </Link>

          {/* Bouton Mon Espace */}
          <Link 
            to="/login" 
            className="flex items-center gap-2 bg-[#F25C05] text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-opacity-90 transition-all shadow-lg shadow-[#F25C05]/20"
          >
            <User size={16} />
            Mon espace
          </Link>
          
          {/* Menu Mobile */}
          <button className="xl:hidden text-white hover:text-[#F25C05] transition-colors ml-2">
            <Menu size={28} />
          </button>
        </div>
        
      </div>
    </nav>
  );
}