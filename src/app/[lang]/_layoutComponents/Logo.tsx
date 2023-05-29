"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import Image from "next/image";

import LogoImage from "../_assets/logo.png";

export default function Logo({ lang }: { lang: string }) {
  let location = usePathname();

  let ref = useRef(null);
  location = getNoLocaleURL(location);

  useEffect(() => {
    if (location !== "/") {
      (ref?.current as any).classList.remove("invisible");
    } else {
      (ref?.current as any).classList.add("invisible");
    }
  }, [location]);

  return <Image src={LogoImage} alt="" className="h-full w-auto aspect-square invisible" ref={ref} width={50} height={50} />;
}

function getNoLocaleURL(location: string) {
  return location.replace(/^(?:[^\/]*\/){2}\s*/, "/");
}
