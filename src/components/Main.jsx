import Image from "next/image";
import React from "react";
import { AiFillPlayCircle, AiFillRightCircle } from "react-icons/ai";

const Main = () => {
  return (
    <div className="max-w-[1240px] w-full h-screen flex justify-center items-center container mx-auto md:px-8 px-4">
      <div className="md:grid grid-cols-2 gap-4 mt-20 space-y-4 md:space-y-0">
        <div className="col-span-1 flex flex-col justify-center space-y-6">
          <h1>
            Healthy in side <br />
            <span className="text-[#8382EB]"> fresh</span> out side
          </h1>
          <p>
            Exercise is a very important need for our body. Health and fitness
            will be obtained if you can do regular exercise and run a healthy
            routine.
          </p>
          <div className="flex gap-4">
            <button className="bg-blue flex items-center px-4 py-3 gap-14 text-white">
              <span>Get Started</span>
              <AiFillRightCircle size={23} />
            </button>

            <button className="bg-white flex items-center px-4 py-3 gap-4 text-blue">
              <AiFillPlayCircle size={23} />
              <span>Learn more</span>
            </button>
          </div>
          <p>Brands:</p>
          <div className="flex md:justify-start justify-between gap-4">
            <img src="assets/nike-logo.png" alt="" />
            <img src="assets/nike-logo.png" alt="" />
            <img src="assets/nike-logo.png" alt="" />
            <img src="assets/nike-logo.png" alt="" />
          </div>
        </div>
        <div className="col-span-1">
          <img src="assets/hero-img.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Main;
