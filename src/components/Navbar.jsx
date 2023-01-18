import Image from "next/image"
import * as Scroll from "react-scroll";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Navbar() {
    return (
        <nav className="backdrop-blur-xl z-50 top-0 fixed flex justify-center items-center w-screen h-24">
            <Link activeClass="active"
                to="home"
                smooth={true}
                duration={300}>
                <Image src="/Assets/Images/Logo.png" className="absolute left-10 top-5 cursor-pointer animate-spin-slow" width={50} height={50} alt="logo" /> </Link>
            <ul className="flex justify-between items-center w-1/3 text-blackish text-2xl">
                <li className="cursor-pointer hover:text-black transition ease-in-out duration-300"><Link activeClass="active"
                    to="about"
                    smooth={true}
                    duration={300} >About</Link></li>
                <li className="cursor-pointer hover:text-black transition ease-in-out duration-300"><Link activeClass="active"
                    to="team"
                    smooth={true}
                    duration={300} >Team</Link></li>
                <li className="cursor-pointer hover:text-black transition ease-in-out duration-300"><Link activeClass="active"
                    to="regions"
                    smooth={true}
                    duration={300} >Regions</Link></li>
                <li className="cursor-pointer hover:text-black transition ease-in-out duration-300"><Link activeClass="active"
                    to="sponsor"
                    smooth={true}
                    duration={300} >Sponsor Us</Link></li>
            </ul>
        </nav>
    )
}