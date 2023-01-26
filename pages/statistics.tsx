import AnimatedNumberCounter from "../src/components/AnimatedNumberCounter";
import PieChart from "../src/components/Charts/PieChart";
import axios from "axios";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import Image from "next/image";
import { groupBy } from "../src/utils/methods";
import SEO from "../src/components/SEO";

const Statistics: NextPage = ({ collabData, speakersData }: any) => {
  const router = useRouter();
  return (
    <>
      <SEO
        title="Statistics | GDSC WOW"
        description="Google Developers Student Clubs WOW 2023 Statistics"
      />
      <div className="statistics snap-mandatory snap-y scroll-smooth">
        <main>
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
          <div className="columns-1 snap-center flex flex-col items-center justify-center min-h-screen w-full">
            {/* <h1 className="text-5xl mb-5 py-4 font-light">
              Google Developer Student Clubs
            </h1>
            <Image
              src="/Assets/images/wow.svg"
              alt="GDSC WOW Logo"
              width={500}
              height={200}
            /> */}
            <div className="flex flex-col w-screen justify-center items-center">
              <Image
                src="/Assets/Images/heronoo.svg"
                width={650}
                height={500}
                alt="logo"
              />
              <Image
                src="/Assets/Images/circle.svg"
                className="absolute animate-spin-slow"
                width={220}
                height={220}
                alt="logo"
              />
            </div>
            <h1 className="text-5xl py-4 mb-16 font-extrabold text-slate-900">
              Statistics
            </h1>

            {/* down arrow */}

            <p className="text-sm font-normal animate-bounce flex items-center absolute bottom-16">
              <Image
                src="/Assets/svg/down-angle.svg"
                alt="Down Arrow"
                width={30}
                height={30}
              />
              Scroll down to see various statistics
            </p>
          </div>
          <div className="flex relative snap-center justify-center min-h-screen w-full">
            <div className="w-2/4 h-full min-h-screen flex flex-col">
              <div className="flex items-center mt-28">
                <p className="text-xl bg-red-600 px-16 py-1 font-medium text-white ">
                  Timeline{" "}
                </p>
                <p className="ml-16 text-2xl font-medium text-slate-900">
                  25th - 27th Feb 2022
                </p>
              </div>

              <div className="flex flex-col w-4/5 px-18 mx-auto mt-28 justify-center">
                <div className="flex px-7">
                  <p className="font-extrabold text-3xl text-red-600">{"<>"}</p>
                  <p className="ml-8 text-3xl font-medium text-slate-900">
                    3 Days
                  </p>
                </div>
                <div className="flex px-7 mt-4">
                  <p className="font-extrabold text-3xl text-blue-600">{"<>"}</p>
                  <p className="ml-8 text-3xl font-medium text-slate-900">
                    200+ GDSCs
                  </p>
                </div>
                <div className="flex px-7 mt-4">
                  <p className="font-extrabold text-3xl text-amber-500">{"<>"}</p>
                  <p className="ml-8 text-3xl font-medium text-slate-900">
                    7 Technologies
                  </p>
                </div>
                <div className="flex px-7 mt-4">
                  <p className="font-extrabold text-3xl text-green-600">{"<>"}</p>
                  <p className="ml-8 text-3xl font-medium text-slate-900">
                    15 Experts
                  </p>
                </div>
                <div className="flex mt-4 px-7">
                  <p className="font-extrabold text-3xl text-red-600">{"<>"}</p>
                  <p className="ml-8 text-3xl font-medium text-slate-900">
                    8 Sponsors
                  </p>
                </div>
              </div>
            </div>
            <div className="w-2/4 h-screen flex items-center justify-center">
              <Image
                src="/Assets/svg/stat-header.svg"
                alt="Statistics Header"
                width={700}
                height={700}
              />
            </div>
            <p className="text-sm font-normal animate-bounce flex items-center absolute bottom-16">
              <Image
                src="/Assets/svg/down-angle.svg"
                alt="Down Arrow"
                width={30}
                height={30}
              />
              Scroll down to see more statistics
            </p>
          </div>

          <div className="flex flex-col mt-5 px-20 relative snap-center min-h-screen w-full">
            <div className="flex justify-between mt-3 gap-10 w-full">
              <div className="flex flex-col items-center justify-center">
                <div className="flex gap-5 border px-4 py-2 rounded-lg items-center justify-center">
                  <Image
                    src="/Assets/svg/youtube-play-icon.svg"
                    alt="Youtube"
                    width={100}
                    height={100}
                    loading="lazy"
                  />

                  <div className="flex flex-col items-center justify-center">
                    <p className="text-3xl font-medium text-slate-900">
                      <AnimatedNumberCounter countTo={110} />
                      k+
                    </p>
                    <p className="text-xl font-medium text-slate-900">
                      Live Engagements
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-5 border px-4 py-2 rounded-lg items-center justify-center">
                <Image
                  src="/Assets/svg/social-media-icon.png"
                  alt="Social Media"
                  width={100}
                  height={85}
                  loading="lazy"
                />

                <div className="flex flex-col items-center justify-center">
                  <p className="text-3xl font-medium text-slate-900">
                    <AnimatedNumberCounter countTo={15} />
                    k+
                  </p>
                  <p className="text-xl font-medium text-slate-900">Followers</p>
                </div>
              </div>
              <div className="flex gap-5 border px-4 py-2 rounded-lg items-center justify-center">
                <Image
                  src="/Assets/svg/website-icon.png"
                  alt="Website Icon"
                  width={100}
                  height={85}
                  loading="lazy"
                />

                <div className="flex flex-col items-center justify-center">
                  <p className="text-3xl font-medium text-slate-900">
                    <AnimatedNumberCounter countTo={60} />
                    k+
                  </p>
                  <p className="text-xl font-medium text-slate-900">
                    Website Clicks
                  </p>
                </div>
              </div>
              <div className="flex gap-5 border px-4 py-2 rounded-lg items-center justify-center">
                <Image
                  src="/Assets/svg/registrations-icon.png"
                  alt="Registerations Icon"
                  width={100}
                  height={85}
                  loading="lazy"
                />

                <div className="flex flex-col items-center justify-center">
                  <p className="text-3xl font-medium text-slate-900">
                    <AnimatedNumberCounter countTo={16} />
                    k+
                  </p>
                  <p className="text-xl font-medium text-slate-900">
                    Registrations
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-8 pb-3 gap-10 w-full">
              <div className="flex flex-col  gap-5 w-1/3 p-3 border px-4 py-2 rounded-lg items-center justify-center">
                <p className="text-3xl mt-3 font-medium text-slate-900">
                  GDSC INDIA Chapter State
                </p>
                <PieChart
                  data={
                    collabData && {
                      labels: Object.keys(
                        groupBy(
                          collabData,
                          (v) => (v as any)["GDSC Chapter State"]
                        )
                      ),
                      datasets: [
                        {
                          label: "GDSC Chapters",
                          data: Object.values(
                            groupBy(
                              collabData,
                              (v) => (v as any)["GDSC Chapter State"]
                            )
                          ).map((v) => v.length),
                          backgroundColor: Array.from(
                            Object.keys(
                              groupBy(
                                collabData,
                                (v) => (v as any)["GDSC Chapter State"]
                              )
                            )
                          ).map(
                            (v) =>
                              `rgba(${Math.floor(
                                Math.random() * 255
                              )}, ${Math.floor(
                                Math.random() * 255
                              )}, ${Math.floor(Math.random() * 255)}, 1)
                                  `
                          ),
                          borderWidth: 0,
                        },
                      ],
                    }
                  }
                  text="200+ GDSC Chapters"
                />
              </div>

              <div className="flex flex-col w-1/4 gap-5 p-3 border px-5 py-2 rounded-lg ">
                {/* table   */}
                <p className="text-3xl mt-5 text-center font-medium text-slate-900">
                  Speakers
                </p>
                <div className="flex mt-10 flex-col gap-5">
                  {speakersData &&
                    Object.keys(
                      groupBy(speakersData, (v) => (v as any).topic)
                    ).map((v, i) => (
                      <div className="flex justify-between px-5" key={i * 54}>
                        <p className=" font-medium text-slate-900">{v}</p>
                        <p className="text-xl font-medium text-slate-900">
                          {
                            groupBy(speakersData, (v) => (v as any).topic)[v]
                              .length
                          }
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export async function getStaticProps() {
  // get file from github repo

  const collabData = await axios.get(
    "https://raw.githubusercontent.com/gdscwow/Data/main/Collab.json"
  );

  const speakersData = await axios.get(
    "https://raw.githubusercontent.com/gdscwow/Data/main/speaker.json"
  );

  const dataCollab = collabData.data;
  const dataSpeakers = speakersData.data;

  return {
    props: {
      collabData: dataCollab,
      speakersData: dataSpeakers.data,
    },
  };
}

export default Statistics;
