import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";

export default function Regions() {
  const [permissions, setPermissions] = useState(false);
  const [shown, isShown] = useState(false);
  const [region, setRegion] = useState("");
  const [homepage, setHomepage] = useState("");
  const [where, setWhere] = useState("");
  const [hero, setHero] = useState("");
  const inputRef = useRef(null);
  useEffect(() => {
    if (navigator.geolocation) {
      setPermissions(true);
    }
    navigator.geolocation.getCurrentPosition(async (position) => {
      await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`
      )
        .then((res) => res.json())
        .then((data) => {
          fetch("/Data/regions.json")
            .then((res) => res.json())
            .then((datas) => {
              console.log(datas);
              datas.forEach((item) => {
                if (item.name === data.principalSubdivision) {
                  setRegion(item.name);
                  setHomepage(item.homepage);
                  setHero(item.hero);
                  console.log(item.where);
                  setWhere(JSON.stringify(item.where));
                }
              });
            });
        });
    });
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
            className="max-md:text-4xl font-GoogleSans flex text-6xl text-blackish text-semibold"
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
            <Link
              href={{
                pathname: homepage,
                query: {
                  region: region,
                  hero: hero,
                  where: where,
                },
              }}
            >
              <div className="custom-button-hover custom-button hover:scale-105 duration-500 hover:bg-deep transition-all flex flex-col justify-center items-center w-80 h-28 text-center select-none cursor-pointer rounded-3xl bg-pinkish">
                <p className="text-3xl text-navyblue">
                  Take me to <br />
                  {region}&apos;s Page!
                </p>
              </div>
            </Link>
            <Link href="/regions">
              <div className="custom-button-hover custom-button transition-all hover:scale-105 duration-500 hover:bg-deep flex flex-col justify-center items-center w-80 h-28 text-center select-none cursor-pointer rounded-3xl bg-pinkish">
                <p className="text-3xl text-navyblue">
                  View all <br />
                  Region&apos;s!
                </p>
              </div>
            </Link>
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
      <div className="flex flex-col">
        <p
          data-aos="fade-up"
          className="font-GoogleSans flex text-6xl text-blackish text-semibold max-md:text-2xl max-md:text-center"
        >
          Can&apos;t find
          <br />{" "}
          <Image
            className="max-md:h-16 max-md:w-16 max-md:mr-2 max-md:ml-2 mr-3 ml-3 "
            src="Assets/Images/wow.svg"
            height={120}
            width={120}
            alt="wow"
          />{" "}
          near you 🥹
        </p>
        <div className="flex justify-center items-center gap-10 mt-36">
          <Link href="/regions">
            <div className="active:scale-95 transition-all flex flex-col justify-center items-center w-80 h-28 text-center select-none cursor-pointer rounded-3xl bg-pinkish">
              <p className="text-3xl text-white">
                View all <br />
                Region&apos;s!
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
