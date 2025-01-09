import type { Metadata } from "next";

import Intro from "./homeSections/intro/Intro";
import Info from "./homeSections/info/Info";
import Services from "./homeSections/services/Services";
import Testimonials from "./homeSections/testimonials/Testimonials";
import Contact from "./homeSections/contact/Contact";

export default async function HomePage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  return (
    <>
      <Intro />
      <Info />
      {
        /* <Services  />
      <Testimonials  />
      <Contact  /> */
      }
    </>
  );
}

export const metadata: Metadata = {
  title: "RC Technique - Phone Repair",
  description:
    "We provide phone and computer repair services that are reliable, efficient, and affordable.",
};
