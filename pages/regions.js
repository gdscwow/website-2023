import { useEffect, useState } from "react";
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
import Image from "next/image";
import { useRouter } from "next/router";

const Regions = ({ regions, india }) => {
  const [region, setRegion] = useState(null);
  const router = useRouter();
  return (
    <div className="flex gap-28 justify-center items-center h-screen w-screen">
      <div
        className="cursor-pointer absolute top-5 left-3 flex gap-2 justify-center items-center"
        onClick={() => {
          router.push("/");
        }}
      >
        <Image
          src="/Assets/Images/circle.svg"
          height={70}
          className="animate-spin-slow hover:animate-bounce transition-all"
          width={70}
          alt="wow"
        />
        <p className="text-xl text-blackish">Go home</p>
      </div>
      <div style={{ width: 35 + "%" }} className="fixed left-48 w-2/3">
        <SVGMap
          onLocationMouseOver={(event) => {
            const currentState = event.target
            const location = event.target.getAttribute("name");
            currentState.parentNode.childNodes.forEach((state) => {
              state.classList.remove("active-state")
            })
            currentState.classList.add("active-state")
            console.log(location);
            regions.forEach((item) => {
              if (item.name === location) {
                setRegion(item.name);
              }
            });
          }}
          map={india}
        />
      </div>
      <div className="fixed right-28 flex flex-col h-full justify-center items-center text-center w-auto">
        <h1 className="text-4xl mb-16 text-blackish">Click your region :)</h1>
        {region && region !== null ? (
          <h1 className="flex text-4xl text-blackish">
            {region} have{" "}
            <Image
              src="/Assets/Images/wow.svg"
              className="ml-3"
              height={100}
              width={100}
              alt="wow"
            />
          </h1>
        ) : null}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    "https://raw.githubusercontent.com/gdscwow/Data-23/main/json/regions.json"
  );
  const regions = await res.json();
  const map = await fetch(
    "https://raw.githubusercontent.com/gdscwow/Data-23/main/json/india.json"
  );
  const india = await map.json();
  return {
    props: {
      regions,
      india,
    },
  };
}

export default Regions;
