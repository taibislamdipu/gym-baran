import React from "react";

const About = () => {
  return (
    <div className="md:grid grid-cols-3 gap-4 max-w-[1240px] container mx-auto md:px-8 px-4 space-y-4 md:space-y-0 items-center">
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
