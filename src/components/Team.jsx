export default function Team() {
    return (
        <div id="team" className="min-h-screen w-full bg-team bg-cover flex flex-col justify-evenly items-center">
            <h1 data-aos="fade-up" className="text-6xl font-semibold flex text-lightblack">Our <p className="ml-5 text-blue-500">T</p><p className="text-red-500">e</p><p className="text-green-500">a</p><p className="text-yellow-500">m</p></h1>
            <div data-aos="fade-up" className="h-80 w-full flex justify-center items-center">
                <div className="flex flex-col justify-center items-center text-center">
                    <div className="bg-translucent w-56 h-60 rounded-3xl">
                    </div>
                    <p className="text-blackish text-2xl mt-4">Birat Datta</p>
                </div><div className="ml-10 mr-10 flex flex-col justify-center items-center text-center">
                    <div className="bg-translucent w-56 h-60 rounded-3xl">
                    </div>
                    <p className="text-blackish text-2xl mt-4">Mukul Singh</p>
                </div><div className="flex flex-col justify-center items-center text-center">
                    <div className="bg-translucent w-56 h-60 rounded-3xl">
                    </div>
                    <p className="text-blackish text-2xl mt-4">Tushar Vilekar</p>
                </div>
            </div>
        </div>
    );
}