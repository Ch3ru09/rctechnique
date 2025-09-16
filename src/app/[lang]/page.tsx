import type { Metadata } from "next";
import dynamic from "next/dynamic";
import getDictionary from "@/components/home/dictionaries/getDictionary";

const Services = dynamic(() => import("@/components/home/services/Services"));
const Testimonials = dynamic(
  () => import("@/components/home/testimonials/Testimonials")
);
const Contact = dynamic(() => import("@/components/home/contact/Contact"));
const Intro = dynamic(() => import("@/components/home/intro/Intro"));

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
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

