import Image from "next/image";

export default function SectionServices() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="mb-4">
              <Image src="/service-1.jpg" alt="Service 1" width={300} height={200} className="rounded-md" />
            </div>
            <h3 className="text-xl font-bold mb-2">Screen Repair</h3>
            <p className="text-gray-700 leading-relaxed mb-4">We can fix any cracked or damaged phone screen, whether it's an iPhone, Samsung, or any other make and model.</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Learn More</button>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="mb-4">
              <Image src="/service-2.jpg" alt="Service 2" width={300} height={200} className="rounded-md" />
            </div>
            <h3 className="text-xl font-bold mb-2">Battery Replacement</h3>
            <p className="text-gray-700 leading-relaxed mb-4">Is your phone battery not holding a charge like it used to? We can replace it quickly and affordably.</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Learn More</button>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="mb-4">
              <Image src="/service-3.jpg" alt="Service 3" width={300} height={200} className="rounded-md" />
            </div>
            <h3 className="text-xl font-bold mb-2">Water Damage Repair</h3>
            <p className="text-gray-700 leading-relaxed mb-4">Accidentally dropped your phone in the pool or spilled a drink on it? We can repair water damage and get your phone back up and running.</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

