import { createClient } from '@supabase/supabase-js'

// TODO: remplace par tes vraies clés Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseKey)

// Helpers LSF
export const db = {
  // Properties
  getProperties: async (filters = {}) => {
    let query = supabase.from('properties').select('*').eq('verified', true)
    if (filters.city) query = query.ilike('city', `%${filters.city}%`)
    if (filters.maxPrice) query = query.lte('price', filters.maxPrice)
    return query
  },

  // Bookings
  createBooking: async (booking) => {
    return supabase.from('bookings').insert({
     ...booking,
      garant_name: 'Khady DIABATE',
      status: 'confirmed',
      created_at: new Date()
    })
  },

  // Students
  getStudentProfile: async (userId) => {
    return supabase.from('students').select('*').eq('user_id', userId).single()
  }
}