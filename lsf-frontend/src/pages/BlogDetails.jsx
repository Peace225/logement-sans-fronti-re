import MainLayout from '../../layouts/MainLayout'
import { useParams, Link } from 'react-router-dom'
import { Calendar, User, ArrowLeft } from 'lucide-react'

export default function BlogDetails() {
  const { id } = useParams()

  // Données démo - à remplacer par Supabase plus tard
  const article = {
    id: id || 1,
    title: "Comment trouver un logement en France sans garant : le guide 2026",
    excerpt: "Khady DIABATE explique la solution LSF qui a aidé 12 000 étudiants.",
    content: `
      <p>Arriver en France pour étudier est un rêve pour des milliers d'étudiants africains. Mais le cauchemar commence souvent avec la recherche de logement : <strong>"Pas de garant français, pas de location"</strong>.</p>
      
      <h2>Le problème</h2>
      <p>73% des étudiants internationaux se voient refuser un logement faute de garant solvable en Europe. Les agences demandent CDI, 3x le loyer, et un garant résidant en France.</p>
      
      <h2>La solution LSF</h2>
      <p>Chez Logement Sans Frontières, <strong>Khady DIABATE se porte garante pour vous</strong>. C'est l'ADN de LM Global Education depuis 2018 :</p>
      <ul>
        <li>✅ Nous vérifions chaque logement physiquement</li>
        <li>✅ Nous signons comme garant institutionnel</li>
        <li>✅ Vous payez uniquement 1 mois de caution</li>
        <li>✅ Installation complète : aéroport, CAF, banque</li>
      </ul>
      
      <h2>Témoignage</h2>
      <blockquote>"Je suis arrivée de Côte d'Ivoire avec mon visa mais sans logement. En 48h, LSF m'a trouvé un studio à Paris 13 et Khady a été ma garante. Aujourd'hui je suis en Master 2." - Aminata, 2024</blockquote>
      
      <h2>Les 3 packs</h2>
      <p><strong>Essentiel (199€)</strong> : logement + garant<br>
      <strong>Confort (399€)</strong> : + accueil aéroport + assurance<br>
      <strong>Premium (699€)</strong> : + CAF + banque + suivi 3 mois</p>
    `,
    author: 'Khady DIABATE',
    date: '15 Juin 2026',
    category: 'Logement',
    image: '/api/placeholder/1200/600',
    readTime: '5 min'
  }

  const related = [
    { id: 2, title: 'CAF 2026 : comment toucher 200€/mois dès le 1er mois', category: 'Installation' },
    { id: 3, title: 'Top 5 des villes étudiantes les moins chères en France', category: 'Budget' },
    { id: 4, title: 'Visa étudiant : les 3 erreurs qui coûtent le logement', category: 'Visa' },
  ]

  return (
    <MainLayout>
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Back */}
        <Link to="/blog" className="inline-flex items-center gap-2 text-gray-600 hover:text-orange mb-6">
          <ArrowLeft size={18}/> Retour au blog
        </Link>

        {/* Header */}
        <div className="mb-8">
          <span className="inline-block bg-orange/10 text-orange px-3 py-1 rounded-full text-sm font-medium mb-4">
            {article.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-navy leading-tight">{article.title}</h1>
          <p className="text-xl text-gray-600 mt-3">{article.excerpt}</p>
          
          <div className="flex items-center gap-6 mt-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <User size={16}/> {article.author}, Fondatrice LSF
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16}/> {article.date}
            </div>
            <span>{article.readTime} de lecture</span>
          </div>
        </div>

        {/* Image */}
        <div className="w-full h-96 bg-gray-200 rounded-2xl mb-10 grid place-items-center text-gray-500">
          Image de couverture
        </div>

        {/* Content */}
        <div 
          className="prose prose-lg max-w-none prose-headings:text-navy prose-headings:font-bold prose-a:text-orange prose-strong:text-navy"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* CTA LSF */}
        <div className="mt-12 p-8 bg-navy text-white rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-2">Besoin d'un logement sans garant ?</h3>
          <p className="opacity-90 mb-4">Khady et l'équipe LSF trouvent pour toi en 48h.</p>
          <Link to="/logements" className="inline-block bg-orange px-6 py-3 rounded-xl font-semibold hover:bg-orange/90">
            Voir les logements disponibles
          </Link>
        </div>
      </article>

      {/* Articles liés */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-6">Articles liés</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map(a => (
              <Link key={a.id} to={`/blog/${a.id}`} className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md border">
                <span className="text-xs text-orange font-medium">{a.category}</span>
                <h3 className="font-semibold mt-2 line-clamp-2">{a.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  )
}