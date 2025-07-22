"use client";

import { Check } from "lucide-react";
import Products from "./products";
import Image from "next/image";

export default function SystemKeramik() {
  return (
    <>
     <section className="w-full bg-neutral-100 py-20 fade-slide-down">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-4 md:px-8">
        {/* Obrazek */}
        <div className="w-full h-96">
          <Image
            src="/system/system.jpeg"
            alt="Systemkeramik"
            className="w-full h-full object-cover rounded-2xl shadow-md"
          />
        </div>

        {/* Tekst + lista */}
        <div className="flex flex-col justify-center gap-8">
          {/* Opis */}
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-bold tracking-tight text-gray-800">
              SystemkeramiK
            </h2>
            <h3 className="text-xl text-gray-700">
              für sichere und schnelle Dachmontage
            </h3>
            <p className="text-base leading-relaxed text-gray-600">
              Dachtritte, Schneefanggitter und Solarträger müssen sicher halten
              und sich nahtlos ins Dachbild einfügen. Mit Systemkeramik von
              Meyer-Holsen erhalten Sie langlebige und zeitsparende Lösungen,
              die ohne aufwendige Dachdurchdringung oder Bearbeitung der Ziegel
              montiert werden können. Einfach verlegen, dauerhaft zuverlässig.
              Als einziges Dachziegelwerk in Deutschland bieten wir mit unserer
              Systemkeramik diese Lösung.
            </p>
          </div>

          {/* Lista korzyści w dwóch kolumnach */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Ihre Vorteile auf einen Blick:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Zeitsparende Montage",
                  desc: "Sparrenunabhängige Befestigung erleichtert die Installation",
                },
                {
                  title: "Kein Eingriff in die Dachhaut",
                  desc: "Vollkeramischer Ziegel vormontiert – keine Schwachstellen",
                },
                {
                  title: "Hochwertige Optik",
                  desc: "In schwarz oder ziegelrot für harmonische Integration",
                },
                {
                  title: "Modular erweiterbar",
                  desc: "Schneefanggitter & Dachtritte flexibel anpassbar",
                },
                {
                  title: "Sicherheit mit Garantie",
                  desc: "5 Jahre Herstellergarantie – geprüft & verlässlich",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 mt-1 text-green-600 shrink-0" />
                  <div>
                    <p className="font-medium text-gray-700">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <Products />
    </>
   
  );
}
