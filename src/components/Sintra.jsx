import React from 'react'
import Lottie from "lottie-react"
import animationData from "../assets/animationData.json"

const Sintra = () => {
  return (
    <section className='w-full justify-center items-center px-10 md:flex h-[600px]'>
        <div className='flex flex-col gap-6 justify-center items-left mt-[4rem]'>
            <h1 className='text-5xl text-gray-900'>look for us in your mobile app!</h1>
            <p className='paragraph max-w-[500px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae qui unde facere ea est! Cumque veniam vero nihil sit nemo!</p>
        </div>
        <div className='flex justify-center items-center'>
            <Lottie style={{width:"200px"}} animationData={animationData}/>
        </div>
    </section>
  )
}

export default Sintra