import Aos from "aos";
import Image from "next/image";
import React, { useEffect } from "react";

const HowItWork = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="container mx-auto flex grid-cols-2 flex-col-reverse items-center gap-8 px-4 md:grid md:gap-8 md:px-8">
      <div className="col-span-1" data-aos="fade-right">
        <Image
          src="https://i.ibb.co/1nqsLcM/how-It-Work.png"
          width="718"
          height="564"
          alt="workout"
        />
      </div>
      <div className="col-span-1 space-y-8" data-aos="fade-left">
        <h2>How it works?</h2>
        <div className="space-y-4">
          <p
            className="rounded-xl p-4 shadow-2xl"
            data-aos="fade-left"
            data-aos-duration="500"
          >
            The body becomes sick because of rarely exercise
          </p>
          <p
            className="rounded-xl p-4 text-gray-400 shadow-lg"
            data-aos="fade-left"
            data-aos-duration="600"
          >
            Dont give up in order to get a healthy and ideal body
          </p>
          <p
            className="rounded-xl p-4 text-gray-400 shadow-lg"
            data-aos="fade-left"
            data-aos-duration="700"
          >
            Become addicted to the exercise that is given
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
