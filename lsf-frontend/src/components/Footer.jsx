export default function Footer(){
  return (
    <footer className="bg-navy text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="font-bold text-lg mb-3">LSF</h3>
          <p className="opacity-80">Parce qu'étudier à l'étranger commence par se sentir chez soi.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Plateforme</h4>
          <ul className="space-y-1 opacity-80"><li>Logements</li><li>Universités</li><li>Services</li></ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Support</h4>
          <ul className="space-y-1 opacity-80"><li>Contact</li><li>FAQ</li><li>Blog</li></ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Fondatrice</h4>
          <p className="opacity-80">Khady DIABATE<br/>LM Global Education</p>
        </div>
      </div>
      <div className="border-t border-white/10 text-center py-4 text-xs opacity-60">© 2026 Logement Sans Frontières</div>
    </footer>
  )
}