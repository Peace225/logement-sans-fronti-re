import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'

export default function Login() {
  const [showPass, setShowPass] = useState(false)
  const [form, setForm] = useState({ email: '', password: '' })
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    // TODO: brancher Supabase Auth
    // const { data, error } = await supabase.auth.signInWithPassword(form)
    console.log('Login:', form)
    
    // Simulation rôles
    if (form.email.includes('admin')) navigate('/admin')
    else if (form.email.includes('owner')) navigate('/owner')
    else navigate('/dashboard')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left - Form */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-navy rounded-lg grid place-items-center text-white font-bold">LSF</div>
            <span className="text-2xl font-bold text-navy">Logement Sans Frontières</span>
          </Link>

          <h1 className="text-3xl font-bold text-navy mb-2">Bon retour</h1>
          <p className="text-gray-600 mb-8">Connecte-toi à ton espace étudiant</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1.5 block">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18}/>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={e => setForm({...form, email: e.target.value})}
                  placeholder="toi@universite.fr"
                  className="w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1.5 block">Mot de passe</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18}/>
                <input
                  type={showPass ? 'text' : 'password'}
                  required
                  value={form.password}
                  onChange={e => setForm({...form, password: e.target.value})}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-11 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange"
                />
                <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  {showPass ? <EyeOff size={18}/> : <Eye size={18}/>}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded"/>
                <span>Se souvenir de moi</span>
              </label>
              <Link to="/forgot-password" className="text-orange hover:underline">Mot de passe oublié ?</Link>
            </div>

            <button type="submit" className="w-full bg-orange text-white py-3 rounded-xl font-semibold hover:bg-orange/90 mt-2">
              Se connecter
            </button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t"></div></div>
            <div className="relative flex justify-center"><span className="bg-gray-50 px-3 text-sm text-gray-500">ou</span></div>
          </div>

          <button className="w-full border py-3 rounded-xl font-medium hover:bg-white flex items-center justify-center gap-2">
            <img src="https://www.google.com/favicon.ico" alt="" className="w-4 h-4"/> Continuer avec Google
          </button>

          <p className="text-center text-sm text-gray-600 mt-8">
            Pas encore de compte ? <Link to="/register" className="text-orange font-semibold hover:underline">Créer un compte</Link>
          </p>

          <p className="text-center text-xs text-gray-500 mt-6">
            En te connectant, tu acceptes nos <Link to="/cgv" className="underline">CGV</Link> et la garantie Khady.
          </p>
        </div>
      </div>

      {/* Right - Image */}
      <div className="hidden lg:flex flex-1 bg-navy relative">
        <div className="absolute inset-0 bg-gradient-to-br from-navy to-orange/30"></div>
        <div className="relative z-10 flex flex-col justify-end p-12 text-white">
          <div className="max-w-md">
            <h2 className="text-3xl font-bold mb-3">12 000 étudiants nous font confiance</h2>
            <p className="opacity-90">"LSF m'a trouvé un logement à Paris en 48h sans garant. Khady a tout géré." — Aminata, Côte d'Ivoire</p>
            <div className="flex gap-1 mt-4">
              {[1,2,3,4,5].map(i => <div key={i} className="w-8 h-1 bg-white/30 rounded-full"><div className="w-full h-full bg-white rounded-full"></div></div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}