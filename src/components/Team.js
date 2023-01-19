/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Team() {
  const [team, setTeam] = useState([]);
  useEffect(() => {
    fetch("/Data/teams.json")
      .then((res) => res.json())
      .then((data) => {
        setTeam(data);
      });
  }, []);
  return (
    <div
      id="team"
      className="min-h-screen w-full bg-team bg-cover flex flex-col justify-evenly items-center"
    >
      <h1
        data-aos="fade-up"
        className="text-6xl mt-20 font-semibold flex text-blackish"
      >
        Our <p className="ml-5 text-blue-500">T</p>
        <p className="text-red-500">e</p>
        <p className="text-green-500">a</p>
        <p className="text-yellow-500">m</p>
        <p className="text-yellow-700">s</p>
      </h1>
      <div
        style={{ height: 70 + "vh" }}
        className="min-w-full gap-10 p-10 grid grid-cols-4 place-items-center"
      >
        {team.length > 0
          ? team.map((member, index) => {
              return (
                <div
                  key={index}
                  className={`w-full cursor-pointer bg-gray-400 hover:scale-110 h-full rounded-xl transition-all bg-cover bg-opacity-70 flex justify-center items-center text-4xl text-lightblack`}
                >
                  <p>{member.name}</p>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}
