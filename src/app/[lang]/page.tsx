import type { Metadata } from "next";
import dynamic from "next/dynamic";

const Services = dynamic(() => import("./_homeSections/services/Services"));
const Testimonials = dynamic(() => import("./_homeSections/testimonials/Testimonials"));
const Contact = dynamic(() => import("./_homeSections/contact/Contact"));
const Intro = dynamic(() => import("./_homeSections/intro/Intro"));

export default function HomePage() {
  return (
    <>
      <Intro />
      <Services />
      <Testimonials />
      <Contact />
    </>
  );
}

export const metadata: Metadata = {
  title: "RC Technique - Phone Repair",
  description: "We provide phone and computer repair services that are reliable, efficient, and affordable.",
};

