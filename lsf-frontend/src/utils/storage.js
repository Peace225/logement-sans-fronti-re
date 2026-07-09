// LocalStorage helpers
export const storage = {
  get: (key, defaultValue = null) => {
    try {
      const item = localStorage.getItem(`lsf_${key}`)
      return item ? JSON.parse(item) : defaultValue
    } catch {
      return defaultValue
    }
  },

  set: (key, value) => {
    localStorage.setItem(`lsf_${key}`, JSON.stringify(value))
  },

  remove: (key) => {
    localStorage.removeItem(`lsf_${key}`)
  },

  // Spécifiques LSF
  saveSearch: (filters) => storage.set('last_search', filters),
  getSearch: () => storage.get('last_search', { city: '', maxPrice: 1000 }),
  
  saveFavorites: (ids) => storage.set('favorites', ids),
  getFavorites: () => storage.get('favorites', []),
}