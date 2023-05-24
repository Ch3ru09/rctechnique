import Image from "next/image";
import Link from "next/link";

export default function SectionServices() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-gray-50 shadow-lg rounded-lg p-6">
            <div className="mb-4">
              <Image src="/logo.png" alt="Service 2" className="rounded-md" width={300} height={200} />
            </div>
            <h3 className="text-xl font-bold mb-2">Back Glass Replacement</h3>
            <p className="text-gray-700 leading-relaxed mb-4">Cracked back glass, doesn't have the shine it had before? We can replace it quickly and affordably.</p>
            <Link className="bg-green-500 hover:bg-green-600  font-bold py-3 px-4 rounded after:content-['↗'] after:text-xs" href="/services">
              Learn more &nbsp;
            </Link>
          </div>
          <div className="bg-gray-50 shadow-lg rounded-lg p-6">
            <div className="mb-4">
              <Image src="/logo.png" alt="Service 1" className="rounded-md" width={300} height={200} />
            </div>
            <h3 className="text-xl font-bold mb-2">Screen Repair</h3>
            <p className="text-gray-700 leading-relaxed mb-4">We can fix any cracked or damaged phone screen, whether it's an iPhone, Samsung, or any other company or model.</p>
            <Link className="bg-green-500 hover:bg-green-600  font-bold py-3 px-4 rounded after:content-['↗'] after:text-xs" href="/services">
              Learn more &nbsp;
            </Link>
          </div>
          <div className="bg-gray-50 shadow-lg rounded-lg p-6">
            <div className="mb-4">
              <Image src="/logo.png" alt="Service 3" className="rounded-md" width={300} height={200} />
            </div>
            <h3 className="text-xl font-bold mb-2">And Much More...</h3>
            <p className="text-gray-700 leading-relaxed mb-4">We do not limit ourselves to these 2 services. See more on our services page to see more.</p>
            <Link className="bg-green-500 hover:bg-green-600  font-bold py-3 px-4 rounded after:content-['↗'] after:text-xs" href="/services">
              See all services &nbsp;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

