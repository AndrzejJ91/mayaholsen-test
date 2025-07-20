"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useInView } from "react-intersection-observer";
import "swiper/css";
import clsx from "clsx";

const peoples = [
    {
        name: "Anna Schneider",
        email: "anna.schneider@example.de",
        opinion: "Die Qualität der Dachziegel ist hervorragend. Sehr empfehlenswert!",
        date: "2024-12-15",
    },
    {
        name: "Markus Weber",
        email: "markus.weber@example.de",
        opinion: "Schnelle Lieferung und top Kundenservice. Gerne wieder.",
        date: "2025-01-08",
    },
    {
        name: "Sabine Koch",
        email: "sabine.koch@example.de",
        opinion: "Ich bin begeistert vom Design und der Langlebigkeit der Produkte.",
        date: "2025-02-22",
    },
    {
        name: "Lukas Zimmermann",
        email: "lukas.zimmermann@example.de",
        opinion: "Mayaholsen hat unsere Erwartungen übertroffen – Qualität auf höchstem Niveau.",
        date: "2025-03-14",
    },
    {
        name: "Katharina Vogel",
        email: "katharina.vogel@example.de",
        opinion: "Kompetente Beratung und perfekte Umsetzung. Danke für die tolle Zusammenarbeit!",
        date: "2025-04-03",
    },
    {
        name: "Thomas Müller",
        email: "thomas.mueller@example.de",
        opinion: "Sehr professionell, pünktlich und zuverlässig. Ich bin zufrieden.",
        date: "2025-04-29",
    },
];

export default function OpinieSwiper() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <section className="w-full bg-white py-20 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div
          className={clsx(
            "text-center mb-12 transition-all duration-1000 ease-in-out",
            inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">
            Meinungen unserer Kunden
          </h2>
          <p className="text-sm md:text-base text-gray-500 mt-2">
            Zufriedene Kunden sprechen für unsere Qualität.
          </p>
        </div>

        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={1000}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {peoples.map((people, idx) => (
            <SwiperSlide key={idx}>
              <div
                className={clsx(
                  "bg-gray-50 border border-gray-200 rounded-xl shadow-md p-6 flex flex-col gap-4 h-full transition-all duration-1000 ease-out",
                  inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
                )}
                style={{ transitionDelay: `${idx * 150}ms` }} // animacja falowana
              >
                {/* Header */}
                <div className="flex items-center gap-4">
                  <img
                    src={`/swipper/avatar${idx + 1}.png`}
                    alt={`${people.name} avatar`}
                    className="w-12 h-12 rounded-full bg-white border p-1"
                  />
                  <div>
                    <h3 className="text-base font-semibold text-gray-800">
                      {people.name}
                    </h3>
                    <p className="text-sm text-gray-500">{people.email}</p>
                  </div>
                </div>

                {/* Opinia */}
                <p className="text-sm text-gray-700 leading-relaxed">
                  "{people.opinion}"
                </p>

                {/* Data */}
                <div className="flex items-center justify-between text-xs text-gray-400 mt-auto">
                  <span className="italic">💬 Kundenmeinung</span>
                  <span>
                    {new Date(people.date).toLocaleDateString("de-DE")}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}