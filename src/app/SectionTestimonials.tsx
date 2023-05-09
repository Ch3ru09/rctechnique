export default function SectionTestimonials() {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac gravida velit. Suspendisse potenti.",
      image: "/images/testimonial-1.jpg",
    },
    {
      id: 2,
      name: "Jane Doe",
      quote: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque pharetra semper nunc id pellentesque.",
      image: "/images/testimonial-2.jpg",
    },
    {
      id: 3,
      name: "Bob Smith",
      quote: "Proin at condimentum tellus. Nulla facilisi. Pellentesque euismod rhoncus leo, id efficitur augue congue vel.",
      image: "/images/testimonial-3.jpg",
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Testimonials</h2>
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
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <div className="flex items-center mb-3">
          <div className="flex-shrink-0">
            <img className="h-10 w-10 rounded-full" src={image} alt={name} />
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

