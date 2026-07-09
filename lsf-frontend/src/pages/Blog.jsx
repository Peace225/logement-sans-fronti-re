import MainLayout from '../../layouts/MainLayout'
import { Link } from 'react-router-dom'
import { Calendar, User, ArrowRight } from 'lucide-react'

export default function Blog() {
  const posts = [
    {
      id: 1,
      slug: 'visa-etudiant-france-2026',
      title: 'Visa étudiant France 2026 : le guide complet par Khady',
      excerpt: 'Dossier Campus France, justificatifs de logement, entretien... Tout ce qui change cette année pour éviter le refus.',
      category: 'Visa',
      author: 'Khady DIABATE',
      date: '15 Juin 2026',
      image: 'visa',
      readTime: '8 min'
    },
    {
      id: 2,
      slug: 'caf-etudiant-etranger',
      title: 'CAF 2026 : comment toucher 200€ d’aide au logement',
      excerpt: 'Démarches pas à pas, pièces à fournir, erreurs à éviter. Notre équipe vous accompagne gratuitement.',
      category: 'Installation',
      author: 'Équipe LSF',
      date: '10 Juin 2026',
      image: 'caf',
      readTime: '5 min'
    },
    {
      id: 3,
      slug: 'garant-sans-garant',
      title: 'Pas de garant en Europe ? La solution LSF',
      excerpt: 'Comment Khady se porte garante pour vous et débloque votre dossier en 48h.',
      category: 'Logement',
      author: 'Khady DIABATE',
      date: '2 Juin 2026',
      image: 'garant',
      readTime: '4 min'
    },
    {
      id: 4,
      slug: 'arrivee-aeroport-paris',
      title: 'Arrivée à Paris : notre guide accueil aéroport',
      excerpt: 'CDG, Orly, Beauvais : qui vous attend, où aller, première nuit.',
      category: 'Installation',
      author: 'Équipe LSF',
      date: '28 Mai 2026',
      image: 'aeroport',
      readTime: '6 min'
    },
    {
      id: 5,
      slug: 'colocation-vs-studio',
      title: 'Colocation ou studio ? Le vrai coût en 2026',
      excerpt: 'Comparatif Paris, Lyon, Lille, Bruxelles. Notre calculateur inclus.',
      category: 'Budget',
      author: 'Équipe LSF',
      date: '20 Mai 2026',
      image: 'budget',
      readTime: '7 min'
    },
    {
      id: 6,
      slug: 'arnaques-logement-etudiant',
      title: '5 arnaques logement à éviter absolument',
      excerpt: 'Faux propriétaires, virements Western Union... Les signaux d’alerte vérifiés par LSF.',
      category: 'Sécurité',
      author: 'Khady DIABATE',
      date: '12 Mai 2026',
      image: 'securite',
      readTime: '5 min'
    },
  ]

  const categories = ['Tous', 'Visa', 'Logement', 'Installation', 'Budget', 'Sécurité']

  return (
    <MainLayout>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Blog LSF</h1>
          <p className="mt-3 opacity-90 max-w-2xl mx-auto">Conseils visa, logement, installation. Directement de l'expérience terrain de Khady et LM Global Education.</p>
        </div>
      </section>

      {/* Filtres */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button key={cat} className={`px-4 py-2 rounded-full text-sm border ${cat==='Tous' ? 'bg-orange text-white border-orange' : 'hover:bg-gray-100'}`}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grille articles */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map(post => (
            <article key={post.id} className="bg-white rounded-2xl shadow-sm border overflow-hidden hover:shadow-md transition">
              <div className="h-48 bg-gradient-to-br from-orange/20 to-navy/20 grid place-items-center text-4xl">
                {post.image === 'visa' ? '🛂' : post.image === 'caf' ? '🏠' : post.image === 'garant' ? '🛡️' : post.image === 'aeroport' ? '✈️' : post.image === 'budget' ? '💶' : '⚠️'}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                  <span className="bg-orange/10 text-orange px-2 py-1 rounded-full">{post.category}</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="font-bold text-xl mb-2 line-clamp-2">{post.title}</h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1"><User size={14}/>{post.author}</span>
                    <span className="flex items-center gap-1"><Calendar size={14}/>{post.date}</span>
                  </div>
                </div>
                <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-1 text-orange font-semibold mt-4 text-sm hover:gap-2 transition-all">
                  Lire l'article <ArrowRight size={16}/>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-navy">Reçois les conseils de Khady</h3>
          <p className="text-gray-600 mt-2">1 email par semaine. Visa, logement, bons plans. Zéro spam.</p>
          <form className="mt-6 flex gap-2 max-w-md mx-auto">
            <input type="email" placeholder="Ton email" className="flex-1 border rounded-xl p-3"/>
            <button className="bg-orange text-white px-6 rounded-xl font-semibold">S'inscrire</button>
          </form>
        </div>
      </section>
    </MainLayout>
  )
}