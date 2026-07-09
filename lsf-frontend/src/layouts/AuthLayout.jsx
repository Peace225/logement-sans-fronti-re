import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'

export default function AuthLayout({ children, title }) {
  return (
    <div className="min-h-screen grid md:grid-cols-2">
      {/* Partie visuelle LSF */}
      <div className="hidden md:flex bg-navy text-white flex-col justify-between p-12">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="bg-orange p-2 rounded-lg"><Home size={20}/></div>
          LSF
        </Link>
        <div>
          <h1 className="text-4xl font-bold leading-tight">Bienvenue sur Logement Sans Frontières</h1>
          <p className="mt-4 opacity-80">La plateforme de Khady DIABATE pour les étudiants internationaux.</p>
        </div>
        <p className="text-sm opacity-60">© 2026 LM Global Education</p>
      </div>

      {/* Formulaire */}
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6">{title}</h2>
          {children}
        </div>
      </div>
    </div>
  )
}