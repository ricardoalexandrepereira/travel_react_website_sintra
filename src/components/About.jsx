import React from "react";

const About = () => {
  return (
    <section className="py-[3rem] z-[-1] about1">
      <div className="text-center">
        <span className='relative text-center text-3xl 2xl:text-5xl before:content-[""] before:absolute before:h-[6rem] before:border-2 before:border-blue-950 before:top-[-3rem] before:right-[6rem] before:bottom-24 before:my-auto about 2xl:before:right-[5.5rem]'>
          About Us
        </span>
      </div>

      <div className="w-[90%] lg:w-[85%] mx-auto flex flex-col md:flex-row gap-8 mt-10 text-center md:text-left text-sm 2xl:text-xl paragraph ">
        <div className="flex-1 flex flex-col gap-2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            quae molestias dignissimos enim earum, sed, reprehenderit dolore
            necessitatibus, est laboriosam soluta eos!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            quae molestias dignissimos enim earum, sed, reprehenderit dolore
            necessitatibus, est laboriosam soluta eos!
          </p>
        </div>

        <div className="flex-1 flex flex-col gap-5 justify-between">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            beatae reprehenderit ducimus molestiae animi eveniet veritatis
            maiores, repellat dolorum sint. Laboriosam, quibusdam.
          </p>
          <div>
                <button className="bg-blue-950 text-white py-2 px-5 hover:bg-blue-400 border-none text-sm">Read more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
