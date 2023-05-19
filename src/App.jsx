
import Banner from './components/Banner'
import About from './components/About'
import Expedition from './components/Expedition'
import Blog from './components/Blog'
import Team from './components/Team'
import Gallery from "./components/Gallery";
import {AiOutlineArrowUp} from "react-icons/ai"
import { useEffect, useState } from 'react'
import Sintra from './components/Sintra'

function App() {
  
 const [showArrow, setShowArrow] = useState(false)

useEffect(()=>{
const scrollAnimation = ()=>{
  return window.scrollY > 50 ? setShowArrow(true) : setShowArrow(false)

}

window.addEventListener("scroll", scrollAnimation)

return ()=>{
  window.removeEventListener("scroll", scrollAnimation)
}
},[])


const handleScroll = ()=>{
  window.scroll({
    top:0,
    behavior:"smooth"
  })
}

  return (
    <>
    <Banner />
    <About />
    <Expedition/>
    <Blog />
    <Sintra />
    <Team />
    <Gallery />

    <div className={`fixed right-10 bottom-10 transition-all duration-500
    ${showArrow ? "translate-x-0" : "translate-x-20"}
    `}>
      <button onClick={handleScroll} className='bg-gray-900 text-white text-xl cursor-pointer hover:bg-gray-500 p-2' >
        <AiOutlineArrowUp />
      </button>
    </div>
    </>
    
  )
}

export default App
