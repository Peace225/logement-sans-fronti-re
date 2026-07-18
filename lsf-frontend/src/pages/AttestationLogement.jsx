import { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { UploadCloud, Info, User, BookOpen, Home, ArrowRight } from 'lucide-react';

export default function AttestationLogement() {
  return (
    <MainLayout>
      {/* HERO SECTION */}
      <section className="bg-[#0A192F] relative overflow-hidden pt-28 pb-24 px-6 text-center text-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-[#F25C05] opacity-5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-[#F25C05] text-xs font-semibold tracking-wider mb-6 border border-white/10">
            SERVICE LOGEMENT
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 text-white">
            ATTESTATION DE <span className="text-[#F25C05]">LOGEMENT</span>
          </h1>
          <p className="text-zinc-100 max-w-2xl mx-auto font-light text-lg leading-relaxed">
            Obtenez rapidement votre attestation d'hébergement pour vos démarches administratives, consulaires et universitaires.
          </p>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-16 px-6 max-w-4xl mx-auto -mt-10 relative z-20">
        
        {/* TEXTE DESCRIPTIF */}
        <div className="bg-gradient-to-r from-white to-zinc-50 border border-zinc-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 rounded-2xl mb-12 relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#F25C05]"></div>
          <div className="flex items-start gap-4">
            <div className="p-2 bg-[#F25C05]/10 rounded-xl shrink-0 mt-0.5">
              <Info className="text-[#F25C05]" size={22} />
            </div>
            <div>
              <h3 className="text-[#0A192F] font-bold text-lg mb-1.5">INFORMATIONS IMPORTANTES</h3>
              <p className="text-zinc-500 leading-relaxed text-sm">
                L'attestation de logement est un document essentiel pour préparer votre installation dans votre pays d'études. Veillez à renseigner des informations exactes et complètes afin de générer une attestation conforme à votre situation.
              </p>
            </div>
          </div>
        </div>

        <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
          
          {/* Informations de l'étudiant */}
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-zinc-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div className="mb-8 flex items-start gap-4">
              <div className="p-3 bg-zinc-50 rounded-2xl">
                <User className="text-[#F25C05]" size={24} />
              </div>
              <div>
                <h2 className="text-xl font-black text-[#0A192F] mb-1 tracking-wide">INFORMATIONS PERSONNELLES</h2>
                <p className="text-sm text-zinc-500 font-light">
                  Renseignez vos informations telles qu'elles apparaissent sur votre document d'identité officiel.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[ {label: 'Nom', placeholder: 'Ex: Dupont'}, {label: 'Prénom(s)', placeholder: 'Ex: Jean'}, 
                 {label: 'Date de naissance', type: 'date'}, {label: 'Nationalité', placeholder: 'Ex: Ivoirienne'},
                 {label: 'Numéro de passeport', placeholder: 'XX000000'}, {label: 'Adresse e-mail', type: 'email', placeholder: 'jean@exemple.com'},
                 {label: 'Téléphone', type: 'tel', placeholder: '+33 6 00 00 00 00'}].map((field, i) => (
                <div key={i} className="space-y-1.5">
                  <label className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider ml-1">{field.label}</label>
                  <input 
                    type={field.type || 'text'} 
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3.5 text-sm text-[#0A192F] focus:bg-white focus:ring-4 focus:ring-[#F25C05]/10 focus:border-[#F25C05] hover:border-zinc-300 transition-all outline-none" 
                    placeholder={field.placeholder} 
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Informations Académiques */}
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-zinc-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div className="mb-8 flex items-start gap-4">
              <div className="p-3 bg-zinc-50 rounded-2xl">
                <BookOpen className="text-[#F25C05]" size={24} />
              </div>
              <div>
                <h2 className="text-xl font-black text-[#0A192F] mb-1 tracking-wide">INFORMATIONS ACADÉMIQUES</h2>
                <p className="text-sm text-zinc-500 font-light">
                  Indiquez les détails de votre établissement d'accueil justifiant le motif de votre séjour.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {['Établissement d\'accueil', 'Ville d\'études', 'Formation', 'Date de rentrée'].map((label, i) => (
                <div key={i} className="space-y-1.5">
                  <label className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider ml-1">{label}</label>
                  <input 
                    type={label === 'Date de rentrée' ? 'date' : 'text'} 
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3.5 text-sm text-[#0A192F] focus:bg-white focus:ring-4 focus:ring-[#F25C05]/10 focus:border-[#F25C05] hover:border-zinc-300 transition-all outline-none" 
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Informations Logement */}
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-zinc-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div className="mb-8 flex items-start gap-4">
              <div className="p-3 bg-zinc-50 rounded-2xl">
                <Home className="text-[#F25C05]" size={24} />
              </div>
              <div>
                <h2 className="text-xl font-black text-[#0A192F] mb-1 tracking-wide">INFORMATIONS SUR LE LOGEMENT</h2>
                <p className="text-sm text-zinc-500 font-light">
                  Précisez vos préférences de logement pour adapter l'attestation.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider ml-1">Type de logement</label>
                <select className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3.5 text-sm text-[#0A192F] focus:bg-white focus:ring-4 focus:ring-[#F25C05]/10 focus:border-[#F25C05] hover:border-zinc-300 transition-all outline-none cursor-pointer">
                  <option>Résidence étudiante</option>
                  <option>Studio</option>
                  <option>Appartement</option>
                  <option>Colocation</option>
                  <option>Chambre chez l'habitant</option>
                </select>
              </div>
              <div className="space-y-1.5"><label className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider ml-1">Ville du logement</label><input className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3.5 text-sm text-[#0A192F] focus:bg-white focus:ring-4 focus:ring-[#F25C05]/10 focus:border-[#F25C05] hover:border-zinc-300 transition-all outline-none" /></div>
              <div className="space-y-1.5"><label className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider ml-1">Date d'entrée souhaitée</label><input type="date" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3.5 text-sm text-[#0A192F] focus:bg-white focus:ring-4 focus:ring-[#F25C05]/10 focus:border-[#F25C05] hover:border-zinc-300 transition-all outline-none" /></div>
              <div className="space-y-1.5"><label className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider ml-1">Durée du séjour</label><input placeholder="Ex: 12 mois" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3.5 text-sm text-[#0A192F] focus:bg-white focus:ring-4 focus:ring-[#F25C05]/10 focus:border-[#F25C05] hover:border-zinc-300 transition-all outline-none" /></div>
            </div>
          </div>

          {/* Documents */}
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-zinc-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div className="mb-8 flex items-start gap-4">
              <div className="p-3 bg-zinc-50 rounded-2xl">
                <UploadCloud className="text-[#F25C05]" size={24} />
              </div>
              <div>
                <h2 className="text-xl font-black text-[#0A192F] mb-1 tracking-wide">PIÈCES JUSTIFICATIVES</h2>
                <p className="text-sm text-zinc-500 font-light">
                  Téléchargez les documents nécessaires au traitement de votre demande.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {[
                { id: 'identite', titre: "Passeport ou pièce d'identité" },
                { id: 'admission', titre: "Lettre d'admission ou préinscription" },
                { id: 'ressources', titre: "Justificatif de ressources" },
                { id: 'autres', titre: "Autres documents utiles" }
              ].map((doc) => (
                <div 
                  key={doc.id} 
                  className="relative border-2 border-dashed border-zinc-200 bg-zinc-50/50 rounded-2xl p-6 text-center hover:border-[#F25C05] hover:bg-[#F25C05]/5 transition-all duration-300 cursor-pointer group"
                >
                  <input 
                    type="file" 
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
                    accept=".pdf,.jpg,.jpeg,.png"
                    title={`Uploader ${doc.titre}`}
                  />
                  
                  <div className="flex flex-col items-center justify-center h-full">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                      <UploadCloud className="text-zinc-400 group-hover:text-[#F25C05] transition-colors" size={20} />
                    </div>
                    <h3 className="text-sm font-semibold text-[#0A192F] mb-1.5">{doc.titre}</h3>
                    <p className="text-xs text-zinc-400 mb-5">Cliquez ou glissez vos fichiers ici</p>
                    
                    <div className="flex flex-wrap justify-center gap-2 mt-auto">
                      <span className="px-2.5 py-1 bg-white border border-zinc-100 rounded-md text-[10px] text-zinc-500 font-medium shadow-sm">
                        PDF, JPG, PNG
                      </span>
                      <span className="px-2.5 py-1 bg-white border border-zinc-100 rounded-md text-[10px] text-zinc-500 font-medium shadow-sm">
                        Max 10 Mo
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Validation & Submit */}
          <div className="space-y-8 pt-4">
            <div className="space-y-3 bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="relative flex items-center justify-center">
                  <input type="checkbox" className="peer appearance-none w-5 h-5 rounded border-2 border-zinc-300 checked:bg-[#F25C05] checked:border-[#F25C05] transition-colors cursor-pointer" />
                  <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="text-sm text-zinc-600 group-hover:text-[#0A192F] transition-colors">Je certifie que les informations fournies sont exactes.</span>
              </label>
              
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="relative flex items-center justify-center">
                  <input type="checkbox" className="peer appearance-none w-5 h-5 rounded border-2 border-zinc-300 checked:bg-[#F25C05] checked:border-[#F25C05] transition-colors cursor-pointer" />
                  <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="text-sm text-zinc-600 group-hover:text-[#0A192F] transition-colors">J'accepte que LSF traite mes données.</span>
              </label>
            </div>

            <button className="w-full group bg-gradient-to-r from-[#F25C05] to-[#FF7A2F] hover:from-[#e05504] hover:to-[#F25C05] text-white py-4.5 px-6 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:shadow-[0_8px_25px_rgba(242,92,5,0.3)] hover:-translate-y-0.5 transition-all duration-300">
              GÉNÉRER MON ATTESTATION
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>
        </form>
      </section>
    </MainLayout>
  );
}