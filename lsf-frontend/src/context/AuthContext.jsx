import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem('lsf_user')
    if (stored) setUser(JSON.parse(stored))
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    // TODO: supabase.auth.signInWithPassword
    const role = email.includes('admin') ? 'admin' : email.includes('owner') || email.includes('proprio') ? 'owner' : 'student'
    
    const newUser = {
      id: Date.now(),
      email,
      name: role === 'owner' ? 'Jean Dupont' : 'Aminata Kouamé',
      role,
      country: "Côte d'Ivoire",
      avatar: role === 'owner' ? 'JD' : 'AK'
    }
    
    localStorage.setItem('lsf_user', JSON.stringify(newUser))
    setUser(newUser)
    return newUser
  }

  const register = async (data, type) => {
    const newUser = { ...data, id: Date.now(), role: type }
    localStorage.setItem('lsf_user', JSON.stringify(newUser))
    setUser(newUser)
    return newUser
  }

  const logout = () => {
    localStorage.removeItem('lsf_user')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)