import { Link, useLocation } from 'react-router-dom'
import { Home, Calendar, CreditCard, MessageSquare, User } from 'lucide-react'

const nav = [
  {to:'/dashboard', label:'Tableau de bord', icon:Home},
  {to:'/dashboard/reservations', label:'Réservations', icon:Calendar},
  {to:'/dashboard/paiements', label:'Paiements', icon:CreditCard},
  {to:'/dashboard/messages', label:'Messagerie', icon:MessageSquare},
  {to:'/dashboard/profil', label:'Profil', icon:User},
]

export default function DashboardLayout({ children }) {
  const {pathname} = useLocation()
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className="w-64 bg-navy text-white hidden md:block">
        <div className="p-6 font-bold text-xl">LSF Dashboard</div>
        <nav className="px-3 space-y-1">
          {nav.map(item=>{
            const Icon = item.icon
            const active = pathname===item.to
            return (
              <Link key={item.to} to={item.to} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg ${active ? 'bg-orange' : 'hover:bg-white/10'}`}>
                <Icon size={18}/>{item.label}
              </Link>
            )
          })}
        </nav>
      </aside>
      <div className="flex-1">
        <header className="h-16 bg-white border-b flex items-center px-6 justify-between">
          <h1 className="font-semibold">Espace Étudiant</h1>
          <div className="w-9 h-9 bg-orange rounded-full grid place-items-center text-white font-bold">K</div>
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}