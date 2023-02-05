import Image from "next/image";
import React from "react";

const ProgramList = () => {
  const programData = [
    {
      id: "1",
      title: "Gets ABS in 2 weeks",
      image: "https://i.ibb.co/j3G8Vg9/gymnast-girl.png",
      from: "#5478EF",
      to: "#D6DFFF",
    },
    {
      id: "2",
      title: "25 Mins full body workout",
      image: "https://i.ibb.co/pRWqqbC/man-doing-yoga.png",
      from: "#5478EF",
      to: "#D6DFFF",
    },
    {
      id: "3",
      title: "10 Mins toned arms workout",
      image: "https://i.ibb.co/Bt52MZ9/stretching.png",
      from: "#5478EF",
      to: "#D6DFFF",
    },
    {
      id: "4",
      title: "15 Mins full body fat burn",
      image: "https://i.ibb.co/PYtNkv3/man-doing-yoga-two.png",
      from: "#5478EF",
      to: "#D6DFFF",
    },
    {
      id: "5",
      title: "25 Mins HIIT workout",
      image:
        "https://i.ibb.co/bFBvHYf/person-practicing-a-strengthen-posture.png",
      from: "#5478EF",
      to: "#D6DFFF",
    },
    {
      id: "6",
      title: "Intense lower Abs workout",
      image: "https://i.ibb.co/WGMyGSw/yoga-posture.png",
      from: "#5478EF",
      to: "#D6DFFF",
    },
  ];

  const ProgramComponent = ({ item }) => {
    return (
      <div className="col-span-1 flex items-center gap-4">
        <div
          className={`w-fit rounded-full bg-gradient-to-r from-[#5478EF] to-[#D6DFFF] p-3`}
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
    <div className="container mx-auto space-y-10 px-4 md:px-8">
      <h2 className="text-center">
        Programs that can <br /> be taken
      </h2>
      <div className="col-span-1 grid gap-8 md:grid-cols-3">
        {programData.map((item, id) => (
          <ProgramComponent key={id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProgramList;
