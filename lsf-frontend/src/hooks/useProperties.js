import { useState, useEffect } from 'react'

export function useProperties(filters = {}) {
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // TODO: fetch from Supabase
    const demo = [
      { id: 1, title: 'Studio Paris 13 - Tolbiac', city: 'Paris', price: 650, size: 22, distance: 450, verified: true, image: 1 },
      { id: 2, title: 'Chambre Lyon 7', city: 'Lyon', price: 420, size: 15, distance: 300, verified: true, image: 2 },
      { id: 3, title: 'T1 Bruxelles ULB', city: 'Bruxelles', price: 580, size: 28, distance: 600, verified: true, image: 3 },
      { id: 4, title: 'Studio Madrid Centro', city: 'Madrid', price: 500, size: 20, distance: 800, verified: false, image: 4 },
    ]
    
    let filtered = demo
    if (filters.city) filtered = filtered.filter(p => p.city.toLowerCase().includes(filters.city.toLowerCase()))
    if (filters.maxPrice) filtered = filtered.filter(p => p.price <= filters.maxPrice)
    
    setTimeout(() => {
      setProperties(filtered)
      setLoading(false)
    }, 500)
  }, [filters.city, filters.maxPrice])

  return { properties, loading }
}