export default function Testimonials(){
  const items = [
    {name:'Aminata', country:'Côte d’Ivoire', text:'J’ai trouvé mon studio à Paris avant mon visa grâce à LSF.'},
    {name:'Moussa', country:'Sénégal', text:'Accueil aéroport + installation, tout était prêt.'}
  ]
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8">Ils nous font confiance</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map(t=>(
          <div key={t.name} className="bg-white p-6 rounded-2xl shadow">
            <p>"{t.text}"</p>
            <p className="mt-3 font-semibold">{t.name} — {t.country}</p>
          </div>
        ))}
      </div>
    </section>
  )
}