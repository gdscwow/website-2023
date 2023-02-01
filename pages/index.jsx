import Image from "next/image";
import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import About from "../src/components/About";
import Team from "../src/components/Team";
import Regions from "../src/components/Regions";
import Contact from "../src/components/Contact";
import { Link, animateScroll as scroll } from "react-scroll";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import firebase from "../src/services/firebase";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";
import SEO from "../src/components/SEO";

export default function Home() {
  const [isMobile, setisMobile] = useState(false);
  const isLive = false;
  const router = useRouter();
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setisMobile(true);
    }
    if ("pictureInPictureEnabled" in document) {
      window.addEventListener("click", async () => {
        const video = document.getElementById("video");
        if (video !== null) {
          try {
            await video.requestPictureInPicture();
          } catch (error) {
            console.log(error);
          }
        }
      });
    }
    getAnalytics(firebase);
    getPerformance(firebase);
    // if picture in picture is closed
    return document.addEventListener("leavepictureinpicture", () => {
      const video = document.getElementById("video");
      if (video !== null) {
        video.remove();
      }
    });
  }, []);
  if (isLive) {
    return (
      <>
        <SEO />
        <div
          id="home"
          className="flex flex-col justify-evenly items-center min-w-screen min-h-screen font-GoogleSans"
        >
          <Image
            src="/Assets/Images/circle.svg"
            className="animate-spin-slow"
            width={220}
            height={220}
            alt="logo"
          />
          <h1 className="text-5xl text-center text-blackish">
            Something is still cooking 🍳
            <br />
            <p className="text-3xl">Thoda sabhar rakhe!</p>
          </h1>
        </div>
      </>
    );
  } else {
    return (
      <>
        <SEO />
        {!isMobile ? (
          <div className="-z-40 hidden">
            <video
              src="https://github.com/gdscwow/Data-23/blob/main/Meet%20GDSC%20WOW%20-%20The%20Student%20Driven%20Event%20of%20the%20Year.mp4?raw=true"
              autoPlay
              id="video"
              controls
            ></video>
          </div>
        ) : null}
        <div
          id="home"
          className="max-md:overflow-hidden flex flex-col justify-center items-center min-w-screen min-h-screen font-GoogleSans"
        >
          <Navbar />
          <Hero />
          <About />
          <Team />
          <Regions />
          <Contact />
        </div>
        <footer className="max-md:gap-5 max-md:p-5 h-96  min-w-screen p-16 bg-translucent grid grid-cols-3 gap-20 font-GoogleSans">
          <div className="h-full w-full flex flex-col">
            <Image
              loading="lazy"
              src="/Assets/Images/Logo.png"
              className="animate-spin-slow max-md:h-16 max-md:w-16"
              height={100}
              width={100}
              alt="wow"
            />
            <p className="mt-5 text-blackish text-2xl max-md:text-lg">
              Google Developers Student Clubs
              <br />
              WOW 2023
            </p>
            <a
              href="mailto:eamil@gmail.com"
              className="mt-10 max-md:mt-16 max-md:text-lg text-blackish text-2xl"
            >
              email@gmail.com
            </a>
          </div>
          <div className="h-full w-full flex flex-col">
            <p className="mt-5 text-black text-3xl max-md:text-lg">
              Navigation
            </p>
            <ul className="mt-10 text-2xl max-md:text-lg text-blackish">
              <li className="mb-2 cursor-pointer max-md:mb-1 hover:text-black transition ease-in-out duration-300">
                <Link
                  activeClass="active"
                  to="about"
                  smooth={true}
                  duration={300}
                >
                  About
                </Link>
              </li>
              <li className="mb-2 cursor-pointer max-md:mb-1 hover:text-black transition ease-in-out duration-300">
                <Link
                  activeClass="active"
                  to="team"
                  smooth={true}
                  duration={300}
                >
                  Team
                </Link>
              </li>
              <li className="mb-2 cursor-pointer max-md:mb-1 hover:text-black transition ease-in-out duration-300">
                <Link
                  activeClass="active"
                  to="regions"
                  smooth={true}
                  duration={300}
                >
                  Regions
                </Link>
              </li>
              <li className="mb-2 cursor-pointer max-md:mb-1 hover:text-black transition ease-in-out duration-300">
                <Link
                  activeClass="active"
                  to="sponsor"
                  smooth={true}
                  duration={300}
                >
                  Sponsor Us
                </Link>
              </li>
              <li
                onClick={() => {
                  router.push("/privacy-policy");
                }}
                className="cursor-pointer max-md:mb-1 hover:text-black transition ease-in-out duration-300"
              >
                Privacy Policy
              </li>
            </ul>
          </div>
          <div className="h-full w-full flex flex-col">
            <p className="mt-5 text-black text-3xl max-md:text-lg">Follow Us</p>
            <p className="mt-2 text-blackish text-lg max-md:mt-10">
              Follow us for latest updates!
            </p>
            <div className="mt-10 flex flex-row">
              <AiOutlineInstagram className="text-4xl cursor-pointer" />
              <AiOutlineYoutube className="text-4xl ml-5 cursor-pointer" />
            </div>
          </div>
        </footer>
      </>
    );
  }
}
