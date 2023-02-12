import Image from "next/image";
import React from "react";

const HowItWork = () => {
  return (
    <div className="container mx-auto flex grid-cols-2 flex-col-reverse items-center gap-8 px-4 md:grid md:gap-8 md:px-8">
      <div className="col-span-1">
        <Image
          src="https://i.ibb.co/1nqsLcM/how-It-Work.png"
          width="718"
          height="564"
          alt="workout"
        />
      </div>
      <div className="col-span-1 space-y-8">
        <h2>How it works?</h2>
        <div className="space-y-4">
          <p className="rounded-xl p-4 shadow-2xl">
            The body becomes sick because of rarely exercise
          </p>
          <p className="rounded-xl p-4 text-gray-400 shadow-lg">
            Dont give up in order to get a healthy and ideal body
          </p>
          <p className="rounded-xl p-4 text-gray-400 shadow-lg">
            Become addicted to the exercise that is given
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
