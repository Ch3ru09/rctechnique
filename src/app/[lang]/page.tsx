import type { Metadata } from "next";

import Services from "./homeSections/services/Services"
import Intro from "./homeSections/intro/Intro"
import Testimonials from "./homeSections/testimonials/Testimonials"
import Contact from "./homeSections/contact/Contact"

export default async function HomePage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  return (
    <>
      <Intro />
      {/* <Services  />
      <Testimonials  />
      <Contact  /> */}
    </>
  );
}

export const metadata: Metadata = {
  title: "RC Technique - Phone Repair",
  description:
    "We provide phone and computer repair services that are reliable, efficient, and affordable.",
};

