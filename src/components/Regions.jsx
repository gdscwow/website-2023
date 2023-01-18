import Image from "next/image"
import { RxCross1 } from "react-icons/rx"
import { useRef, useState, useEffect } from "react"
export default function Regions() {
    const[shown, isShown] = useState(false)
    const inputRef = useRef(null)
    useEffect(() => {
        if(inputRef.current.value !== "") {
            isShown(true)
        }
        else {
            isShown(false)
        }
    }, [shown])
    return (
        <div id="regions" className="min-h-screen min-w-screen flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <p data-aos="fade-up" className="font-GoogleSans flex text-6xl text-lightblack text-semibold">Find a <Image className="mr-3 ml-3 " src="Assets/Images/wow.svg" height={120} width={120} alt="wow" /> near you 😁</p>
                <div data-aos="fade-up" className="flex justify-center items-center"><Image className="mt-16 mr-2" src="/Assets/Images/Arrow.svg" height={50} width={50} alt="arrow" /><input ref={inputRef} style={{ width: 756 + 'px' }} className="mt-10 h-12 outline-none p-5 text-lg border-b-2 border-blackish" type="text" placeholder="Enter your location" />
                {shown ? <RxCross1 onClick={() => {
                    inputRef.current.value = ""
                }} className="mt-10 cursor-pointer ml-5 text-2xl"/> : null}
                </div>
            </div>
        </div>
    )
}