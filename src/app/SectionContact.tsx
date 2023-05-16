export default function SectionContact() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-1">
            <div>
              <h3 className="text-xl font-bold mb-4">Email</h3>
              <p className="text-gray-700">info@example.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Address</h3>
              <p className="text-gray-700">123 Main Street, City, State, ZIP</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Phone</h3>
              <p className="text-gray-700">123-456-7890</p>
            </div>
          </div>
          <div className="md:col-span-1">
            {/* Replace the placeholder with your map embed code or third-party library */}
            <div className="aspect-w-16 aspect-h-9">
              <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1234567890!2d-73.9871626!3d40.7484405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjrCsDE0JzU5LjUiTiA3M8KwMjknMTIuNiJX!5e0!3m2!1sen!2sus!4v1234567890!5m2!1sen!2sus" width="100%" height="100%" frameBorder="0" style={{ border: 0 }} allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
