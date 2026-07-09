// Formatage prix, dates, etc.
export const formatPrice = (price) => {
  return new Intl.NumberFormat('fr-FR', { 
    style: 'currency', 
    currency: 'EUR',
    maximumFractionDigits: 0 
  }).format(price)
}

export const formatDate = (date) => {
  return new Intl.DateTimeFormat('fr-FR', { 
    day: '2-digit', 
    month: 'long', 
    year: 'numeric' 
  }).format(new Date(date))
}

export const formatPhone = (phone) => {
  // +22507000000 -> +225 07 00 00 00
  return phone.replace(/(\+\d{3})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5')
}

export const getInitials = (name) => {
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0,2)
}