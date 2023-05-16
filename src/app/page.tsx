import Link from "next/link";
import type { Metadata } from "next";

import SectionHero from "./SectionHero";
import SectionServices from "./SectionServices";
import SectionTestimonials from "./SectionTestimonials";
import SectionFAQ from "./SectionFAQ";
import SectionContact from "./SectionContact";

export const metadata: Metadata = {
  title: "RC Technique - Phone Repair",
  description: "We provide phone and computer repair services that are reliable, efficient, and affordable.",
};

export default function HomePage() {
  const handleChangeTheme = (e: MouseEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="bg-gray-50">
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-8">
            Welcome to <span className="text-red-500">RC Technique</span> , the phone repair experts.
          </h1>
          <p className="text-xl text-gray-600 mb-8">We know that [Industry problem] can be frustrating and time-consuming, which is why we've dedicated ourselves to providing [Industry solution] that are reliable, efficient, and affordable.</p>
          <p className="text-xl text-gray-600 mb-8">Our team of experienced professionals has the skills and expertise to [Industry solution 1]. We specialize in [Industry solution 2] and [Industry solution 3], and we're committed to delivering [Industry solution 4] that meet and exceed your expectations.</p>
          <Link href="/contact" className="inline-block bg-blue-500 hover:bg-blue-600  font-bold py-4 px-8 rounded-lg transition-colors duration-300">
            Get in touch
          </Link>
        </div>
      </div>
      <SectionHero />
      <SectionServices />
      <SectionTestimonials />
      <SectionFAQ />
      <SectionContact />
    </>
  );
}
