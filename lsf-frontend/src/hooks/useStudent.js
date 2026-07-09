import { useState, useEffect } from 'react'

export function useStudent() {
  const [student, setStudent] = useState(null)
  const [installation, setInstallation] = useState(null)

  useEffect(() => {
    // TODO: fetch from Supabase
    setStudent({
      name: 'Aminata K.',
      email: 'aminata@test.com',
      university: 'Paris 1 Panthéon-Sorbonne',
      country: "Côte d'Ivoire",
      pack: 'Confort',
      propertyId: 1
    })

    setInstallation({
      progress: 62,
      currentStep: 3,
      steps: ['Paiement', 'Accueil aéroport', 'Clés', 'Assurance', 'Banque', 'CAF']
    })
  }, [])

  return { student, installation }
}