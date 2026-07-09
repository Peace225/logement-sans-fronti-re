export default function Filters({ onFilterChange }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border">
      <h3 className="font-bold mb-3">Filtres</h3>
      <select className="w-full p-2 border rounded mb-2">
        <option>Type de logement</option>
        <option>Résidence</option>
        <option>Colocation</option>
      </select>
      <input type="number" placeholder="Budget max" className="w-full p-2 border rounded" />
    </div>
  );
}