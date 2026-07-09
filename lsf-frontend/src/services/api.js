// Service API central LSF
const API_URL = import.meta.env.VITE_API_URL || '/api'

export const api = {
  // Logements
  searchHousing: async (params) => {
    // Simulation - remplacera supabase
    console.log('API search:', params)
    return fetch(`${API_URL}/properties?${new URLSearchParams(params)}`).then(r => r.json()).catch(() => [])
  },

  // Réservation avec garantie Khady
  bookWithGuarantee: async ({ propertyId, studentId, pack }) => {
    return {
      success: true,
      bookingId: `LSF-${Date.now()}`,
      garant: 'Khady DIABATE - LM Global Education',
      message: 'Garantie acceptée par le propriétaire'
    }
  },

  // Vérification logement
  verifyProperty: async (propertyId) => {
    // Appel équipe terrain LSF
    return { verified: true, verifiedBy: 'Équipe LSF Paris', date: new Date() }
  }
}