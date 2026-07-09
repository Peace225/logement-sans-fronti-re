import { motion } from 'framer-motion';
import { Search, FileCheck, Key, Shield, HeartHandshake, GraduationCap, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const steps = [
    {
      icon: Search,
      title: "1. Trouvez votre logement",
      description: "Explorez nos annonces vérifiées près de votre future université. Filtrez par budget, type de logement et équipements."
    },
    {
      icon: FileCheck,
      title: "2. Réservez en toute sécurité",
      description: "Déposez votre dossier en ligne. Notre équipe s'occupe de la validation avec les propriétaires. Pas besoin de garant physique sur place."
    },
    {
      icon: Key,
      title: "3. Emménagez sereinement",
      description: "Signez votre bail en ligne et récupérez vos clés. Profitez de nos packs d'installation pour vous sentir chez vous dès le premier jour."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* En-tête de la page */}
      <section className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Bouton de retour */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white hover:underline transition-all font-medium"
            >
              <ArrowLeft size={20} />
              Retour à l'accueil
            </Link>
          </motion.div>

          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Comment ça marche ?
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-300 max-w-2xl mx-auto"
            >
              Un processus simple, transparent et 100% digitalisé pour vous accompagner dans votre mobilité internationale.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Section : Les 3 étapes */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-orange/10 text-orange rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <step.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section : Qui sommes-nous ? / L'histoire */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
                alt="Étudiants solidaires" 
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange text-white p-6 rounded-2xl shadow-xl hidden md:block">
                <GraduationCap size={40} className="mb-2" />
                <p className="font-bold text-lg">Par et pour</p>
                <p className="text-sm">les étudiants</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2 space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              Notre Mission
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Logement Sans Frontières est né d'un constat simple : trouver un logement depuis l'étranger est un parcours du combattant. Arnaques, difficulté à fournir des garants locaux, barrière de la langue...
            </p>
            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-orange">
              <p className="italic text-gray-700">
                "Nous avons créé la plateforme que nous aurions rêvé d'avoir lors de notre propre mobilité étudiante."
              </p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="font-bold text-navy">Initiative de Khady DIABATE</p>
                <p className="text-sm text-gray-500">Soutenue par LM Global Education</p>
              </div>
            </div>
            <ul className="space-y-4 pt-4">
              <li className="flex items-center gap-3 text-gray-700">
                <Shield className="text-orange" size={24} />
                <span>Logements 100% vérifiés par nos équipes.</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <HeartHandshake className="text-orange" size={24} />
                <span>Accompagnement personnalisé de A à Z.</span>
              </li>
            </ul>
          </motion.div>

        </div>
      </section>

      {/* Call to Action Final */}
      <section className="bg-navy py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Prêt à trouver votre nouveau chez-vous ?</h2>
          <Link 
            to="/logements" 
            className="inline-flex items-center gap-2 bg-orange text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange/90 transition-all shadow-lg shadow-orange/30 transform hover:-translate-y-1"
          >
            <Search size={20} />
            Voir les logements disponibles
          </Link>
        </div>
      </section>

    </div>
  );
}