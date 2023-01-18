/* eslint-disable @next/next/no-html-link-for-pages */
import Image from 'next/image'

export default function Custom404() {
    return (
        <div className="min-w-screen min-h-screen flex flex-col justify-evenly items-center">
            <div className='flex justify-center items-center gap-4'>
                <Image src="/Assets/Images/4blue.svg" height={100} width={100} alt='4' />
                <Image src="/Assets/Images/Logo.png" className='animate-spin-slow' height={150} width={150} alt='4' />
                <Image src="/Assets/Images/4orange.svg" height={100} width={100} alt='4' />
            </div>
            <p className='text-center text-4xl font-GoogleSans text-blackish'>Page Not Found :(<br />You sure you reached to correct address?</p>
            {/* {back to home button} */}
            <a href='/' className='text-blackish cursor-pointer text-2xl hover:text-black transition ease-in-out duration-300'>Click here to Go Back :)</a>
        </div>
    )
}