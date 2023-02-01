/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import { AiFillCaretDown } from "react-icons/ai";
import { BsCalendar2DateFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
export default function RegionsPage() {
  const router = useRouter();
  const { region } = router.query;
  const { where } = router.query;
  const { hero } = router.query;
  const [regionData, setRegionData] = useState([]);
  useEffect(() => {
    if (where) {
      console.log(where);
      setRegionData(JSON.parse(where));
    }
    const main = document.getElementById("main");
    if (main) {
      main.style.backgroundImage = `url(${hero})`;
    }
  }, [hero, where]);

  useEffect(() => {
    // warn user to scroll if he doesn't for 5 seconds
    const scrollDown = document.getElementById("scrollDown");
    const timer = setTimeout(() => {
      scrollDown.classList.remove("hidden");
    }
    , 5000);
    window.addEventListener("scroll", () => {
      clearTimeout(timer);
      scrollDown.classList.add("hidden");
    });
  }, [])
  if (router) {
    return (
      <div id='container' className="overflow-hidden font-GoogleSans min-h-screen w-screen p-0 m-0">
        <Link title="Go home" className="fixed p-5" href='/'>
          <Image
            src="/Assets/Images/Logo.png"
            className="cursor-pointer animate-spin-slow"
            width={50}
            height={50}
            alt="logo"
          />{" "}
        </Link>
        <div
          className="max-md:bg-contain max-md:bg-fuchsia-300 bg-no-repeat h-screen overflow-hidden w-screen flex flex-col justify-end items-center bg-center"
          id="main"
        >
          <span id="scrollDown" className="hidden text-2xl fixed z-50 top-100 bg-pinkish justify-center items-center gap-3 animate-bounce p-3 my-3 rounded-xl">
            Scroll Down <AiFillCaretDown className="inline-flex" />
          </span>
        </div>
        <div className="h-screen w-screen flex flex-col bg-about bg-cover justify-evenly items-center">
          <h1 className="max-md:text-3xl flex justify-center items-center gap-3 text-6xl text-blackish">
            This year we&apos;ve achieved
          </h1>
          <div className="max-md:grid-flow-row max-md:h-96 grid grid-flow-col text-black gap-8 place-items-center h-44 w-3/4 rounded-3xl transition-all hover:scale-105 cursor-pointer duration-500 hover:border-black border-4 custom-faq-shadow" style={{backgroundColor: '#FABD2D'}}>
            <div className="max-md:w-4/5 max-md:h-full flex flex-col w-full h-4/5 justify-evenly text-center">
              <h1 className="max-md:text-4xl text-6xl font-bold">1000+</h1>
              <p className="text-xl font-semibold">Registrations</p>
            </div>
            <div className="max-md:w-4/5 max-md:h-full flex max-md:border-y-4 max-md:border-x-0 border-x-4 border-black flex-col w-full h-4/5 text-center justify-evenly">
              <h1 className="max-md:text-4xl text-6xl font-bold">20+</h1>
              <p className="text-xl font-semibold">GDSC</p>
            </div>
            <div className="max-md:w-4/5 max-md:h-full flex flex-col w-full h-4/5 text-center justify-evenly">
              <h1 className="max-md:text-4xl text-6xl font-bold">22K+</h1>
              <p className="text-xl font-semibold">Students</p>
            </div>
          </div>
          
        </div>
        <div className="h-screen bg-team bg-bottom w-screen flex flex-col justify-evenly items-center">
          <h1 className="max-md:text-4xl flex justify-center items-center gap-3 text-6xl text-blackish">
            Visit{" "}
            <Image
              src="/Assets/Images/wow.svg"
              height={150}
              width={150}
              className="max-md:h-24 max-md:w-24"
              alt="wow"
            />{" "}
            at {region}
          </h1>
          <div className="w-screen grid grid-flow-col gap-12 place-items-center p-10 h-72 justify-items-center">
            {regionData ? (
              regionData.map((items, key) => {
                return (
                  <div
                    key={key}
                    className="bg-pinkish flex flex-col justify-evenly items-center w-full h-full rounded-xl"
                  >
                    <h1 className="max-md:text-2xl text-3xl text-blackish">{items.where}</h1>
                    <div className="flex justify-center items-center gap-3">
                      <FaMapMarkerAlt className="max-md:text-2xl text-3xl text-blackish" />
                      <p className="max-md:text-2xl text-2xl text-blackish">{items.at}</p>
                    </div>
                    <div className="flex justify-center items-center gap-3">
                      <BsCalendar2DateFill className="max-md:text-2xl text-3xl text-blackish" />
                      <p className="max-md:text-2xl text-2xl text-blackish">{items.date}</p>
                    </div>
                  </div>
                );
              })
            ) : (
              <h1>Region not found</h1>
            )}
          </div>
        </div>
      </div>
    );
  }
  return <h1>Region not found</h1>;
}
