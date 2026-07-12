import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

// Import des composants
import Navbar from '../components/Navbar';

// Import des pages existantes
import Home from '../pages/Home';
import Housing from '../pages/Housing';
import HousingDetails from '../pages/HousingDetails';
import DestinationPage from '../pages/DestinationPage';
import Services from '../pages/Services';
import Installation from '../pages/Installation';
import Cities from '../pages/Cities';
import Universities from '../pages/Universities';
import About from '../pages/About';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Partenaires from '../pages/Partenaires';
import Contact from '../pages/Contact'; // Import ajouté
import VisaPreparation from '../pages/VisaPreparation'; // Import ajouté
import AttestationLogement from '../pages/AttestationLogement'; // Import ajouté

// Import des dashboards
import StudentDashboard from '../pages/Dashboard/StudentDashboard';
import OwnerDashboard from '../pages/Dashboard/OwnerDashboard';
import AdminDashboard from '../pages/Dashboard/AdminDashboard';

const ProtectedRoute = ({ children, roles }) => {
  const { user, loading } = useAuthContext();
  
  if (loading) return <div className="min-h-screen grid place-items-center">Chargement LSF...</div>;
  if (!user) return <Navigate to="/login" replace />;
  if (roles && !roles.includes(user.role)) return <Navigate to="/" replace />;
  
  return children;
};

export default function AppRoutes() {
  const location = useLocation();
  
  const hideNavbarPaths = ['/login', '/register'];
  const shouldShowNavbar = !hideNavbarPaths.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logements" element={<Housing />} />
        <Route path="/destination/:name" element={<DestinationPage />} />
        <Route path="/logement/:id" element={<HousingDetails />} />
        <Route path="/services" element={<Services />} />
        <Route path="/installation" element={<Installation />} />
        <Route path="/villes" element={<Cities />} />
        <Route path="/universites" element={<Universities />} />
        <Route path="/qui-sommes-nous" element={<About />} />
        <Route path="/partenaires" element={<Partenaires />} />
        <Route path="/contact" element={<Contact />} /> {/* Ajouté */}
        <Route path="/visa-preparation" element={<VisaPreparation />} /> {/* Ajouté */}
        <Route path="/attestation" element={<AttestationLogement />} /> {/* Ajouté */}
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="/dashboard" element={<ProtectedRoute roles={['student']}><StudentDashboard /></ProtectedRoute>} />
        <Route path="/proprietaire" element={<ProtectedRoute roles={['owner']}><OwnerDashboard /></ProtectedRoute>} />
        <Route path="/admin" element={<ProtectedRoute roles={['admin']}><AdminDashboard /></ProtectedRoute>} />
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}