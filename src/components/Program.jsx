import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import crucifiedPose from "../../public/assets/crucified-pose.png";
const Program = () => {
  return (
    <div className="max-w-[1240px] container mx-auto md:px-8 px-4">
      <div className="md:flex space-y-10 md:space-y-0 justify-between md:p-16 p-4 rounded-[30px] text-white bg-[#6462F0]">
        <div className="flex gap-4">
          <div className="bg-[#8988F2] rounded-[20px] w-[100px] h-[100px] items-center justify-center flex">
            <img src={crucifiedPose} className="bg-white" alt="" />
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
            img
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
            img
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
      </div>
    </div>
  );
};

export default Program;
