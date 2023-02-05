import Image from "next/image";
import React from "react";
import { AiFillPlayCircle, AiFillRightCircle } from "react-icons/ai";

const Main = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center container mx-auto md:px-8 px-4">
      <div className="md:grid grid-cols-2 gap-4 space-y-4 md:space-y-0 mt-10">
        <div className="col-span-1 flex flex-col justify-center space-y-8">
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
            <button className="flex items-center px-4 gap-8 py-2 bg-blue text-white">
              Get Started
              <AiFillRightCircle className="mr-2" size={23} />
            </button>

            <button className="bg-white flex items-center px-4 py-3 gap-4 text-blue">
              <AiFillPlayCircle size={23} />
              Learn more
            </button>
          </div>
          <div>
            <p className="text-black">Brands:</p>
            <div className="flex md:justify-start justify-between gap-4 items-center">
              <div>
                <Image
                  src="/../public/assets/nike.png"
                  width="58"
                  height="27"
                  alt="brands"
                />
              </div>
              <div>
                <Image
                  src="/../public/assets/adidas.png"
                  width="53"
                  height="54"
                  alt="brands"
                />
              </div>
              <div>
                <Image
                  src="/../public/assets/puma.png"
                  width="80"
                  height="41"
                  alt="brands"
                />
              </div>
              <div>
                <Image
                  src="/../public/assets/reebok.png"
                  width="119"
                  height="30"
                  alt="brands"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <Image
            src="/../public/assets/hero-img.png"
            width="744"
            height="639"
            alt="workout image"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
