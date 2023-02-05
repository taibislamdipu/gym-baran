import Image from "next/image";
import React from "react";
import { BsImage } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-[#1C3764] py-20">
      <div className="container mx-auto space-y-10 px-4 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
          <div className="col-span-1 space-y-6  md:col-span-2">
            <div>
              <Image
                src="https://i.ibb.co/RB6rxmV/footer-Logo.png"
                width="154"
                height="52"
                alt="logo"
              />
            </div>
            <p className="text-gray-400">
              We take care of your health with <br /> regular and fun exercise
            </p>
            <div className="flex gap-3">
              <div className="bg-[#E275CD] p-2 md:p-4">
                <BsImage color="white" size={20} />
              </div>
              <div className="bg-[#E275CD] p-2 md:p-4">
                <BsImage color="white" size={20} />
              </div>
              <div className="bg-[#E275CD] p-2 md:p-4">
                <BsImage color="white" size={20} />
              </div>
              <div className="bg-[#E275CD] p-2 md:p-4">
                <BsImage color="white" size={20} />
              </div>
              <div className="bg-[#E275CD] p-2 md:p-4">
                <BsImage color="white" size={20} />
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <ul className="space-y-4 text-gray-400">
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
            <ul className="space-y-4 text-gray-400">
              <li>
                <h3 className="text-white">About Us</h3>
              </li>
              <li>Support</li>
              <li>Contact</li>
              <li>Address</li>
            </ul>
          </div>
          <div className="col-span-1">
            <ul className="space-y-4 text-gray-400">
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
