import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Team } from "@/components/sections/Team";
import { Packages } from "@/components/sections/Packages";
import { Credibility } from "@/components/sections/Credibility";
import { Social } from "@/components/sections/Social";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Process />
        <Team />
        <Packages />
        <Credibility />
        <Social />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
