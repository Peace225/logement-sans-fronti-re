import { Shield, Home, Plane, CreditCard } from 'lucide-react'
const icons = { garantie: Shield, assurance: Home, aeroport: Plane, banque: CreditCard }

export default function ServiceCard({s = {code:'garantie', name:'Garantie locative'}}) {
  const Icon = icons[s.code] || Shield
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <Icon className="text-orange mb-3" />
      <h3 className="font-semibold">{s.name}</h3>
      <p className="text-sm text-gray-600 mt-1">Pour les étudiants sans garant en Europe</p>
    </div>
  )
}