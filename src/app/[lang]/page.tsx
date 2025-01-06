import type { Metadata } from "next";
import dynamic from "next/dynamic";
import getDictionary from "./homeDictionnaries/getDictionary";

import Services from "./homeSections/services/Services"
import Intro from "./homeSections/intro/Intro"
import Testimonials from "./homeSections/testimonials/Testimonials"
import Contact from "./homeSections/contact/Contact"

export default async function HomePage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);

  return (
    <>
      <Intro dict={dict.intro} />
      <Services dict={dict.services} />
      <Testimonials dict={dict.testimonials} />
      <Contact dict={dict.contact} />
    </>
  );
}

export const metadata: Metadata = {
  title: "RC Technique - Phone Repair",
  description:
    "We provide phone and computer repair services that are reliable, efficient, and affordable.",
};

