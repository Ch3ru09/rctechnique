import type { Metadata } from "next";
import React from "react";

const services = [
  {
    id: 1,
    title: "Back Glass Replacement",
    description: "Replacement for broken back glass",
  },
  {
    id: 2,
    title: "Screen Repair",
    description: "Fix cracked or damaged screens",
  },
  {
    id: 3,
    title: "Battery Replacement",
    description: "Replace worn-out or faulty batteries",
  },
  {
    id: 4,
    title: "Water Damage Repair",
    description: "Recover and repair water-damaged phones",
  },
];

export default function ServicesPage() {
  return (
    <div className="w-full px-4 py-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Phone Repair Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <div className="bg-gray-50 shadow-lg rounded-lg p-6" key={service.id}>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-700 leading-relaxed mb-4">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "RC Technique - Services",
  description: "We provide phone and computer repair services that are reliable, efficient, and affordable.",
};
