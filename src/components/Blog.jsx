import React from 'react'
import blog1 from "../components/images/blogs/blog1.jpg"
import blog2 from "../components/images/blogs/blog2.jpg"
import blog3 from "../components/images/blogs/blog3.jpg"

const Blog = () => {

    const data = [
        {
        title:"Expedition Reports",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi quas excepturi id sit corporis doloribus est unde animi explicabo, consectetur, enim maxime sunt dicta voluptates! Illo labore temporibus, sequi commodi velit sed dolorem a vitae.",
        img: blog1,
        path:"#"
        },
        {
            title:"Places",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi quas excepturi id sit corporis doloribus est unde animi explicabo, consectetur, enim maxime sunt dicta voluptates! Illo labore temporibus, sequi commodi velit sed dolorem a vitae.",
            img: blog2,
            path:"#"
        },
        {
            title:"Expedition Reports",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi quas excepturi id sit corporis doloribus est unde animi explicabo, consectetur, enim maxime sunt dicta voluptates! Illo labore temporibus, sequi commodi velit sed dolorem a vitae.",
            img: blog3,
            path:"#"
        }
]
  return (
   <section className='clip2 w-full h-full bg-blogBg bg-no-repeat bg-cover md:mt-[-6rem] flex items-center justify-center text-white py-[8rem] !z-50'>
    <div className='w-[90%] lg:w-[85%] mx-auto flex flex-wrap gap-5'>
        {data.map((image, i)=>(
            <div className='flex-[100%] md:flex-[25%] md:even:mt-[3rem]' key={i}>
                <img className='w-full rounded-md' src={image.img} alt="blogImg" />
                <div className='mt-5'>
                    <h1 className='text-2xl 2xl:text-4xl pb-3 font-medium capitalize'>{image.title}</h1>
                    <p className='text-sm 2xl:text-xl capitalize'>{image.desc}</p>
                    <button className='mt-4 bg-slate-600 w-full md:w-auto py-2 px-3 rounded-sm text-sm cursor-pointer hover:bg-slate-400'>Read more</button>
                </div>
            </div>
        ))}
    </div>
   </section>
  )
}

export default Blog