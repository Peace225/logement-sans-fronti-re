import { Navigate, Outlet } from 'react-router-dom'
import { useAuthContext } from '../context'

export const RequireAuth = () => {
  const { user, loading } = useAuthContext()
  if (loading) return <div className="p-8">Chargement LSF...</div>
  return user ? <Outlet /> : <Navigate to="/login" />
}

export const RequireRole = ({ roles }) => {
  const { user } = useAuthContext()
  return roles.includes(user?.role) ? <Outlet /> : <Navigate to="/" />
}

export const RedirectIfAuth = ({ children }) => {
  const { user } = useAuthContext()
  if (user) {
    const redirect = user.role === 'admin' ? '/admin' : user.role === 'owner' ? '/proprietaire' : '/dashboard'
    return <Navigate to={redirect} />
  }
  return children
}