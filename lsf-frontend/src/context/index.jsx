import { AuthProvider } from './AuthContext'
import { BookingProvider } from './BookingContext'
import { NotificationProvider } from './NotificationContext'
import { AppProvider } from './AppContext'

export function Providers({ children }) {
  return (
    <AuthProvider>
      <NotificationProvider>
        <AppProvider>
          <BookingProvider>
            {children}
          </BookingProvider>
        </AppProvider>
      </NotificationProvider>
    </AuthProvider>
  )
}

// Exports individuels
export { useAuthContext } from './AuthContext'
export { useBookingContext } from './BookingContext'
export { useNotification } from './NotificationContext'
export { useApp } from './AppContext'