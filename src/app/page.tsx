import type { Metadata } from "next";
import dynamic from "next/dynamic";

const SectionServices = dynamic(() => import("./SectionServices"));
const SectionTestimonials = dynamic(() => import("./SectionTestimonials"));
const SectionContact = dynamic(() => import("./SectionContact"));
const SectionIntro = dynamic(() => import("./SectionIntro"));

export default function HomePage() {
  return (
    <>
      <SectionIntro />
      <SectionServices />
      <SectionTestimonials />
      <SectionContact />
    </>
  );
}

export const metadata: Metadata = {
  title: "RC Technique - Phone Repair",
  description: "We provide phone and computer repair services that are reliable, efficient, and affordable.",
};

