import { useState } from 'react'

export function useBooking() {
  const [loading, setLoading] = useState(false)

  const createBooking = async (propertyId, pack) => {
    setLoading(true)
    // TODO: insert into Supabase bookings
    console.log('Booking:', { propertyId, pack, garant: 'Khady DIABATE' })
    
    await new Promise(r => setTimeout(r, 1000))
    setLoading(false)
    
    return { 
      success: true, 
      bookingId: 'BK-' + Date.now(),
      message: 'Réservation confirmée avec garantie LSF'
    }
  }

  return { createBooking, loading }
}