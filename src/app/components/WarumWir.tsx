"use client";

import {
  ShieldCheck,
  Landmark,
  Paintbrush,
  Hammer,
  Construction,
} from "lucide-react";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";

const features = [
  {
    title: "40 Jahre Garantie",
    description:
      "Unsere Ziegel sind wartungsfrei, widerstandsfähig und halten jahrzehntelang – mit Garantie.",
    icon: <ShieldCheck className="text-red-700 w-10 h-10" />,
  },
  {
    title: "Made in Germany",
    description:
      "Tradition und Qualität – seit Generationen produzieren wir ausschließlich in Deutschland.",
    icon: <Landmark className="text-red-700 w-10 h-10" />,
  },
  {
    title: "Farbstabile Oberflächen",
    description:
      "Unsere Ziegel bleiben dauerhaft schön – ohne Nachstreichen oder Pflegeaufwand.",
    icon: <Paintbrush className="text-red-700 w-10 h-10" />,
  },
  {
    title: "Verlegefreundlich",
    description:
      "Technisch optimierte Ziegel für eine schnelle, effiziente Verarbeitung ohne Reklamationen.",
    icon: <Hammer className="text-red-700 w-10 h-10" />,
  },
  {
    title: "Langlebige Konstruktion",
    description:
      "Ein Dach, das Generationen schützt und seinen Wert jeden Tag aufs Neue beweist.",
    icon: <Construction className="text-red-700 w-10 h-10" />,
  },
];

export default function WarumWir() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="bg-white py-20 px-4 md:px-[10%]" ref={ref}>
      {/* Tytuł */}
      <div
        className={clsx(
          "text-center max-w-2xl mx-auto mb-16 transition-all duration-700",
          inView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        )}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Warum Meyer-Holsen?
        </h2>
        <p className="text-gray-600 mt-4">
          Qualität, auf die Sie sich verlassen können – mit Erfahrung, die
          Generationen überdauert. Entdecken Sie unsere Stärken.
        </p>
      </div>

      {/* Górna część z ikonami + obrazek */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex flex-col gap-8 w-full md:w-1/2">
          {features.slice(0, 2).map((item, idx) => (
            <div
              key={idx}
              className={clsx(
                "flex items-start gap-4 transition-all duration-700 delay-100",
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              )}
            >
              {item.icon}
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className={clsx(
            "w-full md:w-1/2 transition-all duration-700 delay-200",
            inView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          )}
        >
          <img
            src="/warumWir/img1.jpeg"
            alt="Ziegel Dach"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Dolna część */}
      <div className="mt-16 flex flex-col md:flex-row gap-8 items-center">
        <div
          className={clsx(
            "w-full md:w-1/2 h-[40vh] transition-all duration-700 delay-300",
            inView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          )}
        >
          <img
            src="/warumWir/img2.jpg"
            alt="Haus Dach"
            className="w-full h-full object-cover rounded-lg shadow-sm"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-8">
          {features.slice(2).map((item, idx) => (
            <div
              key={idx}
              className={clsx(
                "flex items-start gap-4 transition-all duration-700 delay-200",
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              )}
            >
              {item.icon}
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
