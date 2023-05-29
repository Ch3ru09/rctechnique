import type { Metadata } from "next";
import Dropdown from "./Dropdown";

export default function FAQPage() {
  const faqs = [
    {
      id: 1,
      question: "Question 1?",
      answer: "Answer to question 1.",
    },
    {
      id: 2,
      question: "Question 2?",
      answer: "Answer to question 2.",
    },
    {
      id: 3,
      question: "Question 3?",
      answer: "Answer to question 3.",
    },
    {
      id: 4,
      question: "Question 4?",
      answer: "Answer to question 4.",
    },
    // Add more FAQs as needed
  ];

  return (
    <section className="bg-gray-100 flex justify-center items-start py-10">
      <div className="w-full sm:w-10/12 md:w-1/2 my-1">
        <h2 className="text-xl font-semibold mb-2">FAQ - Order, Shipping, Etc.</h2>
        <ul className="flex flex-col">
          <Dropdown faqs={faqs}></Dropdown>
        </ul>
      </div>
    </section>
  );
}

export const metadata: Metadata = {
  title: "RC Technique - FAQ",
  description: "We provide phone and computer repair services that are reliable, efficient, and affordable.",
};
