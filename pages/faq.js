import { AiFillCaretDown } from "react-icons/ai";
import Navbar from "../src/components/faq/Navbar";

const Faq = ({ data }) => {
  return (
    <div className="select-none min-h-screen w-screen">
      <Navbar />
      <div className="h-screen w-screen flex flex-col p-40 justify-center items-start">
        <h1 className="text-6xl mt-36 text-blackish font-semibold text-start">
          Frequently asked questions <br />
          <p className="text-lg mt-3 text-start">
            Need Answers? Everything you need to know
          </p>
        </h1>
        <div className="w-screen min-h-full mt-16">
          {data
            ? data.map((item, index) => {
                return (
                  <div key={index} className="flex mb-3 flex-col w-2/3">
                    <div
                      key={index}
                      onClick={(e) => {
                        const content = e?.target?.parentElement?.children[1];
                        content?.classList?.toggle("hidden");
                        const icon = e?.target?.children[1];
                        icon?.classList?.toggle("rotate-180");
                      }}
                      className="w-full h-16 p-2 cursor-pointer border-b-2 border-blackish flex justify-between items-center"
                    >
                      <span className="text-2xl text-blackish font-semibold">
                        {item.question}
                      </span>
                        <AiFillCaretDown id="icons" className="text-2xl text-blackish" />
                    </div>
                    <div
                      id="content"
                      className="w-full p-5 rounded-lg my-3 bg-slate-200 hidden"
                    >
                      {item.answer}
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}

export default Faq;

// get server side props
export async function getServerSideProps() {
  const res = await fetch(
    "https://raw.githubusercontent.com/gdscwow/Data-23/main/json/faq.json"
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
