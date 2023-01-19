import Image from "next/image";
import { RxCross1 } from "react-icons/rx";
import { useRef, useState, useEffect } from "react";
export default function Regions() {
  const [permissions, setPermissions] = useState(false);
  const [shown, isShown] = useState(false);
  const [region, setRegion] = useState("");
  const inputRef = useRef(null);
  useEffect(() => {
    if (navigator.geolocation) {
      setPermissions(true);
    }
    console.log(
      navigator.geolocation.getCurrentPosition(async (position) => {
        await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            fetch("/Data/regions.json")
              .then((res) => res.json())
              .then((datas) => {
                datas.forEach((item) => {
                  if (item.name === data.principalSubdivision) {
                    setRegion(item.name);
                  }
                });
              });
          });
      })
    );
  }, []);
  useEffect(() => {
    if (inputRef.current?.value !== "") {
      isShown(true);
    } else {
      isShown(false);
    }
  }, [shown]);

  if (permissions && region !== "") {
    return (
      <div
        id="regions"
        className="min-h-screen min-w-screen flex flex-col justify-center items-center"
      >
        <div className="flex flex-col justify-center items-center">
          <p
            data-aos="fade-up"
            className="font-GoogleSans flex text-6xl text-blackish text-semibold"
          >
            {region} have{" "}
            <Image
              className="mr-3 ml-3 "
              src="Assets/Images/wow.svg"
              height={120}
              width={120}
              alt="wow"
            />{" "}
            near you 😁
          </p>
          <div className="flex justify-center items-center gap-10 mt-36">
            <div className="active:scale-95 transition-all flex flex-col justify-center items-center w-80 h-28 text-center select-none cursor-pointer rounded-3xl bg-pinkish">
              <p className="text-3xl text-white">
                Take me to {region}&apos;s page!
              </p>
            </div>
            <div className="active:scale-95 transition-all flex flex-col justify-center items-center w-80 h-28 text-center select-none cursor-pointer rounded-3xl bg-pinkish">
              <p className="text-3xl text-white">
                View all <br />
                Region&apos;s!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      id="regions"
      className="min-h-screen min-w-screen flex flex-col justify-center items-center"
    >
      <div className="flex flex-col justify-center items-center">
        <p
          data-aos="fade-up"
          className="font-GoogleSans flex text-6xl text-blackish text-semibold"
        >
          Find a{" "}
          <Image
            className="mr-3 ml-3 "
            src="Assets/Images/wow.svg"
            height={120}
            width={120}
            alt="wow"
          />{" "}
          near you 😁
        </p>
        <div data-aos="fade-up" className="flex justify-center items-center">
          <Image
            className="mt-16 mr-2"
            src="/Assets/Images/Arrow.svg"
            height={50}
            width={50}
            alt="arrow"
          />
          <input
            ref={inputRef}
            style={{ width: 756 + "px" }}
            className="mt-10 h-12 outline-none p-5 text-lg border-b-2 border-blackish"
            type="text"
            placeholder="Enter your location"
          />
          {shown ? (
            <RxCross1
              onClick={() => {
                inputRef.current.value = "";
              }}
              className="mt-10 cursor-pointer ml-5 text-2xl"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
