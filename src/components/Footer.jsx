import Image from "next/image";
import React from "react";
import { BsImage } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-[#1C3764] py-20">
      <div className="container mx-auto md:px-8 px-4 space-y-10">
        <div className="grid md:grid-cols-5 grid-cols-1 gap-10">
          <div className="md:col-span-2 col-span-1  space-y-6">
            <div>
              <Image
                src="/../public/assets/footerLogo.png"
                width="154"
                height="52"
                alt="logo"
              />
            </div>
            <p className="text-gray-400">
              We take care of your health with <br /> regular and fun exercise
            </p>
            <div className="flex gap-3">
              <div className="bg-[#E275CD] md:p-4 p-2">
                <BsImage color="white" size={20} />
              </div>
              <div className="bg-[#E275CD] md:p-4 p-2">
                <BsImage color="white" size={20} />
              </div>
              <div className="bg-[#E275CD] md:p-4 p-2">
                <BsImage color="white" size={20} />
              </div>
              <div className="bg-[#E275CD] md:p-4 p-2">
                <BsImage color="white" size={20} />
              </div>
              <div className="bg-[#E275CD] md:p-4 p-2">
                <BsImage color="white" size={20} />
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <ul className="text-gray-400 space-y-4">
              <li>
                <h3 className="text-white">Program</h3>
              </li>
              <li>Workout</li>
              <li>Gym</li>
              <li>Cardio</li>
              <li>Zumba</li>
            </ul>
          </div>
          <div className="col-span-1">
            <ul className="text-gray-400 space-y-4">
              <li>
                <h3 className="text-white">About Us</h3>
              </li>
              <li>Support</li>
              <li>Contact</li>
              <li>Address</li>
            </ul>
          </div>
          <div className="col-span-1">
            <ul className="text-gray-400 space-y-4">
              <li>
                <h3 className="text-white">Blog</h3>
              </li>
              <li>Daily stretch</li>
              <li>Daily workout</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
