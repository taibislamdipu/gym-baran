import Image from "next/image";
import React from "react";
import { AiFillRightCircle, AiOutlineArrowRight } from "react-icons/ai";

const Workout = () => {
  return (
    <div className="md:grid grid-cols-2 flex flex-col-reverse md:gap-8 gap-8 items-center container mx-auto md:px-8 px-4">
      <div className="col-span-1">
        <Image
          src="/../public/assets/workout-img.png"
          width="665"
          height="558"
          alt="workout"
        />
      </div>
      <div className="col-span-1 space-y-8">
        <h2>
          Best full body
          <br />
          workout to lose fat
        </h2>
        <p>
          Exercise is a very important need for our body. Health and fitness
          will be obtained if you can do regular exercise and run a healthy
          routine. Even at home we still have to be diligent in exercising,
          either alone or with your friends at home.
        </p>
        <button className="bg-blue flex items-center px-4 py-3 gap-14 text-white">
          <span>Get Started</span>
          <AiOutlineArrowRight size={23} />
        </button>
      </div>
    </div>
  );
};

export default Workout;
