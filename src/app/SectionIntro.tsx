import Image from "next/image";
import Link from "next/link";

export default function SectionIntro() {
  return (
    <div className="bg-green-100 relative">
      <Image src="/logo.png" alt="" className="h-full w-auto aspect-square absolute opacity-75 right-20 z-10" width={516} height={516} />
      <div className="container relative mx-auto py-12 px-4 sm:px-6 lg:px-8 z-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-8">
          Welcome to <span className="text-red-500">RC Technique</span> , the phone and computer repair experts.
        </h1>
        <p className="text-xl text-gray-600 mb-8">We know that having a broken screen or a broken battery can be frustrating, which is why we've dedicated ourselves to providing cellphone repair and computer repair that are reliable, efficient, and affordable.</p>
        <Link href="/contact" className="inline-block bg-blue-500 hover:bg-blue-600 text-gray-100 font-bold py-4 px-8 rounded-lg transition-colors duration-300">
          Get in touch
        </Link>
      </div>
    </div>
  );
}
