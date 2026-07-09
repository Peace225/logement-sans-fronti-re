import { createContext, useContext, useState } from 'react'

const BookingContext = createContext()

export function BookingProvider({ children }) {
  const [selectedProperty, setSelectedProperty] = useState(null)
  const [selectedPack, setSelectedPack] = useState('Confort')
  const [bookingData, setBookingData] = useState({})

  const startBooking = (property) => {
    setSelectedProperty(property)
    setBookingData({ propertyId: property.id, startDate: new Date().toISOString() })
  }

  const confirmBooking = async () => {
    // TODO: insert supabase
    const booking = {
      id: 'BK' + Date.now(),
      ...bookingData,
      pack: selectedPack,
      garant: 'Khady DIABATE',
      status: 'confirmée',
      createdAt: new Date()
    }
    console.log('Booking confirmed:', booking)
    return booking
  }

  const clearBooking = () => {
    setSelectedProperty(null)
    setBookingData({})
  }

  return (
    <BookingContext.Provider value={{ 
      selectedProperty, 
      selectedPack, 
      setSelectedPack,
      bookingData,
      startBooking, 
      confirmBooking,
      clearBooking
    }}>
      {children}
    </BookingContext.Provider>
  )
}

export const useBookingContext = () => useContext(BookingContext)