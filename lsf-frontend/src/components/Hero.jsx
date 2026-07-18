import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

// Compteur animé effet décompte
function Counter({ to, prefix = "", suffix = "", duration = 1.8 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let raf;
    const start = performance.now();
    const animate = (now) => {
      const elapsed = (now - start) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4); // easeOutQuart
      setCount(Math.floor(ease * to));
      if (progress < 1) raf = requestAnimationFrame(animate);
      else setCount(to);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [isInView, to, duration]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

export default function Hero() {
  const images = ['/images/hero.jpg', '/images/hero1.jpg', '/images/hero2.jpg'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrentIndex((p) => (p + 1) % images.length), 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const stats = [
    { label: "Logements", to: 500, prefix: "+", suffix: "" },
    { label: "Pays", to: 10, prefix: "", suffix: "" },
    { label: "Suivi", to: 100, prefix: "", suffix: "%" },
  ];

  return (
    <section className="relative bg-[#08162F] py-14 lg:py-24 overflow-hidden">
      {/* Lueur très subtile pour le premium */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Texte */}
        <div className="flex flex-col justify-center z-10">
          {/* 1. Titre H1 réduit : passage de text-7xl à text-6xl sur grand écran */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] leading-[0.98] text-white mb-6"
          >
            Trouvez votre
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-300 whitespace-nowrap">
              logement étudiant
            </span>
            <br />
            partout dans le monde.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base md:text-lg leading-[1.7] text-white/60 max-w-lg mb-9 font-light"
          >
            Parce qu'étudier à l'étranger commence par se sentir <span className="text-white/90 font-medium">chez soi</span>. La Clés de Lamine sécurise votre installation.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-wrap items-center gap-3 mb-12">
            <Link to="/logements" className="inline-flex items-center gap-2.5 h-12 px-7 rounded-full bg-white text-[#08162F] text-sm font-semibold hover:bg-white/90 transition shadow-lg shadow-white/5">
              Trouver un logement <ArrowRight size={16} strokeWidth={2.2} />
            </Link>
            <Link to="/partenaires" className="inline-flex items-center h-12 px-7 rounded-full bg-transparent text-white/80 text-sm font-medium border border-white/15 hover:bg-white/10 hover:text-white transition backdrop-blur-sm">
              Devenir partenaire
            </Link>
          </motion.div>

          <div className="flex gap-8 border-t border-white/10 pt-7 max-w-md">
            {stats.map((s) => (
              <div key={s.label} className="flex-1">
                <div className="text-3xl lg:text-4xl font-bold tracking-tight text-white leading-none">
                  <Counter to={s.to} prefix={s.prefix} suffix={s.suffix} />
                </div>
                <div className="text-[11px] tracking-[0.14em] uppercase text-white/40 mt-2 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Carte Image Premium Épurée (Sans arrondis) */}
        <div className="relative w-full max-w-2xl mx-auto lg:ml-auto">
          {/* 2. Suppression de rounded-[2rem] -> remplacé par rounded-none */}
          <div className="relative rounded-none p-2 bg-gradient-to-br from-white/10 to-transparent border border-white/10 backdrop-blur-xl shadow-[0_30px_90px_-20px_rgba(0,0,0,0.7)] group">
            
            {/* 3. Suppression de rounded-[1.5rem] -> remplacé par rounded-none */}
            <div className="relative aspect-[4/3] rounded-none overflow-hidden bg-[#0E1E3D]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex]}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-[#08162F]/40 to-transparent pointer-events-none" />
            </div>

            {/* Badge (J'ai conservé l'arrondi du badge pour le contraste, mais si vous le voulez carré, il suffit d'enlever 'rounded-full') */}
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="absolute -top-4 left-6 flex items-center gap-2 bg-white rounded-full pl-1.5 pr-4 py-1.5 shadow-[0_8px_24px_rgba(0,0,0,0.2)] border border-white/50">
              <span className="w-7 h-7 rounded-full bg-[#08162F] flex items-center justify-center">
                <ShieldCheck size={14} className="text-green-400" />
              </span>
              <span className="text-xs font-bold text-[#08162F] tracking-wide uppercase">Vérifié LSF</span>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}