import Image from "next/image";

export default function SectionHero() {
  return (
    <section className="hero bg-black py-20 md:py-32 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between">
      <div className="hero-content md:max-w-md mb-10 md:mb-0 md:mr-16">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">Cracked Screen? We Can Fix It!</h1>
        <p className="text-lg md:text-2xl mb-8">Fast, affordable phone repairs for all makes and models.</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded">Schedule a Repair</button>
      </div>
      <div className="hero-image flex-shrink-0 w-full md:w-1/2">{/* <Image src="/hero-image.jpg" alt="A broken phone screen" width={600} height={400} className="rounded-md" /> */}</div>
    </section>
  );
}

