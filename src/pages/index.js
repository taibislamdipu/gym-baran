import About from "@/components/About";
import Footer from "@/components/Footer";
import HowItWork from "@/components/HowItWork";
import Main from "@/components/Main";
import MorningWorkout from "@/components/MorningWorkout";
import Navbar from "@/components/Navbar";
import Program from "@/components/Program";
import ProgramList from "@/components/ProgramList";
import Testimonial from "@/components/Testimonial";
import Workout from "@/components/Workout";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Gym Baran</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gradient-to-b from-[#F8E9FB]">
        <Navbar />
        <Main />
      </div>

      <div className="space-y-20">
        <About />
        <Program />
        <Workout />
        <MorningWorkout />
        <HowItWork />
        <ProgramList />
        <Testimonial />
        <Footer />
      </div>
    </div>
  );
}
