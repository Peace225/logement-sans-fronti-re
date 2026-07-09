export default function Gallery({images=[]}){
  return (
    <div className="grid grid-cols-4 gap-2 h-96">
      <div className="col-span-2 row-span-2 bg-gray-200 rounded-2xl grid place-items-center">Photo principale</div>
      {[1,2,3,4].map(i=><div key={i} className="bg-gray-100 rounded-2xl grid place-items-center text-sm">{i}</div>)}
    </div>
  )
}