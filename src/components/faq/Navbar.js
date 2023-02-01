import Image from "next/image";
import Link from "next/link";

export default function Navbar() {

  return (
    <>
      
      <nav className="backdrop-blur-xl z-50 top-0 fixed flex justify-between items-center w-screen h-16">
        <Link href='/'>
          <Image
            src="/Assets/Images/Logo.png"
            className="cursor-pointer animate-spin-slow"
            width={50}
            height={50}
            alt="logo"
          />{" "}
        </Link>
      </nav>
      <nav className="max-md:hidden backdrop-blur-xl z-50 top-0 fixed flex justify-center items-center w-screen h-24">
        <Link href='/'>
          <Image
            src="/Assets/Images/Logo.png"
            className="absolute left-10 top-5 cursor-pointer animate-spin-slow"
            width={50}
            height={50}
            alt="logo"
          />{" "}
        </Link>
      </nav>
    </>
  );
}
