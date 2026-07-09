import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ShieldCheck, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const images = [
    '/images/hero.jpg',
    '/images/hero1.jpg',
    '/images/hero2.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    // Adaptation responsive : min-h-[85vh] sur mobile, md:min-h-[75vh] sur bureau
    <section className="relative min-h-[85vh] md:min-h-[75vh] flex items-center justify-center bg-navy overflow-hidden">
      
      {/* 1. Carrousel d'images de fond */}
      <div className="absolute inset-0 z-0 bg-navy">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 8 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            alt="Étudiants internationaux"
            // ICI : Le commentaire erroné a été supprimé.
            // Adaptation responsive de l'image : object-center sur mobile, md:object-[center_25%] sur bureau
            className="absolute inset-0 w-full h-full object-cover object-center md:object-[center_25%]" 
          />
        </AnimatePresence>
        
        {/* Filtre dégradé par-dessus le carrousel */}
        {/* Adaptation responsive du dégradé pour protéger le texte */}
        <div className="absolute inset-0 bg-navy/70 md:bg-gradient-to-r md:from-navy md:via-navy/80 md:to-transparent z-10"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="max-w-3xl">
          
          {/* Badge Supérieur */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium mb-6"
          >
            <Globe size={16} className="text-orange" />
            <span>De l'Afrique à l'Europe</span>
          </motion.div>

          {/* Titre Principal (responsive) */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-4"
          >
            Trouvez votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-yellow-400">logement idéal</span> à l'étranger.
          </motion.h1>

          {/* Sous-titre (responsive) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 font-light max-w-2xl mb-8"
          >
            Parce qu'étudier à l'étranger commence par se sentir <strong className="text-white font-semibold">chez soi</strong>. La première plateforme francophone dédiée à la mobilité étudiante.
          </motion.p>

          {/* Boutons d'action (CTAs, responsives) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link 
              to="/services" 
              className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 px-6 py-3 rounded-xl font-bold text-sm sm:text-base hover:bg-white/20 transition-all w-full sm:w-auto"
            >
              <ShieldCheck size={20} />
              Découvrir nos garanties
            </Link>
            <Link 
              to="/qui-sommes-nous" 
              className="flex items-center justify-center gap-2 text-white px-6 py-3 rounded-xl font-bold text-sm sm:text-base hover:bg-white/5 transition-all w-full sm:w-auto"
            >
              <PlayCircle size={20} />
              Comment ça marche ?
            </Link>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}