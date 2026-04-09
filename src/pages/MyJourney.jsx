import { useState } from 'react'
import TimelineData from '../data/TimelineData'
import TimelineList from '../components/TimelineList'

function MyJourney() {
  const [activeId, setActiveId] = useState(null)

  return (
    <section className='w-full pt-2 bg-slate-200'>
      <div className="container p-20 max-w-8xl mx-auto ">
        <div className='w-full flex gap-20 px-10 pt-10 mb-20 justify-center border-b-2 border-primary ' >
          <h1 className='text-7xl font-bold mb-16 text-primary '>
            My Journey
          </h1>
          <p className=' pt-8 flex-col hidden md:block '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore explicabo fugit nobis molestias? Debitis hic quod fugit voluptates atque accusantium aliquid, dicta nostrum? Vitae quas fugiat laboriosam eum necessitatibus consequuntur!</p>
        </div>
        <TimelineList 
          data = {TimelineData}
          activeId={activeId}
          onSelect={setActiveId}
        />
      </div>
    </section>
  )
}

export default MyJourney