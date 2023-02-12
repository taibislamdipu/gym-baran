import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" z-10 h-20 w-full bg-white md:bg-[#F8E9FB]">
      <div className="container mx-auto flex h-full w-full items-center justify-between px-4 md:px-8">
        <div>
          <Image
            src="https://i.ibb.co/MsSc60n/logo.png"
            alt=""
            width="141"
            height="38"
          />
        </div>
        <div>
          <ul className="hidden items-center space-x-9 md:flex">
            <Link href="/">
              <li className="text-black">Home</li>
            </Link>
            <Link href="#">
              <li className="text-black">Program</li>
            </Link>
            <Link href="#">
              <li className="text-black">Blog</li>
            </Link>
            <Link href="#">
              <li className="text-black">About us</li>
            </Link>
            <Link href="#">
              <li className="rounded-[10px] bg-blue py-2 px-7 text-white">
                Log in
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={24} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "fixed left-0 top-0 h-screen bg-black/70 md:hidden" : ""
        }
      >
        <div
          className={
            nav
              ? " fixed left-0 top-0 z-50 h-screen w-[75%] bg-white p-10 duration-500 ease-in sm:w-[60%] md:w-[45%]"
              : "fixed left-[-100%] top-0 h-screen p-10 duration-500 ease-in"
          }
        >
          <div className="space-y-4">
            <div className="flex w-full items-center justify-between border-b py-4">
              <Image
                src="https://i.ibb.co/MsSc60n/logo.png"
                alt="Logo"
                width="141"
                height="38"
              />
              <div
                onClick={handleNav}
                className="cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="flex flex-col">
              <ul className="space-x-9">
                <Link href="/">
                  <li className="text-black">Home</li>
                </Link>
                <Link href="#">
                  <li className="text-black">Program</li>
                </Link>
                <Link href="#">
                  <li className="text-black">Blog</li>
                </Link>
                <Link href="#">
                  <li className="text-black">About us</li>
                </Link>
                <Link href="/">
                  <li className="w-fit rounded-[10px] bg-blue py-2 px-7 text-white">
                    Log in
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
