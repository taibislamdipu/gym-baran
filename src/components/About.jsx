import Aos from "aos";
import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      className="container mx-auto grid-cols-3 items-center gap-4 space-y-4 px-4 md:grid md:space-y-0 md:px-8"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <div className="col-span-1">
        <h2>
          Healthy in side
          <br />
          fresh out side
        </h2>
      </div>
      <div className="col-span-2">
        <p>
          Exercise is a very important need for our body. Health and fitness
          will be obtained if you can do regular exercise and run a healthy
          routine. Even at home we still have to be diligent in exercising,
          either alone or with your friends at home. Healthy life makes you more
          excited to live the day
        </p>
      </div>
    </div>
  );
};

export default About;
