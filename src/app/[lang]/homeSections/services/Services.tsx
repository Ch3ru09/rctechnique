"use client";

import { useEffect, useState } from "react";
import type { Dict } from "../../homeDictionnaries/getDictionary";
import IconSpinner from "./IconSpinner";
import ServicesDisplay from "./ServicesDisplay";

export default function SectionServices({ dict }: { dict: Dict["services"] }) {
  const [currentIconIndex, setCurrentIconIndex] = useState(0);

  const ROTATION_INTERVAL_SECONDS = 5;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIconIndex((r) => r + 1);
    }, 1000 * ROTATION_INTERVAL_SECONDS);
    return () => clearTimeout(timer);
  }, [currentIconIndex]);

  return (
    <section className="bg-gray-100 pb-16 pt-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        {dict.title}
      </h2>
      <div className="container mx-auto flex flex-row">
        <IconSpinner
          currentIconIndex={currentIconIndex}
          setCurrentIconIndex={setCurrentIconIndex}
        />
        <ServicesDisplay
          currentIconIndex={currentIconIndex}
          dictionnary={dict["services"]}
        />
      </div>
    </section>
  );
}

