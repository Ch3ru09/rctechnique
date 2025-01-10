"use client";

import Link from "next/link";
import Logo from "./Logo";
import LanguageSelect from "./LangSelect";

export default function Navbar({ lang }: { lang: string }) {
  return (
    <nav className="duration-[250ms]">
      <div className="container mx-auto px-4 py-5">
        <div className="flex justify-between items-center">
          <span className="text-xl">RC Technique</span>
          <ul className="flex space-x-4">
            <li>
              <Link href={`/${lang}/`} className="text-gray-800 filter hover:text-blue-500 hover:drop-shadow-lg focus:text-blue-500" tabIndex={0}>
                Home
              </Link>
            </li>
            {/* <li>
              <Link href={`/${lang}/services`} className="text-gray-800 filter hover:text-blue-500 hover:drop-shadow-lg focus:text-blue-500 focus:drop-shadow-lg" tabIndex={0}>
                Services
              </Link>
            </li> */}
            <li>
              <Link href={`/${lang}/faq`} className="text-gray-800 filter hover:text-blue-500 hover:drop-shadow-lg focus:text-blue-500 focus:drop-shadow-lg" tabIndex={0}>
                FAQ
              </Link>
            </li>
            <li className="h-full">
              <LanguageSelect lang={lang} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
