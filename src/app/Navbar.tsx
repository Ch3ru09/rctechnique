import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 shadow-2xl">
      <div className="container mx-auto px-4 py-5">
        <div className="flex justify-between items-center">
          <div className="text-red-500 font-bold text-xl">
            <span>RC</span> Technique
          </div>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-gray-100 hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-gray-100 hover:text-gray-300">
                Services
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-gray-100 hover:text-gray-300">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-100 hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

