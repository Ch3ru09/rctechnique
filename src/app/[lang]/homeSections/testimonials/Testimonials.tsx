import Image, { type StaticImageData } from "next/image";
import type { Dict } from "../../homeDictionnaries/getDictionary";

import P1 from "./icons/1.png";
import P2 from "./icons/2.png";
import P3 from "./icons/3.png";

export default function SectionTestimonials({
  dict,
}: {
  dict: Dict["testimonials"];
}) {
  const testimonials = [
    {
      id: 1,
      image: P1,
    },
    {
      id: 2,
      image: P2,
    },
    {
      id: 3,
      image: P3,
    },
  ];

  return (
    <div className="bg-gray-100 py-12" id="testimonials">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            {dict.title}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {dict.subtitle}
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                dict={dict}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialCard({ testimonial, dict }: CardProps) {
  const { id, image } = testimonial;
  let newId = `t${id}`;
  return (
    <div className="bg-gray-50 overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <div className="flex items-center mb-3">
          <div className="flex-shrink-0">
            <Image
              className="h-10 w-10 rounded-full"
              src={image}
              alt={`${id}`}
              width={100}
              height={100}
            />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">
              {dict[newId].name}
            </p>
          </div>
        </div>
        <div className="mt-3 text-base text-gray-500">
          {dict[newId].description}
        </div>
      </div>
    </div>
  );
}

type CardProps = {
  testimonial: {
    id: number;
    image: StaticImageData;
  };
  dict: any;
};

