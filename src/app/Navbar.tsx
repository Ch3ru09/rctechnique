"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const location = usePathname();

  return (
    <nav className="bg-green-100 shadow-2xl">
      <div className="container mx-auto px-4 py-5">
        <div className="flex justify-between items-center">
          {location == "/" ? <div></div> : <Image src="/logo.png" alt="" className="h-full w-auto aspect-square" width={50} height={50} />}
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-gray-800 hover:text-gray-500 hover:drop-shadow-lg">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-gray-800 hover:text-gray-600">
                Services
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-gray-800 hover:text-gray-600">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-800 hover:text-gray-600">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
