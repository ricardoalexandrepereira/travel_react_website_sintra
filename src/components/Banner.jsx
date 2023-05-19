import React from "react";
import logo from "./images/sintralogo.png";
import {motion as m} from "framer-motion";
import HeadAnimation from "./Animation/HeadAnimation";

const Banner = () => {
  return (
    <div className="px-7 w-full h-screen bg-banner bg-no-repeat bg-w-[500px] bg-center bg-cover clip flex flex-col items-center gap-14 text-white">
      <div className="mt-16 md:mt-7">
        <img className="w-[15rem]" src={logo} alt="logoImg" />
      </div>

      <div>
        <h1 className="w-full text-3xl md:text-6xl 2xl:text-8xl capitalize font-bold md:w-[44rem] 2xl:w-[73rem] text-center textShadow">
          <HeadAnimation text="Sintra expedition club!"/>
        </h1>
        <m.p 
        initial={{ opacity :0 }}
        animate={{ opacity :1 }}
        transition={{ duration: 2 }}
        className="md:w-[30rem] 2xl:w-[40rem] 2xl:text-2xl px-3 textShadow mx-auto font-medium mt-4 w-full text-xl text-center font">
          join us in the discovery of sintra, magical forests and ancestral
          trails that took us back several centuries.
        </m.p>
      </div>
    </div>
  );
};

export default Banner;
