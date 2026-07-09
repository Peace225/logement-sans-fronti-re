import { useState } from 'react'
export default function ChatIA(){
  const [open,setOpen] = useState(false)
  return (
    <>
      <button onClick={()=>setOpen(!open)} className="fixed bottom-6 right-6 bg-orange text-white w-14 h-14 rounded-full shadow-lg grid place-items-center text-2xl">💬</button>
      {open && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-2xl shadow-2xl border">
          <div className="p-4 border-b font-semibold">Assistant LSF - Visa, CAF, Assurance</div>
          <div className="p-4 h-64 overflow-y-auto text-sm text-gray-600">Bonjour ! Pose ta question sur ton installation en France, Belgique, Espagne...</div>
          <input className="w-full border-t p-3 rounded-b-2xl" placeholder="Écris ici..."/>
        </div>
      )}
    </>
  )
}