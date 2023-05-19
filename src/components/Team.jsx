import React from "react";
import team1 from "../components/images/team/team1.jpg";
import team2 from "../components/images/team/team2.jpg";
import team3 from "../components/images/team/team3.jpg";


const Team = () => {
  const teams = [team1, team2, team3];

  return (
    <section className="clip3 lg:h-[650px] py-6 lg:py-0 2xl:h-[800px] bg-teamBg bg-bottom bg-cover bg-no-repeat lg:mt-[-5rem] ">
      <div className="w-[90%] lg:w-[85%] mx-auto grid grid-cols-team gap-5 ">
        {teams.map((team, i) => (
          <div className="lg:mt-[70px] !z-40 w-full md:first:mt-[70px] md:last:mt-[70px] " key={i}>
            <img className="w-full max-w-[300px] flex mx-auto h-[23rem] lg:h-[22rem] object-cover rounded-md" src={team} alt="image1" />
          </div>
        ))}
      </div>

      <div className="w-[90%] lg:w-[60%] mx-auto bg-blue-950/60 text-white mb-[6rem] mt-[1rem] p-4 text-center flex flex-col gap-5 rounded-lg">
        <h1 className="text-2xl lg:text-5xl capitalize">Get in Touch</h1>
        <p className="2xl:text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem incidunt id magni eum officia eius possimus eligendi, in tempora laboriosam libero natus amet vel at! Exercitationem officia ea sapiente accusamus.</p>
        
      </div>

     
    </section>
  );
};

export default Team;
