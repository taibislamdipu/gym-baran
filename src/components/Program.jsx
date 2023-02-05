import Image from "next/image";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Program = () => {
  return (
    <div className="container mx-auto md:px-8 px-4">
      <div className="md:flex space-y-10 md:space-y-0 justify-between md:p-16 p-4 rounded-[30px] text-white bg-[#6462F0]">
        <div className="flex gap-4">
          <div className="bg-[#8988F2] rounded-[20px] w-[100px] h-[100px] items-center justify-center flex">
            <Image
              src="https://i.ibb.co/FsBsswh/crucified-pose.png"
              width="50"
              height="50"
              alt="workout"
            />
          </div>
          <div className="flex justify-between flex-col">
            <h3>
              Get that 11 <br /> line in 30 days
            </h3>
            <div>
              <a href="#" className="flex items-center gap-4">
                Learn more <AiOutlineArrowRight />
              </a>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="bg-[#8988F2] rounded-[20px] w-[100px] h-[100px] items-center justify-center flex">
            <Image
              src="https://i.ibb.co/L6cNd9P/dancer-balance.png"
              width="50"
              height="50"
              alt="workout"
            />
          </div>
          <div className="flex justify-between flex-col">
            <h3>
              14 Days <br />
              sherd challenge
            </h3>
            <div>
              <a href="#" className="flex items-center gap-4">
                Learn more <AiOutlineArrowRight />
              </a>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="bg-[#8988F2] rounded-[20px] w-[100px] h-[100px] items-center justify-center flex">
            <Image
              src="https://i.ibb.co/5vGZQrp/dancer-motion.png"
              width="50"
              height="50"
              alt="workout"
            />
          </div>
          <div className="flex justify-between flex-col">
            <h3>
              Get flat belly
              <br />
              in 30 days
            </h3>
            <div>
              <a href="#" className="flex items-center gap-4">
                Learn more <AiOutlineArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
