// src/components/ServiceGrid.js
import Link from "next/link";

const services = [
  {
    title: "HUQUQIY YORDAM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod",
  },
  {
    title: "BUXGALTERIYA HISOBINI OLIB BORISH",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod",
  },
  // Xohlaganingcha ko‘paytirish mumkin
];

export default function ServiceGrid() {
  const gridItems = Array(9)
    .fill(null)
    .map((_, idx) => services[idx % services.length]); // navbatma-navbat xizmatlarni olish

  return (
    <section id="service" className="py-24 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
        Bizning xizmatlarimiz
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {gridItems.map((service, i) => (
          <div key={i} className="cards p-6 rounded-md shadow-sm flex flex-col justify-between h-full">
            <div>
              <p className="text-sky-600 font-semibold mb-2">{service.title}</p>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
            <div className="mt-6">
              <Link
                href="#"
                className="inline-block bg-sky-500 text-white px-4 py-2 text-sm font-semibold rounded hover:bg-sky-600 transition"
              >
                BATAFSIL ↗
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
