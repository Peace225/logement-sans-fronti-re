import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

// Import des composants
import Navbar from '../components/Navbar';

// Import des pages
import Home from '../pages/Home';
import Housing from '../pages/Housing';
import HousingDetails from '../pages/HousingDetails';
import Services from '../pages/Services';
import Installation from '../pages/Installation';
import Cities from '../pages/Cities';
import Universities from '../pages/Universities';
import About from '../pages/About';
import Login from '../pages/Login';
import Register from '../pages/Register';

// Import des dashboards
import StudentDashboard from '../pages/Dashboard/StudentDashboard';
import OwnerDashboard from '../pages/Dashboard/OwnerDashboard';
import AdminDashboard from '../pages/Dashboard/AdminDashboard';

// Composant de protection des routes
const ProtectedRoute = ({ children, roles }) => {
  const { user, loading } = useAuthContext();
  
  if (loading) return <div className="min-h-screen grid place-items-center">Chargement LSF...</div>;
  if (!user) return <Navigate to="/login" replace />;
  if (roles && !roles.includes(user.role)) return <Navigate to="/" replace />;
  
  return children;
};

export default function AppRoutes() {
  const location = useLocation();
  
  // Liste des chemins où la Navbar ne doit pas apparaître
  const hideNavbarPaths = ['/login', '/register'];
  const shouldShowNavbar = !hideNavbarPaths.includes(location.pathname);

  return (
    <>
      {/* Affichage conditionnel de la Navbar */}
      {shouldShowNavbar && <Navbar />}

      <Routes>
        {/* Routes Publiques */}
        <Route path="/" element={<Home />} />
        <Route path="/logements" element={<Housing />} />
        <Route path="/logement/:id" element={<HousingDetails />} />
        <Route path="/services" element={<Services />} />
        <Route path="/installation" element={<Installation />} />
        <Route path="/villes" element={<Cities />} />
        <Route path="/universites" element={<Universities />} />
        <Route path="/qui-sommes-nous" element={<About />} />
        
        {/* Routes Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Routes Dashboards protégées */}
        <Route path="/dashboard" element={
          <ProtectedRoute roles={['student']}>
            <StudentDashboard />
          </ProtectedRoute>
        } />
        <Route path="/proprietaire" element={
          <ProtectedRoute roles={['owner']}>
            <OwnerDashboard />
          </ProtectedRoute>
        } />
        <Route path="/admin" element={
          <ProtectedRoute roles={['admin']}>
            <AdminDashboard />
          </ProtectedRoute>
        } />
        
        {/* Route par défaut */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}