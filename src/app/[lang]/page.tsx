import type { Metadata } from "next";
import dynamic from "next/dynamic";
import getDictionary from "./homeDictionnaries/getDictionary";

const Services = dynamic(() => import("./homeSections/services/Services"));
const Testimonials = dynamic(
  () => import("./homeSections/testimonials/Testimonials")
);
const Contact = dynamic(() => import("./homeSections/contact/Contact"));
const Intro = dynamic(() => import("./homeSections/intro/Intro"));

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

