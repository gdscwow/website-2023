import Image from 'next/image'
import { Link, animateScroll as scroll } from "react-scroll";

export default function Hero() {
    return (
        <div className='w-full h-screen flex justify-center items-center bg-home max-md:bg-center bg-cover'>
            <Image src="/Assets/Images/heronoo.svg" className='max-md:w-72 max-md:h-72' width={650} height={500} alt="logo" />
            <Image src="/Assets/Images/circle.svg" className='absolute animate-spin-slow max-md:w-28 max-md:h-28 mt-3' width={220} height={220} alt="logo" />
            <Link to="about"
                smooth={true}
                duration={300} className='max-md:right-10  text-blackish text-2xl absolute bottom-20 right-40 flex justify-center items-center hover:text-black hover:cursor-pointer transition ease-in-out duration-300'>Find your WoW <Image src="/Assets/Images/Arrow.svg" className='inline-flex ml-5 max-md:w-20 max-md:h-20' height={100} width={100} alt="arrow" /></Link>
        </div>
    )
}