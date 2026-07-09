import { Link } from 'react-router-dom';
import { Menu, User, Home } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-navy text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-orange p-2 rounded-lg">
              <Home size={24} className="text-white" />
            </div>
            <span className="font-bold text-xl md:text-2xl tracking-wide">LSF</span>
          </Link>

          {/* Liens de navigation (Desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/logements" className="hover:text-orange transition font-medium">Logements</Link>
            <Link to="/universites" className="hover:text-orange transition font-medium">Universités</Link>
            <Link to="/services" className="hover:text-orange transition font-medium">Services</Link>
          </div>

          {/* Bouton Connexion */}
          <div className="flex items-center gap-4">
            <Link 
              to="/login" 
              className="hidden md:flex items-center gap-2 bg-orange text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-orange/90 transition"
            >
              <User size={20} />
              Espace Client
            </Link>
            
            {/* Menu Mobile */}
            <button className="md:hidden text-white hover:text-orange">
              <Menu size={28} />
            </button>
          </div>
          
        </div>
      </div>
    </nav>
  );
}