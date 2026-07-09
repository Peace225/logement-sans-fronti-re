import { useState, useEffect } from 'react'

export function useOwner() {
  const [properties, setProperties] = useState([])
  const [payments, setPayments] = useState([])

  useEffect(() => {
    // TODO: fetch where owner_id = user.id
    setProperties([
      { id: 1, title: 'Studio Paris 13', rent: 650, tenant: 'Aminata K.', occupied: true },
      { id: 2, title: 'Chambre Lyon 7', rent: 420, tenant: 'Moussa D.', occupied: true },
      { id: 3, title: 'T1 Bruxelles', rent: 580, tenant: 'Fatou S.', occupied: true },
    ])

    setPayments([
      { month: 'Juin 2026', amount: 1650, status: 'payé', date: '05/06' },
      { month: 'Mai 2026', amount: 1650, status: 'payé', date: '05/05' },
    ])
  }, [])

  const addProperty = async (data) => {
    console.log('Add property:', data)
    // TODO: supabase.from('properties').insert()
    return { success: true }
  }

  return { properties, payments, addProperty }
}