"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";

const faqs = [
  {
    question: "Wie lange dauert die Lieferung?",
    answer:
      "Unsere Standardlieferung dauert 3–5 Werktage. Expressversand ist ebenfalls möglich.",
  },
  {
    question: "Sind Ihre Dachziegel zertifiziert?",
    answer:
      "Ja, alle unsere Produkte sind nach deutschen und EU-Standards geprüft und zertifiziert.",
  },
  {
    question: "Bieten Sie auch Montage an?",
    answer:
      "Wir arbeiten mit zertifizierten Partnern zusammen, die die Montage übernehmen können.",
  },
  {
    question: "Kann ich ein kostenloses Muster bekommen?",
    answer:
      "Ja, wir senden Ihnen gerne ein kostenloses Muster zu. Kontaktieren Sie uns einfach.",
  },
];

export default function FAQS() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className={clsx(
        "bg-white w-full py-20 px-4 flex flex-col items-center transition-all duration-700 ease-out",
        inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
      )}
      ref={ref}
    >
      {/* Nagłówek */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-gray-800">
          Hast du Fragen?
        </h2>
        <p className="text-sm text-gray-600">
          Wir haben schon Antworten auf fast alles...
        </p>
      </div>

      {/* Lista FAQ */}
      <div className="w-full max-w-3xl flex flex-col gap-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={clsx(
                "bg-gray-50 border border-gray-100 rounded-xl shadow-sm p-5 transition-all duration-300",
                isOpen && "border-gray-300 shadow-md"
              )}
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggle(idx)}
              >
                <h4
                  className={clsx(
                    "text-md font-semibold transition-colors duration-300",
                    isOpen ? "text-gray-900" : "text-gray-800"
                  )}
                >
                  {faq.question}
                </h4>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              <div
                className={clsx(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  isOpen ? "max-h-[300px] mt-3 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <p className="text-sm text-gray-700">{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Przycisk */}
      <div className="mt-10">
        <a
          href="/faq"
          className="inline-block bg-black text-white px-6 py-2 rounded-full text-sm font-medium shadow hover:bg-gray-800 transition-colors"
        >
          Alle Fragen anzeigen
        </a>
      </div>
    </section>
  );
}
