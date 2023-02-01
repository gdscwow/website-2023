import { AiFillCaretDown } from "react-icons/ai";
import Navbar from "../src/components/faq/Navbar";
import { useEffect, useState } from "react";

const Faq = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/gdscwow/Data-23/main/json/faq.json"
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
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
                        e.stopPropagation();
                        const parent = e.target.parentElement;
                        const answer = parent.children[1];
                        console.log(answer);
                        if (answer) {
                          answer.classList.add("animate-fade-in"); 
                          answer.classList.toggle("hidden");
                          answer.innerHTML = item.answer;
                          return;
                        }
                      }}
                      className="w-full h-16 p-2 cursor-pointer border-b-2 border-blackish flex justify-between items-center"
                    >
                      <span className="text-2xl text-blackish font-semibold">
                        {item.question}
                      </span>
                      <AiFillCaretDown
                        id="icons"
                        className="text-2xl text-blackish"
                      />
                    </div>
                    <div
                      key={index}
                      id="answer"
                      className="transition-all w-full p-5 rounded-lg my-3 bg-slate-200 hidden"
                    ></div>

                    {/* <div
                      id="content"
                      className="w-full p-5 rounded-lg my-3 bg-slate-200 hidden"
                    >
                      {item.answer}
                    </div> */}
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default Faq;
