"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// TODO: make language focusable and tabable

export default function LanguageSelect({ lang }: { lang: string }) {
  const location = usePathname();

  return (
    <div className="relative inline-block text-left group " tabIndex={0}>
      <div>
        <div className="flex w-full justify-center gap-x-1.5 text-gray-800 group-hover:cursor-pointer group-hover:text-blue-500 group-hover:drop-shadow-lg group-focus:text-blue-500 group-focus:drop-shadow-lg after:content-['⇂'] after:-ml-1" id="menu-button" aria-expanded="true" aria-haspopup="true">
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
      <div className="absolute right-0 z-30 p-2 origin-top-right rounded-md focus:outline-none invisible group-hover:visible hover:visible group-focus:visible focus:visible" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
        <div className="py-1" role="none">
          <Link href={location.replace(/^\/(.*?)\//gm, "/fr/")} className="text-gray-700 bg-blue-100 block px-4 py-2 text-sm text-right rounded-t-md" role="menuitem" id="menu-item-0">
            Français
          </Link>
          <Link href={location.replace(/^\/(.*?)\//gm, "/en/")} className="text-gray-700 bg-blue-100 block px-4 py-2 text-sm text-right rounded-b-md" role="menuitem" id="menu-item-1">
            English
          </Link>
        </div>
      </div>
    </div>
  );
}
