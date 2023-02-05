/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { GoQuote } from "react-icons/go";

const Testimonial = () => {
  const TestimonialComponent = ({ item }) => {
    return <></>;
  };

  return (
    <div className="container mx-auto md:px-8 px-4 space-y-10">
      <h2 className="text-center">Testimonials</h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
        <div className="space-y-10 bg-white col-span-1 shadow-lg rounded-lg p-10">
          <p className="flex gap-2">
            <span>
              <GoQuote size={23} />
            </span>{" "}
            It's great to be able to work out from home and be helped by the
            gymbaran. My day feels fresher when I regularly participate in this
            fun sport. Good luck to the coaches.
          </p>

          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-[#E275CD] rounded-xl"></div>
            <div>
              <p className="font-bold">Suketi Mantapo</p>
              <p>Designer Graphic</p>
            </div>
          </div>
        </div>

        <div className="space-y-10 bg-white col-span-1 shadow-lg rounded-lg p-10">
          <p className="flex gap-2">
            <span>
              <GoQuote size={23} />
            </span>{" "}
            It's great to be able to work out from home and be helped by the
            gymbaran. My day feels fresher when I regularly participate in this
            fun sport. Good luck to the coaches.
          </p>

          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-[#E275CD] rounded-xl"></div>
            <div>
              <p className="font-bold">Suketi Mantapo</p>
              <p>Designer Graphic</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
