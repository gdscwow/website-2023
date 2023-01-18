import Image from "next/image"

export default function About() {
    return(
        <div id='about' className="min-h-screen w-full flex justify-evenly items-center flex-col bg-about bg-cover">
            <h1 data-aos="fade-up" className="text-6xl inline-flex justify-center items-center text-black">What is <Image src="/Assets/Images/wow.svg" className="ml-5 mt-3 inline-flex" height={250} width={250} alt="wow"/></h1>
            <p data-aos="fade-up" className="w-4/5 text-2xl text-blackish text-center">GDSC (Wonder Of Wonders), aka GDSC WOW is a collaborative event of 200+ GDSCs from India, who have joined hands to bring together students, developers, and communities under the same roof. This event will act as a platform to attain knowledge and work on projects with experts in real-time. It will help beginners take a step towards their technical careers.</p>
        </div>
    )
}