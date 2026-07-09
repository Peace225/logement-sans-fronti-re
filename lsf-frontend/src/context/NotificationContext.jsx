import { createContext, useContext, useState } from 'react'

const NotificationContext = createContext()

export function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'success', message: 'Bienvenue chez LSF !', read: false },
    { id: 2, type: 'warning', message: 'Finalise ton assurance avant le 25 août', read: false },
  ])

  const addNotification = (message, type = 'info') => {
    const notif = { id: Date.now(), message, type, read: false, time: new Date() }
    setNotifications(prev => [notif, ...prev])
    // Auto remove after 5s
    setTimeout(() => removeNotification(notif.id), 5000)
  }

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id))
  }

  const markAsRead = (id) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n))
  }

  return (
    <NotificationContext.Provider value={{ notifications, addNotification, removeNotification, markAsRead }}>
      {children}
      {/* Toast container */}
      <div className="fixed bottom-4 right-4 z-50 space-y-2">
        {notifications.filter(n => !n.read).slice(0,3).map(n => (
          <div key={n.id} className={`px-4 py-3 rounded-xl shadow-lg text-white text-sm max-w-sm ${
            n.type === 'success' ? 'bg-green-600' : n.type === 'warning' ? 'bg-orange' : n.type === 'error' ? 'bg-red-600' : 'bg-navy'
          }`}>
            {n.message}
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  )
}

export const useNotification = () => useContext(NotificationContext)