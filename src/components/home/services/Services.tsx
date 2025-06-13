"use client";

import type { Dict } from "../../homeDictionnaries/getDictionary";

export default function SectionServices({ dict }: { dict: Dict["services"] }) {
  const services = [
    "backglass",
    "frontscreen",
    "charging",
    "battery",
    "speakers",
    "water",
    "computersoftware",
    "computerslow",
  ];

  return (
    <section className="bg-gray-100 pb-16 pt-32 grid">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        {dict.title}
      </h2>
      <div className="grid w-3/5 mx-auto gap-4 grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]">
        {services.map((x) => {
          return (
            <div className="bg-green-200 rounded-3xl m-5 p-5 aspect-square h-auto">
              {x}
            </div>
          );
        })}
      </div>
    </section>
  );
}
