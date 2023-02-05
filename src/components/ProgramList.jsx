import Image from "next/image";
import React from "react";

const ProgramList = () => {
  const programData = [
    {
      id: "1",
      title: "Gets ABS in 2 weeks",
      image: "/../public/assets/gymnast-girl.png",
      from: "#5478EF",
      to: "#D6DFFF",
    },
    {
      id: "2",
      title: "25 Mins full body workout",
      image: "/../public/assets/man-doing-yoga.png",
      from: "#5478EF",
      to: "#D6DFFF",
    },
    {
      id: "3",
      title: "10 Mins toned arms workout",
      image: "/../public/assets/stretching.png",
      from: "#5478EF",
      to: "#D6DFFF",
    },
    {
      id: "4",
      title: "15 Mins full body fat burn",
      image: "/../public/assets/man-doing-yoga-two.png",
      from: "#5478EF",
      to: "#D6DFFF",
    },
    {
      id: "5",
      title: "25 Mins HIIT workout",
      image: "/../public/assets/person-practicing-a-strengthen-posture.png",
      from: "#5478EF",
      to: "#D6DFFF",
    },
    {
      id: "6",
      title: "Intense lower Abs workout",
      image: "/../public/assets/yoga-posture.png",
      from: "#5478EF",
      to: "#D6DFFF",
    },
  ];

  const ProgramComponent = ({ item }) => {
    return (
      <div className="flex items-center gap-4 col-span-1">
        <div
          className={`bg-gradient-to-r from-[#5478EF] to-[#D6DFFF] rounded-full w-fit p-3`}
        >
          <Image src={item?.image} width="34" height="43" alt="gymnast-girl" />
        </div>
        <div className="space-y-4">
          <p className="font-bold">{item?.title}</p>
          <p>
            Exercise is a very important <br /> need for our body.{" "}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto md:px-8 px-4 space-y-10">
      <h2 className="text-center">
        Programs that can <br /> be taken
      </h2>
      <div className="grid md:grid-cols-3 col-span-1 gap-8">
        {programData.map((item, id) => (
          <ProgramComponent key={id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProgramList;
