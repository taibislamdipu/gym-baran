import Image from "next/image";
import React, { useEffect } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Aos from "aos";
const MorningWorkout = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="container mx-auto flex grid-cols-2 flex-col-reverse items-center gap-8 px-4 md:grid md:gap-8 md:px-8">
      <div className="col-span-1 space-y-8" data-aos="fade-right">
        <h2>
          Daily morning
          <br />
          workout in home
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
      <div className="col-span-1" data-aos="fade-left">
        <Image
          src="https://i.ibb.co/y8f9k6g/morning-Workout.png"
          width="652"
          height="508"
          alt="Morning Workout"
        />
      </div>
    </div>
  );
};

export default MorningWorkout;
