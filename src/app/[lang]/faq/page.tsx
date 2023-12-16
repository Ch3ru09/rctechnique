import type { Metadata } from "next";
import Dropdown from "./Dropdown";
import getDictionary from "./_faqDictionnaries/getDictionary";

export default async function FAQPage({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang);

  return (
    <section className="bg-gray-100 flex justify-center items-start py-10">
      <div className="w-full sm:w-10/12 md:w-1/2 my-1">
        <h2 className="text-xl font-semibold mb-2">FAQ - Order, Shipping, Etc.</h2>
        <ul className="flex flex-col">
          {dict.faqs.map((faq, i) => {
            return <Dropdown faq={faq} key={i}></Dropdown>;
          })}
        </ul>
      </div>
    </section>
  );
}

export const metadata: Metadata = {
  title: "RC Technique - FAQ",
  description: "We provide phone and computer repair services that are reliable, efficient, and affordable.",
};

