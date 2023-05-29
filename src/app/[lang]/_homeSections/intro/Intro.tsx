import Image from "next/image";
import Link from "next/link";
import type { Dict } from "../../_homeDictionnaries/getDictionary";

import LogoImage from "../../_assets/logo.png";

export default function SectionIntro({ dict }: { dict: Dict["intro"] }) {
  return (
    <div className="bg-green-100 relative">
      <Image src={LogoImage} alt="" className="h-full sm:h-auto -bottom-[40%] 2xs:-bottom-[35%] xs:bottom-0 lg:-bottom-[40%] absolute opacity-75 md:right-20 z-10 object-contain" width={400} height={400} />
      <div className="container relative mx-auto py-12 px-4 sm:px-6 lg:px-8 z-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-8">
          {dict.title.p1} <span className="text-red-500">RC Technique</span> {dict.title.p2}
        </h1>
        <p className="text-xl text-gray-600 mb-8">{dict.description}</p>
        <Link href="/#contactTitle" className="inline-block bg-blue-500 hover:bg-blue-600 text-gray-100 font-bold py-4 px-8 rounded-lg transition-colors duration-300">
          {dict.button}
        </Link>
      </div>
    </div>
  );
}
