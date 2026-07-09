// Pour React Leaflet plus tard
export default function Map({lat=48.85,lng=2.35}){
  return (
    <div className="h-80 bg-gray-100 rounded-2xl grid place-items-center">
      Carte interactive — {lat}, {lng} (React Leaflet à brancher)
    </div>
  )
}