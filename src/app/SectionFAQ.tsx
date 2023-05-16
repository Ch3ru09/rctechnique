"use client";

import { type CSSProperties, useState, useRef } from "react";

export default function SectionFAQ() {
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
    // Add more FAQs as needed
  ];

  const [activeFAQ, setActiveFAQ] = useState<number | null>();

  const toggleFAQ = (faqId: number) => {
    setActiveFAQ(activeFAQ === faqId ? null : faqId);
  };

  return (
    <div className="flex justify-center items-start my-2">
      <div className="w-full sm:w-10/12 md:w-1/2 my-1">
        <h2 className="text-xl font-semibold mb-2">FAQ - Order, Shipping, Etc.</h2>
        <ul className="flex flex-col">
          {faqs.map((faq) => {
            const [opened, setOpened] = useState(false);
            let ansRef = useRef<HTMLDivElement | null>(null);
            return (
              <li
                className="bg-gray-50 my-2 shadow-lg shadow-gray-700 text-gray-900 rounded-md"
                onClick={() => {
                  setOpened((s) => !s);
                }}
              >
                <h2 className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer">
                  <span>{faq.question}</span>
                  <svg className="fill-current text-purple-700 h-6 w-6 transform transition-transform duration-[250ms]" viewBox="0 0 20 20" style={{ "--tw-rotate": opened ? "180deg" : "0deg" } as CSSProperties}>
                    <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
                  </svg>
                </h2>
                <div className="border-l-2 border-purple-600 overflow-hidden max-h-0 duration-[250ms] transition-all" ref={ansRef} style={{ "max-height": opened ? `${ansRef?.current?.scrollHeight}px` : "0px" } as CSSProperties}>
                  <p className="p-3 text-gray-900">{faq.answer}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

