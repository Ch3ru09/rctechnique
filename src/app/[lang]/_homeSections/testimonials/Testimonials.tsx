import Image from "next/image";

export default function SectionTestimonials() {
  const testimonials = [
    {
      id: 1,
      name: "laurent GEMIGNANI",
      quote: "Vraiment très efficace et sympathique en plus ! Je le recommande",
      image: "/testimonial/1.png",
    },
    {
      id: 2,
      name: "马世全",
      quote: "Super bon service, Super bonne technologie",
      image: "/testimonial/2.png",
    },
    {
      id: 3,
      name: "zongmin pang2022",
      quote: "Bonne technique, bon service, magnifique prix",
      image: "/testimonial/3.png",
    },
  ];

  return (
    <div className="bg-gray-100 py-12" id="testimonials">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">What our customers are saying</p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialCard({ testimonial }: CardProps) {
  const { name, quote, image } = testimonial;

  return (
    <div className="bg-gray-50 overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <div className="flex items-center mb-3">
          <div className="flex-shrink-0">
            <Image className="h-10 w-10 rounded-full" src={image} alt={name} width={100} height={100} />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{name}</p>
          </div>
        </div>
        <div className="mt-3 text-base text-gray-500">{quote}</div>
      </div>
    </div>
  );
}

type CardProps = {
  testimonial: {
    name: string;
    quote: string;
    image: string;
  };
};

