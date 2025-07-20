"use client";

import { useState, useRef, useEffect } from "react";
import { advisors } from "../../data/advisors";

export default function AdvaisorSection() {
  const [expanded, setExpanded] = useState(false);

  const visible = expanded ? advisors : advisors.slice(0, 4);

  return (
     <section className="mt-16">
      <h2 className="text-2xl font-bold mb-6 text-center">Unsere Fachberater</h2>

      {/* Kontener z płynnym rozwijaniem */}
     <div
  className={`overflow-hidden transition-all duration-700 ease-in-out ${
    expanded ? "max-h-[3000px]" : "max-h-[900px]"
  }`}
>
  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
    {(expanded ? advisors : advisors.slice(0, 6)).map((person) => (
      <div
        key={person.email}
        className="bg-white p-4 rounded shadow text-sm text-center"
      >
        <img
          src={person.image}
          alt={person.name}
          className="w-24 h-24 rounded-full mx-auto mb-3 object-cover border"
        />
        <h4 className="font-semibold">{person.name}</h4>
        <p className="text-gray-500 text-xs mb-2">{person.gebiet}</p>
        <p className="text-sm">📞 {person.phone}</p>
        <p className="text-sm">
          ✉{" "}
          <a
            href={`mailto:${person.email}`}
            className="text-blue-600 hover:underline"
          >
            {person.email}
          </a>
        </p>
      </div>
    ))}
  </div>
</div>

      {/* Przycisk toggle */}
      <div className="mt-8 text-center">
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm text-blue-600 hover:underline flex items-center justify-center gap-1 mx-auto"
        >
          {expanded ? "Weniger anzeigen" : "Alle anzeigen"}
          <span className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}>
            ▼
          </span>
        </button>
      </div>
    </section>
  );
}
