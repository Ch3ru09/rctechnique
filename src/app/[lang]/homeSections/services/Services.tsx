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

/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {dict.services.map((dictionnary) => {
            return (
              <>
                <div
                  className={`bg-${dictionnary.image} bg-cover bg-center shadow-lg rounded-lg p-6 pt-40`}
                >
                  <div className="bg-backglass bg-frontglass bg-ram"></div>
                  <h3 className="text-gray-300 text-xl font-bold mb-2">
                    {dictionnary.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {dictionnary.description}
                  </p>
                  <Link
                    className="bg-transparent hover:bg-gray-950 text-green-500 transition-colors font-bold py-3 px-4 rounded after:content-['↗'] after:text-xs"
                    href="/services"
                  >
                    {dictionnary.button} &nbsp;
                  </Link>
                </div>
              </>
            );
          })}
        </div> */

