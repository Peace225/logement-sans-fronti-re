// Validation formulaires LSF
export const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export const validatePhone = (phone) => {
  // Accepte +225, +33, etc.
  return /^\+?\d{8,15}$/.test(phone.replace(/\s/g, ''))
}

export const validateStudent = (data) => {
  const errors = {}
  if (!data.name || data.name.length < 2) errors.name = 'Nom requis'
  if (!validateEmail(data.email)) errors.email = 'Email invalide'
  if (!validatePhone(data.phone)) errors.phone = 'Téléphone WhatsApp requis'
  if (!data.university) errors.university = 'Université requise'
  if (!data.country) errors.country = 'Pays d\'origine requis'
  return { valid: Object.keys(errors).length === 0, errors }
}

export const validateProperty = (data) => {
  const errors = {}
  if (!data.title) errors.title = 'Titre requis'
  if (!data.price || data.price < 100) errors.price = 'Prix invalide'
  if (!data.city) errors.city = 'Ville requise'
  return { valid: Object.keys(errors).length === 0, errors }
}