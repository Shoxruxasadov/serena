// src/app/page.js
import ServiceGrid from "@/components/Servicegrid";
import Image from "next/image";
import Link from "next/link";
import "@/styles/globals.scss"; // Import global styles

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <header className="flex items-center justify-between pt-6 pb-6 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-black">SERENA</h1>
        <nav className="flex space-x-6 text-sm font-semibold">
          <Link href="#">HUQUQIY YORDAM</Link>
          <Link href="#">XIZMATLAR</Link>
          <Link href="#">BIZ HAQIMIZDA</Link>
          <Link href="#">BOG‘LANISH</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="bg-gradient-to-b from-white to-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 text-gray-700 text-sm mb-40">
            <div className=" pt-10 grid gap-6 text-gray-700 text-sm">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                Moliyaviy barqarorlikka <br /> ishonchli qadam
              </h2>

              <p className="text-base">
                <strong>“Senera”</strong> — bu buxgalteriya, konsalting va audit sohalarida xizmat ko‘rsatuvchi
                O‘zbekistondagi yetakchi kompaniya. Biz mijozlarimizning moliyaviy muvaffaqiyatini ta’minlashga
                qaratilgan kompleks yechimlar taklif etamiz. Jamoamiz yuqori malakali mutaxassislardan iborat
                bo‘lib, ular doimiy ravishda so‘nggi moliyaviy standartlar va qonunchilikdagi o‘zgarishlarni kuzatib boradi.
              </p>

              <div className="flex gap-6 h-11">
                <Link href="#" className="px-6 py-3 bg-black text-white rounded-full font-medium">
                  Ro‘yxatdan o‘tish
                </Link>
                <Link href="#" className="px-6 py-3 border border-black rounded-full font-medium">
                  Batafsil
                </Link>
              </div>
            </div>
            <Image
              src="/serena-preview.jpg"
              alt="Serena App Preview"
              width={1200}
              height={700}
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Logos */}
          <div className="flex flex-wrap items-center justify-between gap-6 grayscale opacity-80">
            {["google", "google", "google", "google", "google", "google"].map((logo, i) => (
              <Image
                key={i}
                src={`/partners/${logo}.png`}
                alt={logo}
                width={100}
                height={50}
                className="object-contain h-8 md:h-10 w-auto"
              />
            ))}
          </div>
        </div>
      </section>

      <ServiceGrid />


      <section id="form" className="bg-sky-500 text-white">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 text-center py-12 px-4 max-w-7xl mx-auto">
          <div>
            <p className="text-4xl font-bold">3000+</p>
            <p className="text-sm mt-2">SODIQ MIJOZLAR</p>
          </div>
          <div>
            <p className="text-4xl font-bold">10+</p>
            <p className="text-sm mt-2">SOHAVIY TAJRIBA</p>
          </div>
          <div>
            <p className="text-4xl font-bold">100%</p>
            <p className="text-sm mt-2">ISHONCHLI XIZMAT</p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white text-black py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold  pt-6 mb-10">
              Bepul maslahat olish
            </h2>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                placeholder="Ism..."
                class="input shadow-md px-5 py-3 rounded-lg w-full transition-all outline-none"
                name="name"
                type="text"
                required
              />
              <input
                placeholder="Telefon raqam..."
                class="input shadow-md px-5 py-3 rounded-lg w-full transition-all outline-none"
                name="phone"
                type="tel"
                required
              />
              <textarea
                placeholder="Ish tavsifi..."
                rows={5}
                className="textarea shadow-md px-5 py-3 rounded-lg w-full md:col-span-2 transition-all outline-none"
                required
              ></textarea>

              <div className="md:col-span-2 flex justify-end">
                <button
                  type="submit"
                  className="send-submit"
                >
                  YUBORISH ↗
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center p-6">
        <p className="text-sm">&copy; {new Date().getFullYear()} Serena. Barcha huquqlar himoyalangan.</p>
      </footer>
    </main>
  );
}
