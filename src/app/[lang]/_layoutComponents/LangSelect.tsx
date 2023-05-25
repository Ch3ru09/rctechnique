"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSelect({ lang }: { lang: string }) {
  const location = usePathname();

  return (
    <div className="relative inline-block text-left">
      <div>
        <div className="flex w-full justify-center gap-x-1.5 text-gray-800 hover:cursor-pointer hover:text-gray-500 hover:drop-shadow-lg after:content-['⇂'] after:-ml-2" id="menu-button" aria-expanded="true" aria-haspopup="true">
          Languages
        </div>
      </div>

      {/*
        Dropdown menu, show/hide based on menu state.

        Entering: "transition ease-out duration-100"
          From: "transform opacity-0 scale-95"
          To: "transform opacity-100 scale-100"
        Leaving: "transition ease-in duration-75"
          From: "transform opacity-100 scale-100"
          To: "transform opacity-0 scale-95"
      */}
      <div className="absolute right-0 z-30 mt-2 w-56 origin-top-right rounded-md bg-white focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
        <div className="py-1" role="none">
          <Link href={location.replace(/^\/(.*?)\//gm, "/fr/")} className="text-gray-700 block px-4 py-2 text-sm text-right" role="menuitem" tabIndex={-1} id="menu-item-0">
            Français
          </Link>
          <Link href={location.replace(/^\/(.*?)\//gm, "/en/")} className="text-gray-700 block px-4 py-2 text-sm text-right" role="menuitem" tabIndex={-1} id="menu-item-1">
            English
          </Link>
        </div>
      </div>
    </div>
  );
}

