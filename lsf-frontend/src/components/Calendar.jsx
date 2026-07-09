export default function Calendar(){
  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <h3 className="font-semibold mb-3">Disponibilités</h3>
      <div className="grid grid-cols-7 gap-1 text-center text-sm">
        {Array.from({length:30},(_,i)=><div key={i} className="p-2 border rounded hover:bg-orange/10">{i+1}</div>)}
      </div>
    </div>
  )
}