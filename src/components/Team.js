/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Team() {
  return (
    <div
      id="team"
      className="min-h-screen w-full bg-team bg-cover flex flex-col justify-evenly items-center"
    >
      <h1
        data-aos="fade-up"
        className="max-md:text-5xl text-6xl mt-20 font-semibold flex text-blackish"
      >
        Our <p className="ml-5 text-blue-500">T</p>
        <p className="text-red-500">e</p>
        <p className="text-green-500">a</p>
        <p className="text-yellow-500">m</p>
      </h1>
      <div
        style={{ height: 70 + "vh" }}
        className="max-md:p-5 max-md:flex max-md:text-center max-md:gap-5 min-w-full gap-10 p-10 grid grid-cols-2 place-items-center"
      >
        <div className="flex flex-col">
          <h1 className="max-md:text-3xl max-md:mb-0 text-6xl mb-10 font-semibold text-lightblack">
            More than 200+ GDSC&apos;s <br />
            came together for
          </h1>
          <Image src="Assets/Images/wow.svg" height={300} width={300} alt="WoW"/>
        </div>
        <Image
          src="https://github.com/gdscwow/Data-23/blob/main/clip-brainstorm.gif?raw=true"
          height={400}
          className="max-md:hidden"
          width={400}
          alt="GIF"
        />
      </div>
    </div>
  );
}
