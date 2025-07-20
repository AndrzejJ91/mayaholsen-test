"use client";

import DenkmalProjektGrid from "./DenkmalProjektGrid";

export default function DenkmalgerechteDachziegel() {
  return (
    <>
    <section className="w-full bg-neutral-100 py-16 fade-slide-down">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center px-4 md:px-8 gap-12">
        
        {/* Tekst */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 mt-4">Denkmalgerechte Dachziegel</h2>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Authentische Optik, moderne Technik</h3>
          <p className="text-gray-700 mb-4">
            Denkmalgeschützte Dächer sind ein Kulturgut und verdienen höchste Sorgfalt. Meyer-Holsen zählt zu den führenden Experten für historische Dachziegel und bietet Tondachziegel, die originalgetreue Optik mit moderner Technik verbinden: langlebig, witterungsbeständig und einfach zu verlegen.
          </p>
          <div className="grid grid-cols-2 gap-6">
          <span>   
          <h4 className="font-semibold text-gray-800 mt-6 mb-2">Für Verarbeiter:</h4>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Historische Optik, einfache Verlegung dank exakter Passform</li>
            <li>Langlebig & witterungsbeständig mit minimaler Wasseraufnahme und hoher Stabilität</li>
            <li>Sonderanfertigungen & Reduktionsbrand für authentische Farbgebung</li>
          </ul>
          </span>
          <span> 
          <h4 className="font-semibold text-gray-800 mt-6 mb-2">Für Architekten & Denkmalpfleger:</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Vielfältige Modelle & Farben für jede Epoche</li>
            <li>Energieeffizient & denkmalgerecht sanieren</li>
            <li>Nachhaltige Herstellung für langfristigen Werterhalt</li>
          </ul>
          </span> 
          </div> 
        </div>

        {/* Zdjęcie */}
        <div className="w-full md:w-1/2">
          <div className="relative rounded-xl overflow-hidden shadow-md">
            <img
              src="/castle.jpg"
              alt="Zabytek odnowiony przez Mayaholsen"
              className="object-cover w-full h-full max-h-[400px]"
            />
          </div>
        </div>

      </div>
    </section>
    
      <DenkmalProjektGrid />
 
    </>
    
  );
}
