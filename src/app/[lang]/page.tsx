import type { Metadata } from "next";
import dynamic from "next/dynamic";
import getDictionary from "./_homeDictionnaries/getDictionary";

const Services = dynamic(() => import("./_homeSections/services/Services"));
const Testimonials = dynamic(() => import("./_homeSections/testimonials/Testimonials"));
const Contact = dynamic(() => import("./_homeSections/contact/Contact"));
const Intro = dynamic(() => import("./_homeSections/intro/Intro"));

export default async function HomePage({ params: { lang } }: { params: { lang: string } }) {
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
  description: "We provide phone and computer repair services that are reliable, efficient, and affordable.",
};

