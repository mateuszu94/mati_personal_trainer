import AboutMe from "@/components/LandingPage/AboutMe";
import Carusele from "@/components/LandingPage/Carusele";
import Hero from "@/components/LandingPage/Hero";
import HoockSection from "@/components/LandingPage/HoockSection";
import Services from "@/components/LandingPage/ServicesPage";
import Steps from "@/components/LandingPage/Steps";
import Why from "@/components/LandingPage/Why";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero></Hero>
      <Why />
      <Steps></Steps>
      <Services />
      <AboutMe />
      <HoockSection />
      <Carusele />
    </div>
  );
}
