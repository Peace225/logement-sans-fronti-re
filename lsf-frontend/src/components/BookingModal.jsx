export default function BookingModal({open,onClose}){
  if(!open) return null
  return (
    <div className="fixed inset-0 bg-black/50 grid place-items-center z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Réserver ce logement</h2>
        <input className="w-full border rounded-lg p-3 mb-3" placeholder="Date d'arrivée"/>
        <select className="w-full border rounded-lg p-3 mb-3"><option>Pack Essentiel 199€</option><option>Pack Confort 399€</option><option>Pack Premium 699€</option></select>
        <div className="flex gap-3">
          <button onClick={onClose} className="flex-1 border rounded-lg p-3">Annuler</button>
          <button className="flex-1 bg-orange text-white rounded-lg p-3">Payer</button>
        </div>
      </div>
    </div>
  )
}