import { Settings, Cpu, Wrench, Zap } from "lucide-react";
import Link from "next/link";
import { datas } from "./ausbildung/[slug]/data";

export const offers = [
  {
    title: "Maschinen- und Anlagenführer/in",
    icon: <Settings className="w-5 h-5 text-red-700" />,
    description: "Du lernst, wie unsere modernen Produktionsanlagen bedient, überwacht und instand gehalten werden. Idealer Einstieg in die Industrie mit Perspektive auf langfristige Übernahme.",
  },
  {
    title: "Industriekeramiker/in – Fachrichtung Anlagentechnik",
    icon: <Cpu className="w-5 h-5 text-red-700" />,
    description: "Du tauchst in die Welt der Ziegelproduktion ein und verbindest traditionelles Handwerk mit Hightech-Prozessen. Ideal für Technikbegeisterte mit Sinn für Präzision.",
  },
  {
    title: "Industriemechaniker/in für Instandhaltung",
    icon: <Wrench className="w-5 h-5 text-red-700" />,
    description: "Sorge dafür, dass unsere Maschinen immer rund laufen. Du lernst alles über Wartung, Reparatur und Optimierung unserer technischen Systeme.",
  },
  {
    title: "Elektroniker/in – Fachrichtung Betriebstechnik",
    icon: <Zap className="w-5 h-5 text-red-700" />,
    description: "In dieser Ausbildung bist du für die elektrische Energieversorgung und Automatisierung unserer Produktionsanlagen verantwortlich. Technik, die begeistert – mit Verantwortung.",
  },
];

export default function Ausbildung() {
  return (
    <section className="bg-gray-50 py-24 px-6 md:px-16">
      <h2 className="text-3xl font-bold mb-10 text-gray-800">
        Weitere Möglichkeiten & Ausbildung
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {offers.map((offer, index) => {
          const matchingData = datas.find((d) =>
            offer.title.startsWith(d.title.split(" (")[0]) // dopasuj po początku tytułu
          );

          return (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-red-100 rounded-full">
                  {offer.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{offer.title}</h3>
              </div>

              <p className="text-sm text-gray-700 mb-4 flex-grow">{offer.description}</p>

              {matchingData ? (
                <Link href={`/jobs/ausbildung/${matchingData.slug}`}>
                  <button className="mt-auto px-4 py-2 bg-red-700 text-white rounded hover:bg-red-800 text-sm">
                    Mehr erfahren
                  </button>
                </Link>
              ) : (
                <button disabled className="mt-auto px-4 py-2 bg-gray-300 text-white rounded text-sm">
                  Nicht verfügbar
                </button>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
