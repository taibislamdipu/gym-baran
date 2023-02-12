import Image from "next/image";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Program = () => {
  return (
    <div className="container mx-auto px-4 md:px-8">
      <div className="justify-between space-y-10 rounded-[30px] bg-[#6462F0] p-4 text-white md:flex md:space-y-0 md:p-16">
        <div className="flex gap-4" data-aos="fade-up">
          <div className="flex h-[100px] w-[100px] items-center justify-center rounded-[20px] bg-[#8988F2]">
            <Image
              src="https://i.ibb.co/FsBsswh/crucified-pose.png"
              width="50"
              height="50"
              alt="workout"
            />
          </div>
          <div className="flex flex-col justify-between">
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
        <div className="flex gap-4" data-aos="fade-up" data-aos-duration="500">
          <div className="flex h-[100px] w-[100px] items-center justify-center rounded-[20px] bg-[#8988F2]">
            <Image
              src="https://i.ibb.co/L6cNd9P/dancer-balance.png"
              width="50"
              height="50"
              alt="workout"
            />
          </div>
          <div className="flex flex-col justify-between">
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
        <div className="flex gap-4" data-aos="fade-up" data-aos-duration="600">
          <div className="flex h-[100px] w-[100px] items-center justify-center rounded-[20px] bg-[#8988F2]">
            <Image
              src="https://i.ibb.co/5vGZQrp/dancer-motion.png"
              width="50"
              height="50"
              alt="workout"
            />
          </div>
          <div className="flex flex-col justify-between">
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
