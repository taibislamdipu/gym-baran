import Image from "next/image";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Workout = () => {
  return (
    <div className="container mx-auto flex grid-cols-2 flex-col-reverse items-center gap-8 px-4 md:grid md:gap-8 md:px-8">
      <div className="col-span-1">
        <Image
          src="https://i.ibb.co/XXbp4KS/workout-img.png"
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
        <button className="flex items-center gap-14 bg-blue px-4 py-3 text-white">
          <span>Get Started</span>
          <AiOutlineArrowRight size={23} />
        </button>
      </div>
    </div>
  );
};

export default Workout;
