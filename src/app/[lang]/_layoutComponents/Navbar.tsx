"use client";

import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";

export default function Navbar({ lang }: { lang: string }) {
  return (
    <nav className="bg-green-100 duration-[250ms]">
      <div className="container mx-auto px-4 py-5">
        <div className="flex justify-between items-center">
          <Logo lang={lang} />
          <ul className="flex space-x-4">
            <li>
              <Link href={`/${lang}/`} className="text-gray-800 hover:text-gray-500 hover:drop-shadow-lg">
                Home
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/services`} className="text-gray-800 hover:text-gray-600">
                Services
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/faq`} className="text-gray-800 hover:text-gray-600">
                FAQ
              </Link>
            </li>
            <li>
              <Link href={`/en/`} className="text-gray-800 hover:text-gray-600">
                {lang}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

