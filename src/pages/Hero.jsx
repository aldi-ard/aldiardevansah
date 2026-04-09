import React, { useEffect, useState } from 'react'
import Typewriter from 'typewriter-effect'

function Hero() {

  const [position, setPosition] = useState({ x: -200, y: 0 })

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()

    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    setPosition({ x, y })
  }
  const handleMouseLeave = () => {
  setPosition({ x: -100, y: -100 })
}

  return (
    <section id='home' className='pt-36 pb-40 relative '>
        <div className="container max-w-7xl mx-auto md:flex md:flex-row ">
            <div className="flex flex-wrap lg:p-20">
                <div className="w-full  self-center p-4">
                    <h1 className='text-base font-semibold md:text-2xl text-primary'>Hallo Everyone, I Am <span className='block font-bold text-dark text-4xl lg:text-6xl md:pt-2 md:mb-2'>Aldi Ardiansah</span></h1>
                    <h2 className='font-medium text-slate-500 text-lg mb-2 hover:text-teal-500 lg:text-2xl'>
                         <Typewriter
                            options={{
                            strings: ['Junior Web Developer','Information Technology student, 3rd semester'],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 20,
                            typeSpeed: 30,
                            }}
                        />
                    </h2>
                    <div className="relative mb-8 lg:max-w-full md:w-[80%] mt-8"  onMouseMove={handleMouseMove}   onMouseLeave={handleMouseLeave}>
                        
                        {/* TEXT GELAP (base) */}
                        <p className='font-medium text-slate-500 leading-relaxed md:text-xl mt-5'>
                            I am an Information Technology student with a background in manufacturing. Currently, I focus on web development, creating company profile websites that help businesses build their digital presence.
                        </p>
                        {/* TEXT TERANG (overlay) */}
                        <p
                            className='font-medium text-slate-900 absolute left-0 md:text-xl  w-full leading-relaxed top-0'
                            style={{
                            clipPath: `circle(40px at ${position.x}px ${position.y}px)`
                            }}
                        >
                            I am an Information Technology student with a background in manufacturing. Currently, I focus on web development, creating company profile websites that help businesses build their digital presence.
                        </p>

                    </div>
                    <a href="" className='text-base bg-primary rounded-xl py-3 px-8  text-white font-semibold hover:shadow-lg hover:opacity-80 '>Contact Me</a>
                </div>
            </div>
            <div className="w-full self-end px-4 relative md:self-center">
                <div className='relative mt-10'>
                    <img src='/images/profilePhoto.png' alt='photo-profile' className='max-w-full md:w-2xs md:min-w-96 lg:min-w-106 mx-auto'/>
                    <span className='absolute md:bottom-20 bottom-0 -z-10 left-1/2 -translate-x-1/2'>
                        <svg width={400} height={400} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#14b8a6" d="M49.8,-60.7C63.8,-47.7,73.7,-31.2,76.9,-13.4C80.2,4.3,76.9,23.4,68,39.6C59,55.8,44.5,69.1,27.6,74.9C10.7,80.6,-8.7,78.8,-27.8,73.2C-46.9,67.6,-65.9,58.3,-71.4,43.7C-77,29,-69.2,9.1,-62.9,-8.4C-56.7,-26,-52,-41.2,-41.7,-54.8C-31.5,-68.4,-15.8,-80.5,1.1,-81.8C18,-83.1,35.9,-73.7,49.8,-60.7Z" transform="translate(100 100)" />
                        </svg>
                    </span>
                </div>
            </div>
        </div>

    </section>
)
}

export default Hero