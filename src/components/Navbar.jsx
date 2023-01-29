import Image from "next/image";
import { Link, animateScroll as scroll } from "react-scroll";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IconContext } from "react-icons";
export default function Navbar() {
    const contextMenu = () => {
        const menu = document.getElementById("contextmenu");
        if (menu) {
            menu.classList.toggle("hidden");
        }
    }
    return (
        <>
            <div style={{transform: 'translate(-50%, -50%)'}} className="fixed z-50 top-44 left-1/2 w-screen h-96 hidden bg-black" id="contextmenu">
                <ul className="h-full w-full flex justify-center flex-col items-center text-blackish text-2xl">
                    <li className="cursor-pointer transition ease-in-out duration-300">
                        <Link activeClass="active" to="about" smooth={true} duration={300}>
                            About
                        </Link>
                    </li>
                    <li className="cursor-pointer transition ease-in-out duration-300">
                        <Link activeClass="active" to="team" smooth={true} duration={300}>
                            Team
                        </Link>
                    </li>
                    <li className="cursor-pointer transition ease-in-out duration-300">
                        <Link
                            activeClass="active"
                            to="regions"
                            smooth={true}
                            duration={300}
                        >
                            Regions
                        </Link>
                    </li>
                    <li className="cursor-pointer transition ease-in-out duration-300">
                        <Link
                            activeClass="active"
                            to="sponsor"
                            smooth={true}
                            duration={300}
                        >
                            Sponsor Us
                        </Link>
                    </li>
                </ul>
            </div>
            <nav className="backdrop-blur-xl z-50 top-0 fixed flex justify-between items-center w-screen h-16">
                <Link activeClass="active" to="home" smooth={true} duration={300}>
                    <Image
                        src="/Assets/Images/Logo.png"
                        className="cursor-pointer animate-spin-slow"
                        width={50}
                        height={50}
                        alt="logo"
                    />{" "}
                </Link>
                <IconContext.Provider value={{ className: 'text-amber-400' }}>
                    <HiOutlineMenuAlt3
                        onClick={contextMenu} className="text-4xl mr-2" />
                </IconContext.Provider>
            </nav>
            <nav className="max-md:hidden backdrop-blur-xl z-50 top-0 fixed flex justify-center items-center w-screen h-24">
                <Link activeClass="active" to="home" smooth={true} duration={300}>
                    <Image
                        src="/Assets/Images/Logo.png"
                        className="absolute left-10 top-5 cursor-pointer animate-spin-slow"
                        width={50}
                        height={50}
                        alt="logo"
                    />{" "}
                </Link>
                <ul className="flex justify-between items-center w-1/3 text-blackish text-2xl">
                    <li className="cursor-pointer hover:text-black transition ease-in-out duration-300">
                        <Link activeClass="active" to="about" smooth={true} duration={300}>
                            About
                        </Link>
                    </li>
                    <li className="cursor-pointer hover:text-black transition ease-in-out duration-300">
                        <Link activeClass="active" to="team" smooth={true} duration={300}>
                            Team
                        </Link>
                    </li>
                    <li className="cursor-pointer hover:text-black transition ease-in-out duration-300">
                        <Link
                            activeClass="active"
                            to="regions"
                            smooth={true}
                            duration={300}
                        >
                            Regions
                        </Link>
                    </li>
                    <li className="cursor-pointer hover:text-black transition ease-in-out duration-300">
                        <Link
                            activeClass="active"
                            to="sponsor"
                            smooth={true}
                            duration={300}
                        >
                            Sponsor Us
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}