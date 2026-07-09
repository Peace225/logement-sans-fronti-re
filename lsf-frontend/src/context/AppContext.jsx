import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export function AppProvider({ children }) {
  const [favorites, setFavorites] = useState([])
  const [searchFilters, setSearchFilters] = useState({ city: '', maxPrice: 1000 })

  const toggleFavorite = (propertyId) => {
    setFavorites(prev => 
      prev.includes(propertyId) 
        ? prev.filter(id => id !== propertyId)
        : [...prev, propertyId]
    )
  }

  const updateFilters = (newFilters) => {
    setSearchFilters(prev => ({ ...prev, ...newFilters }))
  }

  return (
    <AppContext.Provider value={{ 
      favorites, 
      toggleFavorite,
      searchFilters,
      updateFilters,
      isFavorite: (id) => favorites.includes(id)
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)