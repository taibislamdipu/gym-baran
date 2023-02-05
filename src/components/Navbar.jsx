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
    <div className=" md:bg-[#F8E9FB] bg-white  w-full h-20 z-10">
      <div className="flex justify-between items-center w-full h-full container mx-auto md:px-8 px-4">
        <div>
          <Image
            src="/../public/assets/logo.png"
            alt=""
            width="141"
            height="38"
          />
        </div>
        <div>
          <ul className="hidden md:flex items-center space-x-9">
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
              <li className="text-white bg-blue rounded-[10px] py-2 px-7">
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
          nav ? "md:hidden fixed left-0 top-0 h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500"
              : "fixed left-[-100%] h-screen top-0 p-10 ease-in duration-500"
          }
        >
          <div className="space-y-4">
            <div className="flex justify-between w-full items-center border-b py-4">
              <Image
                src="https://i.ibb.co/MsSc60n/logo.png"
                alt="Logo"
                width="141"
                height="38"
              />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
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
                  <li className="text-white bg-blue rounded-[10px] py-2 px-7 w-fit">
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
