import React from 'react'
import moutain1 from "../components/images/mountain/mountain1.jpg"
import moutain2 from "../components/images/mountain/mountain2.jpg"
import moutain3 from "../components/images/mountain/mountain3.jpg"
import moutain4 from "../components/images/mountain/mountain4.jpg"


const Gallery = () => {

    const images = [moutain1, moutain2, moutain3, moutain4]

  return (
   
        <div className='grid grid-cols-team bg-gray-950 p-5'>
            {images.map((image, i)=>(
                    <div className='cursor-pointer hover:opacity-50' key={i}>
                        <img className='w-full h-[16rem] 2xl:h-[22rem] object-cover' src={image} alt="imageGallery" />
                    </div>
            ))}
        </div>
   
  )
}

export default Gallery