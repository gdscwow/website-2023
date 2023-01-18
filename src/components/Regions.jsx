import Image from "next/image"

export default function Regions() {
    return(
        <div id="regions" className="min-h-screen min-w-screen flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <p data-aos="fade-up" className="flex text-5xl text-black text-semibold">Find a <Image className="mr-3 ml-3 mt-3" src="Assets/Images/wow.svg" height={100} width={100} alt="wow"/> near you 😁</p>
                <div data-aos="fade-up" className="flex justify-center items-center"><Image className="mt-10 mr-2" src="/Assets/Images/Arrow.svg" height={50} width={50} alt="arrow"/><input style={{width: 756+'px'}} className="mt-10 h-12 appearance-none  border-b-2 border-blackish" type="text" placeholder="Enter your location"/></div>
            </div>
        </div>
    )
}