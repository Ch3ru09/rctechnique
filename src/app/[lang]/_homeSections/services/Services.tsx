import Image from "next/image";
import Link from "next/link";
import type { Dict } from "../../_homeDictionnaries/getDictionary";

import LogoImage from "../../_assets/logo.png";

export default function SectionServices({ dict }: { dict: Dict["services"] }) {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">{dict.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {dict.services.map((dictionnary) => {
            return (
              <div className="bg-gray-50 shadow-lg rounded-lg p-6">
                <div className="mb-4">
                  <Image src={LogoImage} alt="Service 2" className="rounded-md" width={300} height={200} />
                </div>
                <h3 className="text-xl font-bold mb-2">{dictionnary.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">{dictionnary.description}</p>
                <Link className="bg-green-500 hover:bg-green-600 transition-colors font-bold py-3 px-4 rounded after:content-['↗'] after:text-xs" href="/services">
                  {dictionnary.button} &nbsp;
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

