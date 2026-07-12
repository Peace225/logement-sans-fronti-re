import { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { Mail, Phone, MapPin, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  return (
    <MainLayout>
      {/* HERO SECTION */}
      <section className="bg-[#0A192F] pt-24 pb-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Contactez-nous</h1>
        <p className="text-white/60 max-w-xl mx-auto font-light text-lg">
          Une question sur votre installation, une demande de partenariat ou besoin d'assistance ? 
          Notre équipe est à votre écoute.
        </p>
      </section>

      {/* CONTACT GRID */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* COLONNE GAUCHE: INFOS */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm">
              <h2 className="text-xl font-bold text-[#0A192F] mb-6">Nos bureaux</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-50 text-[#F25C05] p-3 rounded-xl"><MapPin size={20} /></div>
                  <div>
                    <h4 className="font-bold text-zinc-900">Abidjan</h4>
                    <p className="text-zinc-500 text-sm">Plateau, Abidjan<br />Côte d'Ivoire</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-50 text-[#F25C05] p-3 rounded-xl"><Mail size={20} /></div>
                  <div>
                    <h4 className="font-bold text-zinc-900">Email</h4>
                    <p className="text-zinc-500 text-sm">contact@lsf-platform.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-50 text-[#F25C05] p-3 rounded-xl"><Phone size={20} /></div>
                  <div>
                    <h4 className="font-bold text-zinc-900">Téléphone</h4>
                    <p className="text-zinc-500 text-sm">+225 00 00 00 00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* COLONNE DROITE: FORMULAIRE */}
          <div className="lg:col-span-8 bg-white p-8 md:p-10 rounded-3xl border border-zinc-100 shadow-xl shadow-zinc-100/50">
            <div className="flex items-center gap-3 mb-8">
              <MessageSquare className="text-[#F25C05]" size={24} />
              <h2 className="text-2xl font-bold text-[#0A192F]">Envoyez-nous un message</h2>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Nom complet</label>
                  <input type="text" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F25C05]/20 focus:border-[#F25C05] transition-all" placeholder="Jean Dupont" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Email</label>
                  <input type="email" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F25C05]/20 focus:border-[#F25C05] transition-all" placeholder="jean@exemple.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Sujet</label>
                <select className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F25C05]/20 focus:border-[#F25C05] transition-all">
                  <option>Accompagnement installation</option>
                  <option>Logement</option>
                  <option>Partenariat</option>
                  <option>Autre</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Message</label>
                <textarea rows={5} className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F25C05]/20 focus:border-[#F25C05] transition-all" placeholder="Comment pouvons-nous vous aider ?" />
              </div>

              <button className="w-full md:w-auto bg-[#0A192F] hover:bg-[#1e3a6e] text-white px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all">
                <Send size={18} />
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}