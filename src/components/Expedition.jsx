import React, { useLayoutEffect, useRef } from 'react'
import cloud from "../components/images/cloud.png";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

const Expedition = () => {

    const ref = useRef("")
    gsap.registerPlugin(ScrollTrigger)

useLayoutEffect(()=>{
    const animate = gsap.timeline({
        scrollTrigger:{
            trigger: ".about1",
            start: "top top",
            endTrigger: ref.current,
            end:"bottom center",
            /* markers:true, */
            toggleClass:{targets:".about1", className: "active"},
        }
    })
    animate.from(ref.current, {duration : 1 })
},[])


  return (
    <section ref={ref} className='overflow-hidden mb-10'>
        <div className='bg-mountain w-full h-[550px] 2xl:h-[900px] bg-no-repeat bg-cover bg-top  lg:mt-28 flex items-end justify-center relative overflow-hidden md:overflow-visible'>
            <div className='text-white pb-2 text-center absolute bottom-6 md:bottom-0 !z-50 py-[7rem] mb-9'>
                
                
            </div>
            {Array(14).fill().map((_, i)=>(
                <img 
                className='absolute right-0 left-0 bottom-[-3rem] sm:bottom-[-6rem] md:bottom-[-9rem] 2xl:bottom-[-15rem]'
                key={i} src={cloud} alt='cloudImg'
                style={{animation:`cloud ${i + 15}s linear infinite`}}
                >
                </img>
            ))}
        </div>
    </section>
  )
}

export default Expedition