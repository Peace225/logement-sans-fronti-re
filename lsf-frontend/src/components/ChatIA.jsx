import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Sparkles, Bot } from 'lucide-react'

const QUICK = ["Visa étudiant","Dossier CAF","Assurance logement","Garant Visale"]

const REPLIES = {
  visa: "Pour ton Visa : 1) Attestation LSF 2) Inscription 3) Ressources. Tu veux que je vérifie si ton logement est éligible préfecture?",
  caf: "LSF te fournit le bail conforme + attestation. Demande CAF possible dès J1. Ton logement est à Paris?",
  assurance: "Assurance obligatoire à 9,90€/mois, attestation instantanée pour ton dossier. Je te l'active?",
  garant: "Pas de garant? Visale gratuit -30 ans ou garant LSF 3,5%. Tu as quel âge?",
  default: "Je suis Khady, ton assistante LSF. Je t'aide pour logement, visa, CAF, banque. Dis-m'en plus!"
}

function getReply(t){
  const s=t.toLowerCase()
  if(s.includes('visa')) return REPLIES.visa
  if(s.includes('caf')||s.includes('apl')) return REPLIES.caf
  if(s.includes('assurance')) return REPLIES.assurance
  if(s.includes('garant')||s.includes('visale')) return REPLIES.garant
  return REPLIES.default
}

export default function ChatIA(){
  const [open,setOpen]=useState(false)
  const [input,setInput]=useState('')
  const [typing,setTyping]=useState(false)
  const [msgs,setMsgs]=useState([{id:1,role:'assistant',text:'Salut! Moi c’est Khady, ton assistante LSF 👋\nJe t’aide pour Visa, CAF, Assurance et trouver ton logement. Tu arrives quand?',time:'maintenant'}])
  const endRef=useRef(null)
  useEffect(()=>{endRef.current?.scrollIntoView({behavior:'smooth'})},[msgs,typing,open])

  const send=(txt=input)=>{
    if(!txt.trim()) return
    const u={id:Date.now(),role:'user',text:txt.trim(),time:new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})}
    setMsgs(m=>[...m,u]); setInput(''); setTyping(true)
    setTimeout(()=>{setMsgs(m=>[...m,{id:Date.now()+1,role:'assistant',text:getReply(txt),time:'à l’instant'}]); setTyping(false)},850)
  }

  return(
    <>
      {/* Bulle flottante */}
      <motion.button whileHover={{scale:1.04}} whileTap={{scale:0.96}} onClick={()=>setOpen(!open)}
        className="fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-full bg-[#FF6B2C] text-white shadow-[0_10px_30px_rgba(255,107,44,0.35)] grid place-items-center">
        <AnimatePresence mode="wait">{open?<X size={22}/>:<MessageCircle size={24}/>}</AnimatePresence>
        {!open && <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white animate-pulse"/>}
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            {/* Overlay mobile */}
            <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 bg-black/20 backdrop-blur- z-[9998] sm:hidden" onClick={()=>setOpen(false)}/>

            <motion.div
              initial={{opacity:0,y:24,scale:0.98}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:24,scale:0.98}}
              transition={{type:'spring',damping:24,stiffness:320}}
              className="fixed z-[9999] bg-white flex flex-col overflow-hidden border border-black/5
              inset-0 sm:inset-auto sm:bottom-28 sm:right-6 sm:w- sm:h- sm:max-h- sm:rounded- sm:shadow-[0_20px_60px_rgba(0,0,0,0.18)]
              rounded-none shadow-none"
            >
              {/* Header épuré */}
              <div className="h- px-4 flex items-center justify-between bg-[#08162F] text-white shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 border border-white/15 grid place-items-center"><Bot size={16}/></div>
                  <div className="leading-tight">
                    <div className="text- font-semibold tracking-wide flex items-center gap-1.5">Assistant LSF <Sparkles size={11} className="text-[#FFC84C]"/></div>
                    <div className="text- text-white/55 flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"/>En ligne • 30s</div>
                  </div>
                </div>
                <button onClick={()=>setOpen(false)} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/15 grid place-items-center transition"><X size={16}/></button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-[#FCFDFE]">
                {msgs.map(m=>(
                  <div key={m.id} className={`flex ${m.role==='user'?'justify-end':'justify-start'}`}>
                    <div className={`max-w-[82%] px-3.5 py-2.5 text- leading-[1.55] whitespace-pre-wrap ${m.role==='user'?'bg-[#08162F] text-white rounded- rounded-br-':'bg-white border border-gray-100 text-[#1A2A4A] rounded- rounded-bl- shadow-[0_2px_8px_rgba(0,0,0,0.04)]'}`}>
                      {m.text}
                      <div className={`text- mt-1.5 ${m.role==='user'?'text-white/40':'text-gray-400'}`}>{m.time}</div>
                    </div>
                  </div>
                ))}
                {typing && <div className="flex justify-start"><div className="bg-white border border-gray-100 px-4 py-3 rounded- rounded-bl- flex gap-1"><span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce"/><span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:150ms]"/><span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:300ms]"/></div></div>}
                <div ref={endRef}/>
              </div>

              {/* Quick chips */}
              <div className="px-3 py-2.5 bg-white border-t border-gray-100 flex gap-2 overflow-x-auto scrollbar-none">
                {QUICK.map(q=><button key={q} onClick={()=>send(q)} className="shrink-0 h-7 px-3 rounded-full bg-[#F4F5F7] hover:bg-gray-900 hover:text-white text- font-medium text-gray-600 transition">{q}</button>)}
              </div>

              {/* Input */}
              <div className="p-3 bg-white border-t border-gray-100 flex items-end gap-2 pb-[calc(12px+env(safe-area-inset-bottom))]">
                <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==='Enter'&&send()} placeholder="Écris ton message..." className="flex-1 h- px-4 rounded-full bg-[#F4F5F7] border border-transparent focus:bg-white focus:border-gray-200 outline-none text- placeholder:text-gray-400"/>
                <button onClick={()=>send()} disabled={!input.trim()} className="w-11 h-11 rounded-full bg-[#FF6B2C] text-white grid place-items-center hover:bg-[#E85F26] disabled:opacity-40 disabled:cursor-not-allowed transition shadow-[0_6px_16px_rgba(255,107,44,0.3)]"><Send size={18}/></button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}