"use client";

import { CSSProperties } from "react";
import type { Dict } from "../dictionaries/getDictionary";

export default function SectionServices({ dict }: { dict: Dict["services"] }) {
  const services = [
    "backglass",
    "frontscreen",
    "charging",
    "battery",
    "speakers",
    "water",
    "computersoftware",
    "computerhardware",
    "computerslow",
  ] as const;

  return (
    <section className="bg-gray-100 pb-16 pt-32 grid">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        {dict.title}
      </h2>
      <div className="grid w-3/5 mx-auto gap-4 grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]">
        {services.map((x, i) => {
          return (
            <div
              key={i}
              style={{
                "--image-url": `url(/repairs/${x}.jpg)`,
              } as CSSProperties}
              className="bg-transparent relative shadow-md overflow-hidden rounded-3xl m-5 p-5 aspect-square h-auto z-10 after:absolute after:-z-10 after:content-[''] after:bg-[image:var(--image-url)] after:bg-cover after:bg-center after:w-full after:h-full after:left-0 after:top-0 after:opacity-40"
            >
              <h2>{dict.services[x].title}</h2>
            </div>
          );
        })}
      </div>
    </section>
  );
}
