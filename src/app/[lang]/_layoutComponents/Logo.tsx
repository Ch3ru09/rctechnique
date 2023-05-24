"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Logo({ lang }: { lang: string }) {
  let location = usePathname();
  let ref = useRef<Element | null>(null);
  location = getNoLocaleURL(location);

  useEffect(() => {
    if (location != "/") {
      ref.current?.classList.remove("invisible");
      return;
    }
    ref.current?.classList.add("invisible");
  }, [location]);

  return <Image src="/logo.png" alt="" className="h-full w-auto aspect-square" ref={ref} width={50} height={50} />;
}

function getNoLocaleURL(location: string) {
  return location.replace(/^(?:[^\/]*\/){2}\s*/, "");
}
