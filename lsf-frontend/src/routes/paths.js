// Centralise toutes les routes LSF
export const PATHS = {
  home: '/',
  housing: '/logements',
  property: (id) => `/logement/${id}`,
  services: '/services',
  installation: '/installation',
  howItWorks: '/comment-ca-marche',
  
  login: '/login',
  register: '/register',
  
  studentDashboard: '/dashboard',
  ownerDashboard: '/proprietaire',
  adminDashboard: '/admin',
  
  // API (pour services)
  api: {
    properties: '/api/properties',
    booking: '/api/booking',
  }
}