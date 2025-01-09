import Link from "next/link";

export default function SectionContact() {
  return (
    <section className="w-full py-20 bg-gray-100">
      <div className="mx-auto w-3/5">
        <h2
          className="text-3xl md:text-4xl font-bold mb-20 text-center"
          id="contactTitle"
        >
          {dict.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-1 flex flex-col gap-10">
            <div>
              <h3 className="text-xl font-bold mb-4">{dict.phone}</h3>
              <Link
                className="text-gray-700 after:content-['↗'] after:text-xs"
                href="tel:5145628688"
                target="_blank"
              >
                (514)-562-8688
              </Link>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">{dict.email}</h3>
              <Link
                className="text-gray-700 after:content-['↗'] after:text-xs"
                href="mailto:rctechniques@gmail.com"
                target="_blank"
              >
                rctechniques@gmail.com
              </Link>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">{dict.address}</h3>
              <Link
                className="text-gray-700 after:content-['↗'] after:text-xs"
                href="//www.google.com/maps/place/RCtechnique/@45.4440989,-73.4734341,15z/data=!4m6!3m5!1s0x4cc90fbe5cc265cd:0x942c99d5cd89daca!8m2!3d45.4440989!4d-73.4734341!16s%2Fg%2F11jdb8996j"
                target="_blank"
              >
                Unit-9 8500 Bd Taschereau, Brossard, QC, J4X 2T4
              </Link>
            </div>
          </div>
          <div className="md:col-span-1 border-gray-700 border-solid border-8">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2445.3699802024666!2d-73.4746668337793!3d45.444129211241844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc90fbe5cc265cd%3A0x942c99d5cd89daca!2sRCtechnique!5e0!3m2!1sen!2sca!4v1684268224603!5m2!1sen!2sca"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

