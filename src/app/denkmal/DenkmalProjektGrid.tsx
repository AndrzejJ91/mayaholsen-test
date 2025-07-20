"use client";

import { useState } from "react";
import Image from "next/image";
import DenkmalProjektCard from "./DenkmalProjektCard";

// dane projektów
const projekte = [
    {
        id: 1,
        image: "/zamek1.jpg",
        title: "Pergamonmuseum – Berlin",
        desc: "Dachsanierung im Rahmen eines Denkmalschutzprojekts.",
    },
    {
        id: 2,
        image: "/zamek2.jpg",
        title: "Wasserwerk Friedrichshagen",
        desc: "Ziegel für 3.200 m² Dachfläche geliefert.",
    },
    {
        id: 3,
        image: "/zamek3.jpg",
        title: "Historisches Rathaus – Münster",
        desc: "Sonderanfertigungen für denkmalgeschützte Bauform.",
    },
];

export default function DenkmalgerechteDachziegel() {
    const [selectedProjekt, setSelectedProjekt] = useState<null | typeof projekte[0]>(null);

    return (
        <>
            <section className="w-full bg-white py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8">Beispielprojekte</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projekte.map((projekt) => (
                            <DenkmalProjektCard
                                key={projekt.id}
                                image={projekt.image}
                                title={projekt.title}
                                desc={projekt.desc}
                                onClick={() => setSelectedProjekt(projekt)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* MODAL */}
            {selectedProjekt && (
                <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
                    <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 relative shadow-xl">
                        <button
                            className="absolute top-4 right-5 text-gray-400 hover:text-black text-3xl font-light"
                            onClick={() => setSelectedProjekt(null)}
                        >
                            &times;
                        </button>

                        <Image
                            src={selectedProjekt.image}
                            alt={selectedProjekt.title}
                            width={800}
                            height={500}
                            className="w-full h-auto rounded-lg shadow-md mb-6 object-cover"
                        />

                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedProjekt.title}</h3>

                        <div className="space-y-4 text-gray-700 text-[15px] leading-relaxed">
                            <p><strong>Ziegelvielfalt für ein Berliner Industriedenkmal – Meyer-Holsen beim Wasserwerk Friedrichshagen</strong></p>

                            <p>
                                Ein Projekt wie dieses kommt nicht jeden Tag: Für die denkmalgerechte Sanierung der Dächer der historischen
                                Schöpfmaschinenhäuser A und B des Wasserwerks Friedrichshagen in Berlin haben wir Ziegel geliefert, die höchsten
                                ästhetischen und technischen Anforderungen gerecht werden mussten.
                            </p>

                            <p>
                                Die Denkmalpflegebehörden machten klare Vorgaben: Ziegelform, Schnittlänge und vor allem ein naturbuntes Farbspiel aus
                                drei unterschiedlichen Rottönen sollten sich möglichst exakt an die Originaldeckung anlehnen.
                            </p>

                            <p className="font-medium">Für die gesamte Dachfläche von ca. 3.200 m² lieferten wir:</p>
                            <ul className="list-disc list-inside pl-4 space-y-1">
                                <li>~50.000 Hohlziegel für die Hauptdächer</li>
                                <li>~7.500 Sankt-Moritz-Turmbiberziegel für die Turmflächen</li>
                                <li>~3.500 Mönch-und-Nonne-Ziegel in handstrichähnlicher Optik</li>
                                <li>Diverse Formziegel, Grat- und Firstziegel für Details</li>
                            </ul>

                            <p className="font-semibold text-gray-800 mt-6">Warum Meyer-Holsen?</p>
                            <blockquote className="border-l-4 border-blue-200 pl-4 italic text-gray-600">
                                „Die Ziegel kamen dem historischen Original am nächsten – nur deshalb konnten wir die Ausschreibung mit Materialvorgabe machen.“
                                <br />– Ina Paul, Bauleitung Berliner Wasserbetriebe
                            </blockquote>

                            <p>
                                Wir sind stolz, mit unserem Know-how zur denkmalgerechten Wiederherstellung dieses einzigartigen Bauwerks beizutragen.
                            </p>
                        </div>
                    </div>
                </div>
            )}


        </>
    );
}
