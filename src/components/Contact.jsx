import { FaQuestion } from "react-icons/fa";
import { SiGithubsponsors } from "react-icons/si";
import { IoMdContacts } from "react-icons/io";
import { FcStatistics } from "react-icons/fc";
import Link from "next/link";

export default function Contact() {
    return (
        <div id="sponsor" className="min-h-screen w-full flex flex-col justify-evenly items-center transition ease-in-out duration-300">
            <h1 data-aos="fade-up" className="text-5xl text-blackish">Join our rollercoaster journey 🎢</h1>
            <div className="w-5/6 grid grid-cols-3 h-36 gap-12">
                <div data-aos="fade-up" className="hover:shadow-green-300 shadow-xl select-none h-full w-full flex flex-col justify-evenly items-center rounded-xl bg-pinkish cursor-pointer">
                    <h1 className="text-2xl text-navyblue">FAQs</h1>
                    <h1 className="text-4xl"><FaQuestion /></h1>
                </div>
                <div data-aos="fade-up" className="hover:shadow-red-300 shadow-xl select-none h-full w-full flex flex-col justify-evenly items-center rounded-xl bg-pinkish cursor-pointer">
                    <h1 className="text-2xl text-navyblue">Sponsor Us</h1>
                    <SiGithubsponsors className="text-4xl" />
                </div>
                <div data-aos="fade-up" className="hover:shadow-blue-300 shadow-xl select-none h-full w-full flex flex-col justify-evenly items-center rounded-xl bg-pinkish cursor-pointer">
                    <h1 className="text-2xl text-navyblue">Contact Us</h1>
                    <IoMdContacts className="text-4xl" />
                </div>
            </div>
            <Link href='/statistics'  data-aos="fade-up" className="hover:shadow-amber-600 shadow-xl select-none h-36 w-5/6 flex flex-col justify-evenly items-center rounded-xl bg-pinkish cursor-pointer">

                    <h1 className="text-2xl text-navyblue">View Previous Statistics</h1>
                    <h1 className="text-4xl"><FcStatistics /></h1>
            </Link>
        </div>
    )
}