import Aos from "aos"
import { useEffect } from "react"
import 'aos/dist/aos.css';

function TimelineBox({ item, onSelect, isActive }) {
  useEffect(() => {
    Aos.init({duration:1200})
  })
  return (
    <div className="relative pl-8 mb-2 ">
      
      {/* DOT */}
      <div className="absolute -left-4 top-2 w-4 h-4 rounded-full bg-primary md:hidden"></div>

      {/* CARD */}
      <div
        onClick={() => onSelect(item.id)}
        data-aos='fade-up'
        className={`p-6 rounded-2xl shadow-md border transition-all duration-300
        ${isActive 
          ? "bg-primary text-white scale-105 border-primary" 
          : "bg-white text-gray-800 hover:scale-105 border-slate-200"
        }`}
      >
        <p className="text-sm opacity-70">{item.time}</p>
        
        <h2 className="text-xl font-bold">{item.title}</h2>
        
        <p className="text-sm italic">{item.status}</p>

        <p className="mt-2">{item.description}</p>
      </div>
    </div>
  )
}


export default TimelineBox