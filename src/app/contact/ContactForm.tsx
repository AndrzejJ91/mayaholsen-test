"use client";

import { useState } from "react";
import CompanyMap from "./CompanyMap";

export default function ContactForm() {
  const [subject, setSubject] = useState("Allgemeine Anfrage");

  const inputClass =
    "w-full bg-gray-50 border border-gray-300 rounded-md pl-10 pr-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition";

  const wrapperClass = "relative w-full";
  const iconStyle = "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400";

  return (
    <section className="w-full py-20 bg-neutral-100 px-2 sm:px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Wir freuen uns auf Ihre Kontaktaufnahme!</h2>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto">
            Unsere Fachberater stehen Ihnen gerne zur Verfügung und helfen Ihnen bei allen Fragen rund um unsere Produkte und Dienstleistungen.
            Nutzen Sie unser Kontaktformular, schreiben Sie uns direkt oder besuchen Sie unsere Beraterseite.
            Außerdem steht Ihnen unser Chatbot rund um die Uhr (24/7) zur Verfügung.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 items-start">
          {/* Formularz */}
          <form className="w-full bg-white shadow-lg rounded-lg p-6 space-y-6">
            {/* Temat */}
            <div>
              <label className="block text-md font-bold text-gray-700 mb-1">Thema</label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className={inputClass}
              >
                <option>Allgemeine Anfrage</option>
                <option>Musterbestellung</option>
                <option>Beratungstermin</option>
                <option>Werksbesichtigung</option>
              </select>
            </div>

            {/* Imię i nazwisko */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className={wrapperClass}>
                <span className={iconStyle}>👤</span>
                <input type="text" placeholder="Vorname" className={inputClass} />
              </div>
              <div className={wrapperClass}>
                <span className={iconStyle}>👤</span>
                <input type="text" placeholder="Nachname" className={inputClass} />
              </div>
            </div>

            {/* Email i telefon */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className={wrapperClass}>
                <span className={iconStyle}>✉️</span>
                <input type="email" placeholder="E-Mail" className={inputClass} />
              </div>
              <div className={wrapperClass}>
                <span className={iconStyle}>📞</span>
                <input type="text" placeholder="Telefonnummer" className={inputClass} />
              </div>
            </div>

            {/* Adres tylko przy Musterbestellung */}
            {subject === "Musterbestellung" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className={wrapperClass}>
                  <span className={iconStyle}>🏠</span>
                  <input type="text" placeholder="Straße, Nr." className={inputClass} />
                </div>
                <div className={wrapperClass}>
                  <span className={iconStyle}>🏙</span>
                  <input type="text" placeholder="PLZ / Ort" className={inputClass} />
                </div>
                <div className={wrapperClass + " md:col-span-2"}>
                  <span className={iconStyle}>🌍</span>
                  <input type="text" placeholder="Land" className={inputClass} />
                </div>
              </div>
            )}

            {/* Wiadomość */}
            <div className={wrapperClass}>
              <span className={iconStyle}>📝</span>
              <textarea
                placeholder="Ihre Nachricht"
                className={inputClass + " h-32 resize-none"}
              />
            </div>

            <div className="text-right">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition cursor-pointer"
              >
                Absenden
              </button>
            </div>
          </form>

          {/* Mapa */}
          <CompanyMap />
        </div>
      </div>
    </section>
  );
}
