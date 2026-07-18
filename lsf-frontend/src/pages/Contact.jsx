import { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { Mail, Phone, MapPin, MessageSquare, Send, Sparkles } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    subject: 'Recherche de logement', 
    message: '' 
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données à envoyer :", formData);
    // Logique d'envoi à implémenter ici
  };

  return (
    <MainLayout>
      {/* HERO SECTION - Premium avec effet de lumière */}
      <section className="relative pt-32 pb-24 px-6 text-center overflow-hidden bg-[#0A192F]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#F25C05] opacity-10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6 text-[#F25C05] uppercase tracking-[0.2em] text-[10px] font-bold">
            <Sparkles size={14} />
            Support & Accompagnement
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
            PARLONS DE VOTRE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F25C05] to-[#FF9D66]">PROJET</span>
          </h1>
          <p className="text-zinc-100 max-w-xl mx-auto font-light text-lg leading-relaxed">
            Une question sur votre logement, votre installation ou nos services ? Vous souhaitez devenir partenaire ?Notre équipe d'experts est à votre écoute pour vous accompagner.
          </p>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10">
          
          {/* COLONNE GAUCHE: INFOS PREMIUM */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white p-8 rounded-[2.5rem] border border-zinc-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden h-full">
              <h2 className="text-2xl font-black text-[#0A192F] mb-8 tracking-tight">Nos implantations</h2>
              
              <div className="space-y-8">
                {/* Bureaux */}
                <div className="flex gap-4 group">
                  <div className="bg-[#FFF5F0] text-[#F25C05] p-4 rounded-2xl h-fit group-hover:bg-[#F25C05] group-hover:text-white transition-colors shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div className="space-y-6 w-full mt-1">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <MapPin size={16} className="text-[#F25C05]" />
                        <h4 className="font-bold text-[#0A192F]">Paris, France</h4>
                      </div>
                      <p className="text-zinc-500 text-sm leading-relaxed ml-6">
                        78, avenue des Champs-Elysées, 75008 Paris
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <MapPin size={16} className="text-[#F25C05]" />
                        <h4 className="font-bold text-[#0A192F]">Abidjan, Côte d'Ivoire</h4>
                      </div>
                      <p className="text-zinc-500 text-sm leading-relaxed ml-6">
                        Cité Symphonia, Abidjan
                      </p>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-zinc-100" />

                {/* Contact & Tel */}
<div className="space-y-6">
  <div className="flex items-start gap-4">
    <div className="bg-zinc-50 text-zinc-400 p-3 rounded-xl shrink-0">
      <Mail size={20} />
    </div>
    <div>
      <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Email</h4>
      <p className="font-semibold text-[#0A192F] text-sm break-all">contact@lsf-platform.com</p>
    </div>
  </div>

  <div className="flex items-start gap-4">
    <div className="bg-zinc-50 text-zinc-400 p-3 rounded-xl shrink-0">
      <Phone size={20} />
    </div>
    <div>
      <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Téléphone</h4>
      <p className="font-semibold text-[#0A192F] text-sm whitespace-nowrap">+225 00 00 00 00</p>
    </div>
  </div>
</div>
              </div>
            </div>
          </div>

          {/* COLONNE DROITE: FORMULAIRE PREMIUM */}
          <div className="lg:col-span-8 bg-white p-8 md:p-12 rounded-[2.5rem] border border-zinc-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
            <div className="flex items-center gap-3 mb-10">
              <div className="bg-[#FFF5F0] p-3 rounded-xl">
                <MessageSquare className="text-[#F25C05]" size={24} />
              </div>
              <h2 className="text-3xl font-black text-[#0A192F] tracking-tight">Écrivez-nous</h2>
            </div>

            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2.5">
                  <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest ml-1">Nom complet</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#FBFBFB] border border-zinc-200 rounded-2xl px-5 py-4 text-[#0A192F] placeholder-zinc-400 focus:outline-none focus:ring-4 focus:ring-[#F25C05]/10 focus:border-[#F25C05] transition-all" 
                    placeholder="Ex: Jean Dupont" 
                  />
                </div>
                <div className="space-y-2.5">
                  <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest ml-1">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#FBFBFB] border border-zinc-200 rounded-2xl px-5 py-4 text-[#0A192F] placeholder-zinc-400 focus:outline-none focus:ring-4 focus:ring-[#F25C05]/10 focus:border-[#F25C05] transition-all" 
                    placeholder="Ex: jean@exemple.com" 
                  />
                </div>
              </div>

              <div className="space-y-2.5">
                <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest ml-1">Sujet de votre demande</label>
                <select 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-[#FBFBFB] border border-zinc-200 rounded-2xl px-5 py-4 text-[#0A192F] focus:outline-none focus:ring-4 focus:ring-[#F25C05]/10 focus:border-[#F25C05] transition-all appearance-none cursor-pointer"
                >
                  <option>Recherche de logement</option>
                  <option>Attestation d'hébergement</option>
                  <option>Garantie & Caution</option>
                  <option>Accompagnement à l'installation</option>
                  <option>Demande de partenariat</option>
                  <option>Assistance</option>
                  <option>Autre demande</option>
                </select>
              </div>

              <div className="space-y-2.5">
                <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest ml-1">Votre message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5} 
                  className="w-full bg-[#FBFBFB] border border-zinc-200 rounded-2xl px-5 py-4 text-[#0A192F] placeholder-zinc-400 focus:outline-none focus:ring-4 focus:ring-[#F25C05]/10 focus:border-[#F25C05] transition-all resize-none" 
                  placeholder="Comment pouvons-nous vous accompagner ?" 
                />
              </div>

              <div className="pt-2">
                <button 
                  type="submit"
                  className="w-full md:w-auto bg-[#F25C05] hover:bg-[#E05204] text-white px-10 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all hover:shadow-[0_10px_20px_rgba(242,92,5,0.3)] hover:-translate-y-0.5"
                >
                  <Send size={18} />
                  Envoyer le message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}