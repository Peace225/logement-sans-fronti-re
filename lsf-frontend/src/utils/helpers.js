import { GARANT_NAME } from './constants'

// Helpers divers
export const generateBookingRef = () => {
  return `LSF-${Date.now().toString(36).toUpperCase()}`
}

export const getDistanceToUniversity = (property, university = 'Sorbonne') => {
  // Simulation - à remplacer par API Google Maps
  const distances = { 'Paris': 450, 'Lyon': 300, 'Lille': 500, 'Bruxelles': 600, 'Madrid': 800 }
  return distances[property.city] || 500
}

export const getGarantCertificate = (student) => {
  return {
    garant: GARANT_NAME,
    company: 'LM Global Education',
    studentName: student.name,
    valid: true,
    message: `Garantie acceptée par 100% des propriétaires partenaires LSF`
  }
}

export const calculateTotalFirstMonth = (rent, packPrice, deposit = 1) => {
  return rent * deposit + packPrice + 50 // 50€ frais dossier
}

export const slugify = (text) => {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
}