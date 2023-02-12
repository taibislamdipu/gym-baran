/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { GoQuote } from "react-icons/go";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const Testimonial = () => {
  return (
    <div className="container mx-auto space-y-10 px-4 md:px-8">
      <h2 className="text-center">Testimonials</h2>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="col-span-1 space-y-10 rounded-lg bg-white p-4 shadow-lg md:p-10">
          <p className="flex gap-2">
            <span>
              <GoQuote size={23} />
            </span>{" "}
            It's great to be able to work out from home and be helped by the
            gymbaran. My day feels fresher when I regularly participate in this
            fun sport. Good luck to the coaches.
          </p>

          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-xl bg-[#E275CD]"></div>
            <div>
              <p className="font-bold">Suketi Mantapo</p>
              <p>Designer Graphic</p>
            </div>
          </div>
        </div>

        <div className="col-span-1 space-y-10 rounded-lg bg-white p-4 shadow-lg md:p-10">
          <p className="flex gap-2">
            <span>
              <GoQuote size={23} />
            </span>{" "}
            exercise used to be a boring thing for me, but after following the
            gymbaran I became fond of sports and sports became my new hobby. I
            participate in sports 5 times a week.
          </p>

          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-xl bg-[#E275CD]"></div>
            <div>
              <p className="font-bold">Ada Apose</p>
              <p>Designer Graphic</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:justify-end">
        <BiDotsHorizontalRounded size={23} />
      </div>
    </div>
  );
};

export default Testimonial;
