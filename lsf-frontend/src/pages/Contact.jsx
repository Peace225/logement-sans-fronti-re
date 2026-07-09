import MainLayout from '../../layouts/MainLayout'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({name:'', email:'', subject:'', message:''})

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: brancher sur Supabase ou EmailJS
    alert(`Merci ${form.name}, ton message est envoyé à l'équipe LSF !`)
    setForm({name:'', email:'', subject:'', message:''})
  }

  return (
    <MainLayout>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold">Contactez-nous</h1>
          <p className="mt-3 opacity-90 max-w-2xl">Une question sur un logement, un visa, ou l'installation ? L'équipe de Khady DIABATE vous répond en moins de 24h.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Formulaire */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-2xl shadow-sm border">
              <h2 className="text-2xl font-bold text-navy mb-6">Envoyez-nous un message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input 
                    required
                    value={form.name}
                    onChange={e=>setForm({...form,name:e.target.value})}
                    placeholder="Nom complet" 
                    className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange"
                  />
                  <input 
                    required type="email"
                    value={form.email}
                    onChange={e=>setForm({...form,email:e.target.value})}
                    placeholder="Email" 
                    className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange"
                  />
                </div>
                <select 
                  value={form.subject}
                  onChange={e=>setForm({...form,subject:e.target.value})}
                  className="w-full border rounded-xl p-3"
                >
                  <option value="">Choisissez un sujet</option>
                  <option>Logement France</option>
                  <option>Logement Belgique</option>
                  <option>Logement Espagne</option>
                  <option>Garantie locative</option>
                  <option>Pack installation</option>
                  <option>Partenariat université</option>
                </select>
                <textarea 
                  required rows="5"
                  value={form.message}
                  onChange={e=>setForm({...form,message:e.target.value})}
                  placeholder="Votre message..." 
                  className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange"
                />
                <button type="submit" className="w-full bg-orange text-white py-3 rounded-xl font-semibold hover:bg-orange/90">
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>

          {/* Coordonnées */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border">
              <h3 className="font-bold text-lg mb-4">Parler directement à Khady</h3>
              <a 
                href="https://wa.me/33600000000?text=Bonjour%20Khady,%20je%20viens%20de%20LSF" 
                target="_blank"
                className="flex items-center gap-3 bg-green-500 text-white p-3 rounded-xl hover:bg-green-600"
              >
                <MessageCircle size={20}/> WhatsApp direct
              </a>
              <p className="text-xs text-gray-500 mt-2">Réponse moyenne : 2h</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="text-orange mt-1" size={20}/>
                <div>
                  <p className="font-semibold">Téléphone</p>
                  <p className="text-gray-600">+33 6 00 00 00 00</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="text-orange mt-1" size={20}/>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600">contact@logementsansfrontieres.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-orange mt-1" size={20}/>
                <div>
                  <p className="font-semibold">Bureaux</p>
                  <p className="text-gray-600">Paris • Abidjan • Casablanca</p>
                </div>
              </div>
            </div>

            <div className="bg-orange/5 p-6 rounded-2xl border border-orange/20">
              <h4 className="font-bold mb-2">Horaires</h4>
              <p className="text-sm text-gray-700">Lun-Ven : 9h-19h (Paris)<br/>Sam : 10h-16h<br/>Urgence logement : 7j/7 sur WhatsApp</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="h-80 bg-gray-100 rounded-2xl grid place-items-center text-gray-500">
          Carte interactive – Sièges LSF (à brancher avec Leaflet)
        </div>
      </section>
    </MainLayout>
  )
}