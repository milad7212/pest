"use client";
import Image from "next/image";
import HeroWithImageTiles from "./components/HeroWithImageTiles";
import SectionTwoColumns from "./components/SectionTwoColumns";
import SectionWithImageTiles from "./components/SectionWithImageTiles";
import SectionSimpleCentered from "./components/SectionSimpleCentered";
import FooterSimple from "./components/FooterSimple";
import SectionSideBySide from "./components/SectionSideBySide";
import Stepped from "./components/stepped";
import Testimonials from "./components/Testimonials";
import OurTeam from "./components/OurTeam";
import Companies from "./components/Companies";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import ImagesWithDetails from "./components/ImagesWithDetails";

export default function Home() {
  return (
    <div className="">
      <HeroWithImageTiles />
      <SectionTwoColumns />
      <ImagesWithDetails />
      <SectionWithImageTiles />
      <Companies />
      {/* <SectionSimpleCentered /> */}
      {/* <SectionSideBySide /> */}
      <Stepped />
      <OurTeam />
      <Testimonials />
      <FAQ />
      <Contact />
      <FooterSimple />
    </div>
  );
}
