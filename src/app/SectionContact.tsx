export default function SectionContact() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-20 text-center">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-1 flex flex-col gap-10">
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
          <div className="md:col-span-1 border-gray-700 border-solid border-8">
            <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2445.3699802024666!2d-73.4746668337793!3d45.444129211241844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc90fbe5cc265cd%3A0x942c99d5cd89daca!2sRCtechnique!5e0!3m2!1sen!2sca!4v1684268224603!5m2!1sen!2sca" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

