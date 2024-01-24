"use client";

import { useEffect, useState } from "react";
import type { Dict } from "../../homeDictionnaries/getDictionary";
import IconSpinner from "./IconSpinner";
import ServicesDisplay from "./ServicesDisplay";

export default function SectionServices({ dict }: { dict: Dict["services"] }) {
  const [currentIcon, setCurrentIcon] = useState(0);

  const ROTATION_INTERVAL_SECONDS = 5;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIcon((r) => r + 1);
    }, 1000 * ROTATION_INTERVAL_SECONDS);
    return () => clearTimeout(timer);
  }, [currentIcon]);

  return (
    <section className="bg-gray-100 pb-16 pt-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        {dict.title}
      </h2>
      <div className="container mx-auto flex flex-row">
        <IconSpinner
          currentIcon={currentIcon}
          setCurrentIcon={setCurrentIcon}
        />
        <ServicesDisplay currentIcon={currentIcon} />
      </div>
    </section>
  );
}
