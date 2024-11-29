
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Hero";
import CountdownSection from "@/components/Countdown";
import ContestSection from "@/components/Contest";
import Action from "@/components/Action"
import courses from "@/components/Course"
import CoursesSection from "@/components/Course";
import Competition from "@/components/Competition"
import Partners from "@/components/Partners";
import Prize from "@/components/Prize"
import Question from "@/components/Question"
import Kids from "@/components/Kids"


const page = () => {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <CountdownSection/>
      <ContestSection/>
      <Action/>
      <CoursesSection/>
      <Competition/>
      <Partners/>
      <Prize/>
      <Question/>
      <Kids/>
    </div>
  );
};

export default page;
