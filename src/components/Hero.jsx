import Image from 'next/image'
import { Link, animateScroll as scroll } from "react-scroll";

export default function Hero() {
    return (
        <div className='w-full h-screen flex justify-center items-center bg-home bg-cover'>
            <Image src="/Assets/Images/heronoo.svg" width={650} height={500} alt="logo" />
            <Image src="/Assets/Images/circle.svg" className='absolute animate-spin-slow' width={220} height={220} alt="logo" />
            <Link to="about"
                smooth={true}
                duration={300} className='text-blackish text-2xl absolute bottom-20 right-40 flex justify-center items-center hover:text-black hover:cursor-pointer transition ease-in-out duration-300'>Find your WoW <Image src="/Assets/Images/Arrow.svg" className='inline-flex ml-5' height={100} width={100} alt="arrow" /></Link>
        </div>
    )
}