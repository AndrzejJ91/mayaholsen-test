"use client";

import { useInView } from "react-intersection-observer";
import clsx from "clsx";

const items = [
    {
        title: "20 Jahre Liefergarantie",
        desc: "Wir garantieren für die Dauer von 20 Jahren beginnend mit dem Tage der Auslieferung Ihres gewählten Modells – von rohstoffbedingten Veränderungen abgesehen – nachliefern zu können.",
        img: "/guaranties/20lat.png",
    },
    {
        title: "40 Jahre Materialgarantie",
        desc: "Wir garantieren für die Dauer von 40 Jahren ab Lieferdatum die Übernahme der dem ausführenden Fachbetrieb entstehenden Kosten (Tariflöhne, Soziallasten und Hilfsstoffe) sowie die Anlieferung der Dachziegel, und das bieten wir als einziges Dachziegelwerk in Deutschland.",
        img: "/guaranties/40lat.png",
    },
    {
        title: "Nachhaltige Produktion",
        desc: "Langlebige Dachziegel, umweltfreundlich gefertigt: Durch regionale Tonvorkommen, energieeffiziente Produktion und Recycling schaffen wir nachhaltige Qualität. Seit 2021 EPD-zertifiziert, gefertigt mit 100 % grünem Strom – für einen minimalen CO₂-Fußabdruck und maximalen Umweltschutz.",
        img: "/guaranties/epd.png",
    },
    {
        title: "Energieeffizienz nach ISO 50001",
        desc: "Die ISO 50001 umfasst den Aufbau notwendiger Systeme und Prozesse zur Verbesserung der Energieeffizienz. Dazu zählen die Erfassung der Energieflüsse (Energieverbraucher, Energiequellen und Energieeinsatz) sowie deren Management.Ziele sind die Einsparungen von Energiekosten, die Reduzierung von Treibhausgasen sowie weiterer Umweltbelastungen.",
        img: "/guaranties/dekra.png",
    },
];


export default function CompanyGuarantees() {

    const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
     });

    return (
         <section className="bg-white py-20 px-4 min-h-screen" ref={ref}>
      <div className="h-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {items.map((item, i) => (
          <div
            key={i}
            className={clsx(
              "border border-gray-300 p-8 flex flex-col justify-between rounded-lg bg-white h-full cursor-pointer transition-all duration-500 ease-out",
              "hover:shadow-xl hover:scale-[1.03]",
              inView
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95"
            )}
            style={{
              transitionDelay: `${i * 150}ms`,
            }}
          >
            <div>
              <img src={item.img} alt="" className="w-20 h-20 mb-6" />
              <h3 className="text-base font-semibold uppercase mb-4">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>

    )

}
