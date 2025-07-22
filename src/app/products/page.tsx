"use client";

import dachziegelData from "./products";
import Link from "next/link";
import Image from "next/image";

export default function DachziegelGrid() {
  return (
    <section className="bg-white py-20 px-6 fade-slide-down">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
    Dachziegel, die überzeugen
  </h2>

  <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed text-lg">
    13 Modelle für langlebige, sichere Dächer. Seit über 165 Jahren steht Meyer-Holsen für Qualität, die Generationen überdauert.
  </p>

<div className="max-w-6xl mx-auto mb-12">
  <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
    Ihre Vorteile auf einen Blick
  </h3>

  {/* Używamy flex + gap-x zamiast grid */}
  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-y-6 md:gap-x-16">
    {/* Kolumna 1 */}
    <div className="flex-1 space-y-6">
      <div>
        <dt className="font-medium text-gray-900">✅ Für jede Dachform</dt>
        <dd className="text-gray-600 text-sm mt-1">
          Geeignet für flache bis steile Dachneigungen – flexibel und universell einsetzbar.
        </dd>
      </div>
      <div>
        <dt className="font-medium text-gray-900">✅ Maximale Widerstandskraft</dt>
        <dd className="text-gray-600 text-sm mt-1">
          Hohe Scherbendichte und geringe Wasseraufnahme schützen dauerhaft.
        </dd>
      </div>
      <div>
        <dt className="font-medium text-gray-900">✅ Langfristige Sicherheit</dt>
        <dd className="text-gray-600 text-sm mt-1">
          Nachliefergarantie und 40 Jahre Vollgarantie – einzigartig in der Branche.
        </dd>
      </div>
    </div>

    {/* Kolumna 2 */}
    <div className="flex-1 space-y-6">
      <div>
        <dt className="font-medium text-gray-900">✅ Schnelle Verlegung</dt>
        <dd className="text-gray-600 text-sm mt-1">
          Exakte Passform und erweiterter Verschiebebereich für saubere Ergebnisse.
        </dd>
      </div>
      <div>
        <dt className="font-medium text-gray-900">✅ Zeitlose Ästhetik</dt>
        <dd className="text-gray-600 text-sm mt-1">
          13 Modelle, viele Farben, Zubehör und individuelle Sonderanfertigungen.
        </dd>
      </div>
    </div>
  </div>
</div>


  {/* Produkty zostają pod spodem */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
    {dachziegelData.map((product) => (
      <div
        key={product.slug}
        className="bg-gray-100 rounded-xl shadow p-6 flex flex-col hover:shadow-xl hover:ring-1 ring-black/10 transition-all"
      >
        <div className="bg-white p-2 rounded mb-4 shadow-sm overflow-hidden">
          <Image
            src={product.img}
            alt={product.title}
            className="w-full h-48 object-contain rounded transition-transform duration-300 hover:scale-105"
          />
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {product.title}
        </h3>
        <p className="text-sm text-gray-600 mb-4">{product.description}</p>

        <Link
          href={`/products/${product.slug}`}
          className="mt-auto inline-block bg-black text-white py-2 px-4 rounded-md text-sm hover:bg-gray-800 transition"
        >
          Mehr erfahren
        </Link>
      </div>
    ))}
  </div>
</section>


  );
}
