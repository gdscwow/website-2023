import { Html, Head, Main, NextScript } from "next/document";
import Image from "next/image";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div
          id="globalLoader"
          className="h-screen w-screen flex-col z-50 flex justify-evenly items-center"
        >
          <Image
            src="/Assets/Images/circle.svg"
            className="animate-spin-slow"
            height={200}
            width={200}
            alt="Loading"
          />
          <h1 className="text-3xl text-blackish font-semibold">Loading...</h1>
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
