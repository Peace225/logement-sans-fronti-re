import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { User, Building2, Mail, Lock, Phone } from 'lucide-react'

export default function Register() {
  const [type, setType] = useState('student')
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '' })
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Supabase auth.signUp
    console.log('Register', type, form)
    alert(`Compte ${type} créé ! Bienvenue chez LSF`)
    navigate(type === 'student' ? '/dashboard/etudiant' : '/dashboard/proprietaire')
  }

  return (
    <div className="min-h-screen bg-gray-50 grid lg:grid-cols-2">
      {/* Left - Form */}
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <Link to="/" className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-navy rounded-lg grid place-items-center text-white font-bold">LSF</div>
            <span className="font-bold text-xl text-navy">Logement Sans Frontières</span>
          </Link>

          <h1 className="text-3xl font-bold text-navy mb-2">Créer un compte</h1>
          <p className="text-gray-600 mb-6">Rejoins 12 000 étudiants accompagnés par Khady</p>

          {/* Type selector */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button
              type="button"
              onClick={() => setType('student')}
              className={`p-4 border-2 rounded-xl text-left transition ${
                type === 'student' ? 'border-orange bg-orange/5' : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <User className={`mb-1 ${type === 'student' ? 'text-orange' : 'text-gray-500'}`} size={20}/>
              <p className="font-semibold">Étudiant</p>
              <p className="text-xs text-gray-500">Chercher un logement</p>
            </button>
            <button
              type="button"
              onClick={() => setType('owner')}
              className={`p-4 border-2 rounded-xl text-left transition ${
                type === 'owner' ? 'border-orange bg-orange/5' : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <Building2 className={`mb-1 ${type === 'owner' ? 'text-orange' : 'text-gray-500'}`} size={20}/>
              <p className="font-semibold">Propriétaire</p>
              <p className="text-xs text-gray-500">Louer mon bien</p>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Nom complet</label>
              <div className="relative mt-1">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18}/>
                <input
                  required
                  value={form.name}
                  onChange={e => setForm({...form, name: e.target.value})}
                  className="w-full pl-10 pr-3 py-2.5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange"
                  placeholder="Khady DIABATE"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <div className="relative mt-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18}/>
                <input
                  required type="email"
                  value={form.email}
                  onChange={e => setForm({...form, email: e.target.value})}
                  className="w-full pl-10 pr-3 py-2.5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange"
                  placeholder="toi@exemple.com"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Téléphone WhatsApp</label>
              <div className="relative mt-1">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18}/>
                <input
                  required
                  value={form.phone}
                  onChange={e => setForm({...form, phone: e.target.value})}
                  className="w-full pl-10 pr-3 py-2.5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange"
                  placeholder="+225 07 00 00 00"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Mot de passe</label>
              <div className="relative mt-1">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18}/>
                <input
                  required type="password"
                  value={form.password}
                  onChange={e => setForm({...form, password: e.target.value})}
                  className="w-full pl-10 pr-3 py-2.5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button type="submit" className="w-full bg-orange text-white py-3 rounded-xl font-semibold hover:bg-orange/90 mt-2">
              Créer mon compte {type === 'student' ? 'étudiant' : 'propriétaire'}
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Déjà un compte ? <Link to="/login" className="text-orange font-semibold hover:underline">Se connecter</Link>
          </p>

          <p className="text-xs text-gray-500 text-center mt-8">
            En créant un compte, tu acceptes les CGU de LSF et la garantie Khady DIABATE.
          </p>
        </div>
      </div>

      {/* Right - Image */}
      <div className="hidden lg:block relative bg-navy">
        <div className="absolute inset-0 bg-gradient-to-br from-navy to-orange/80"></div>
        <div className="relative h-full flex items-center justify-center p-12 text-white">
          <div className="max-w-md">
            <h2 className="text-4xl font-bold mb-4">12 000 étudiants nous font confiance</h2>
            <p className="text-lg opacity-90 mb-6">"LSF m'a trouvé un logement à Paris en 48h sans garant. Khady s'est occupée de tout." — Aminata, Côte d'Ivoire</p>
            <div className="flex gap-4">
              <div className="bg-white/10 backdrop-blur p-4 rounded-xl">
                <p className="text-2xl font-bold">98%</p>
                <p className="text-sm opacity-80">logés</p>
              </div>
              <div className="bg-white/10 backdrop-blur p-4 rounded-xl">
                <p className="text-2xl font-bold">48h</p>
                <p className="text-sm opacity-80">délai moyen</p>
              </div>
              <div className="bg-white/10 backdrop-blur p-4 rounded-xl">
                <p className="text-2xl font-bold">5</p>
                <p className="text-sm opacity-80">pays</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}