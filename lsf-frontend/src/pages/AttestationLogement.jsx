import { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { FileText, UploadCloud, CheckCircle, Info, User, BookOpen, Home } from 'lucide-react';

export default function AttestationLogement() {
  return (
    <MainLayout>
      {/* HERO SECTION */}
      <section className="bg-[#0A192F] pt-24 pb-20 px-6 text-center text-white">
        <h1 className="text-4xl text-orange md:text-5xl font-black mb-6">Attestation de logement</h1>
        <p className="text-white/60 max-w-2xl mx-auto font-light text-lg">
          Obtenez votre attestation de logement en quelques minutes pour vos démarches administratives, visa ou inscription universitaire.
        </p>
      </section>

      {/* FORM SECTION */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
          
          {/* Informations de l'étudiant */}
          <div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <User className="text-[#F25C05]" size={24} />
              <h2 className="text-xl font-bold text-[#0A192F]">Informations de l'étudiant</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[ {label: 'Nom', placeholder: 'Nom'}, {label: 'Prénom(s)', placeholder: 'Prénoms'}, 
                 {label: 'Date de naissance', type: 'date'}, {label: 'Nationalité', placeholder: 'Française...'},
                 {label: 'Numéro de passeport', placeholder: 'XX000000'}, {label: 'Adresse e-mail', type: 'email'},
                 {label: 'Téléphone', type: 'tel'}].map((field, i) => (
                <div key={i} className="space-y-2">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">{field.label}</label>
                  <input type={field.type || 'text'} className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#F25C05]/20 focus:border-[#F25C05] transition-all" placeholder={field.placeholder} />
                </div>
              ))}
            </div>
          </div>

          {/* Informations Académiques */}
          <div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="text-[#F25C05]" size={24} />
              <h2 className="text-xl font-bold text-[#0A192F]">Informations académiques</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {['Établissement d\'accueil', 'Ville d\'études', 'Formation', 'Date de rentrée'].map((label, i) => (
                <div key={i} className="space-y-2">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">{label}</label>
                  <input type={label === 'Date de rentrée' ? 'date' : 'text'} className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#F25C05]/20 focus:border-[#F25C05] transition-all" />
                </div>
              ))}
            </div>
          </div>

          {/* Informations Logement */}
          <div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <Home className="text-[#F25C05]" size={24} />
              <h2 className="text-xl font-bold text-[#0A192F]">Informations sur le logement</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Type de logement</label>
                <select className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#F25C05]/20 focus:border-[#F25C05] transition-all">
                  <option>Résidence étudiante</option>
                  <option>Studio</option>
                  <option>Appartement</option>
                  <option>Colocation</option>
                  <option>Chambre chez l'habitant</option>
                </select>
              </div>
              <div className="space-y-2"><label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Ville du logement</label><input className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3" /></div>
              <div className="space-y-2"><label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Date d'entrée souhaitée</label><input type="date" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3" /></div>
              <div className="space-y-2"><label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Durée du séjour</label><input className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3" /></div>
            </div>
          </div>

          {/* Documents */}
          <div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <UploadCloud className="text-[#F25C05]" size={24} />
              <h2 className="text-xl font-bold text-[#0A192F]">Documents à joindre</h2>
            </div>
            <div className="border-2 border-dashed border-zinc-200 rounded-2xl p-8 text-center hover:border-[#F25C05] transition-colors cursor-pointer">
              <p className="text-sm text-zinc-500 font-light">Glissez vos fichiers ici (Passeport, Admission, Justificatifs...)</p>
            </div>
          </div>

          {/* Validation */}
          <div className="space-y-4">
            <label className="flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5 rounded border-zinc-300 text-[#F25C05] focus:ring-[#F25C05]" />
              <span className="text-sm text-zinc-600">Je certifie que les informations fournies sont exactes.</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5 rounded border-zinc-300 text-[#F25C05] focus:ring-[#F25C05]" />
              <span className="text-sm text-zinc-600">J'accepte que MON ADRESSE ÉTUDIANTE traite mes données.</span>
            </label>
          </div>

          <button className="w-full bg-[#F25C05] hover:bg-[#e05504] text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-[#F25C05]/20">
            GÉNÉRER MON ATTESTATION
          </button>
        </form>

        
      </section>
    </MainLayout>
  );
}