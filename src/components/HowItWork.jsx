import Image from "next/image";
import React from "react";

const HowItWork = () => {
  return (
    <div className="md:grid grid-cols-2 flex flex-col-reverse md:gap-8 gap-8 items-center container mx-auto md:px-8 px-4">
      <div className="col-span-1">
        <Image
          src="/../public/assets/howItWork.png"
          width="718"
          height="564"
          alt="workout"
        />
      </div>
      <div className="col-span-1 space-y-8">
        <h2>How it works?</h2>
        <div className="space-y-4">
          <p
            className="p-4 rounded-xl"
            style={{ boxShadow: "0px 20px 80px rgba(51, 78, 123, 0.3)" }}
          >
            The body becomes sick because of rarely exercise
          </p>
          <p
            className="p-4 rounded-xl"
            style={{ boxShadow: "0px 20px 80px rgba(51, 78, 123, 0.3)" }}
          >
            Dont give up in order to get a healthy and ideal body
          </p>
          <p
            className="p-4 rounded-xl"
            style={{ boxShadow: "0px 20px 80px rgba(51, 78, 123, 0.3)" }}
          >
            Become addicted to the exercise that is given
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
