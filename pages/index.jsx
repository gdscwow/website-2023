import Image from 'next/image'
import Navbar from '../src/components/Navbar'
import Hero from '../src/components/Hero'
import About from '../src/components/About'
import Team from '../src/components/Team'
import Regions from '../src/components/Regions'
import Contact from '../src/components/Contact'
import { Link, animateScroll as scroll } from "react-scroll";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Home() {
  const isLive = true;
  const router = useRouter();
  useEffect(() => {
    Aos.init({ duration: 450 });
  }, []);
  if (isLive) {
    return (
      <>
        <Head>
          <title>WOW 2023</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="apple-touch-icon" sizes="180x180" href="/Assets/Images/Logo.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/Assets/Images/Logo.png" />
          <meta name="description" content="Google Developers Student Clubs WOW 2023" />
          <meta name="keywords" content="Google, Developers, Student, Club, WOW, wow, WoW, 2023, GDSC, Developers, Google Developers Student Clubs WOW 2023" />
        </Head>
        <div id="home" className='flex flex-col justify-evenly items-center min-w-screen min-h-screen font-GoogleSans'>
          <Image src="/Assets/Images/circle.svg" className='animate-spin-slow' width={220} height={220} alt="logo" />
          <h1 className='text-5xl text-center text-blackish'>Something is still cooking 🍳<br /><p className='text-3xl'>Thoda sabhar rakhe!</p></h1>
        </div>
      </>
    )
  }
  else {
    return (
      <>
        <Head>
          <title>WOW 2023</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="apple-touch-icon" sizes="180x180" href="/Assets/Images/Logo.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/Assets/Images/Logo.png" />
          <meta name="description" content="Google Developers Student Clubs WOW 2023" />
          <meta name="keywords" content="Google, Developers, Student, Club, WOW, wow, WoW, 2023, GDSC, Developers, Google Developers Student Clubs WOW 2023" />
        </Head>
        <div id="home" className='flex flex-col justify-center items-center min-w-screen min-h-screen font-GoogleSans'>
          <Navbar />
          <Hero />
          <About />
          <Team />
          <Regions />
          <Contact />
        </div>
        <footer className='h-96  min-w-screen p-16 bg-translucent grid grid-cols-3 gap-20 font-GoogleSans'>
          <div className='h-full w-full flex flex-col'>
            <Image src="/Assets/Images/Logo.png" className='animate-spin-slow' height={100} width={100} alt="wow" />
            <p className='mt-5 text-blackish text-2xl'>Google Developers Student Clubs<br />WOW 2023</p>
            <a href='mailto:eamil@gmail.com' className='mt-5 text-blackish text-2xl'>email@gmail.com</a>
          </div>
          <div className='h-full w-full flex flex-col'>
            <p className='mt-5 text-black text-3xl'>Navigation</p>
            <ul className='mt-10 text-2xl text-blackish'>
              <li className="mb-2 cursor-pointer hover:text-black transition ease-in-out duration-300"><Link activeClass="active"
                to="about"
                smooth={true}
                duration={300} >About</Link></li>
              <li className="mb-2 cursor-pointer hover:text-black transition ease-in-out duration-300"><Link activeClass="active"
                to="team"
                smooth={true}
                duration={300} >Team</Link></li>
              <li className="mb-2 cursor-pointer hover:text-black transition ease-in-out duration-300"><Link activeClass="active"
                to="regions"
                smooth={true}
                duration={300} >Regions</Link></li>
              <li className="cursor-pointer hover:text-black transition ease-in-out duration-300"><Link activeClass="active"
                to="sponsor"
                smooth={true}
                duration={300} >Sponsor Us</Link></li>
              <li onClick={() => {
                router.push('/privacy-policy')
              }} className="cursor-pointer hover:text-black transition ease-in-out duration-300">Privacy Policy</li>
            </ul>
          </div>
          <div className='h-full w-full flex flex-col'>
            <p className='mt-5 text-black text-3xl'>Follow Us</p>
            <p className='mt-2 text-blackish text-lg'>Follow us for latest updates!</p>
            <div className='mt-10 flex flex-row'>
              <AiOutlineInstagram className='text-4xl cursor-pointer' />
              <AiOutlineYoutube className='text-4xl ml-5 cursor-pointer' />
            </div>
          </div>
        </footer>
      </>
    )
  }
}
