import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Build from "@/components/Build";
import Tech from "@/components/Tech";
import Pipeline from "@/components/Pipeline";
import Capabilities from "@/components/Capabilities";
import Problem from "@/components/Problem";
import Vision from "@/components/Vision";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Effects from "@/components/Effects";

export default function Home() {
  return (
    <>
      <div className="scroll-progress" id="scrollProgress" />
      <Nav />
      <main id="top">
        <Hero />
        <Marquee />
        <Build />
        <Tech />
        <Pipeline />
        <Capabilities />
        <Problem />
        <Vision />
        <CTA />
      </main>
      <Footer />
      <Effects />
    </>
  );
}
