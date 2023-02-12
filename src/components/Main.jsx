import Image from "next/image";
import React from "react";
import { AiFillPlayCircle, AiFillRightCircle } from "react-icons/ai";

const Main = () => {
  return (
    <div className="container z-0 mx-auto flex h-screen w-full items-center justify-center px-4 md:px-8">
      <div className="mt-10 grid-cols-2 gap-4 space-y-4 md:grid md:space-y-0">
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
            <button className="flex items-center gap-8 bg-blue px-4 py-2 text-white">
              Get Started
              <AiFillRightCircle className="mr-2" size={23} />
            </button>

            <button className="flex items-center gap-4 bg-white px-4 py-3 text-blue">
              <AiFillPlayCircle size={23} />
              Learn more
            </button>
          </div>
          <div>
            <p className="text-black">Brands:</p>
            <div className="flex items-center justify-between gap-4 md:justify-start">
              <div>
                <Image
                  src="https://i.ibb.co/27KT1gg/nike.png"
                  width="58"
                  height="27"
                  alt="brands"
                />
              </div>
              <div>
                <Image
                  src="https://i.ibb.co/kcKYB41/adidas.png"
                  width="53"
                  height="54"
                  alt="brands"
                />
              </div>
              <div>
                <Image
                  src="https://i.ibb.co/n8tBNcj/puma.png"
                  width="80"
                  height="41"
                  alt="brands"
                />
              </div>
              <div>
                <Image
                  src="https://i.ibb.co/99cy29h/reebok.png"
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
            src="https://i.ibb.co/TBZnqhF/hero-img.png"
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
