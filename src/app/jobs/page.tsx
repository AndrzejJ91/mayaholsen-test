"use client";
import {
    Home,
    Clock,
    PlaneTakeoff,
    Leaf,
    ShieldCheck,
    Users,
    Gift,
    Languages,
    Shirt
} from "lucide-react";
import JobBoard from "./JobBoard";
import Ausbildung from "./ApprenticeshipBoard";
import Image from "next/image";

const benefits = [
    {
        title: "Regional verbunden",
        icon: <Home className="w-5 h-5 text-red-700" />,
        description:
            "Mit zwei modernen Werken in der Region erlebst du einen Job, der Zukunft und Heimatliebe verbindet. Du hast kurze Wege, klare Abläufe und kennst das ganze Team. Und das fühlt sich gut an.",
    },
    {
        title: "Langfristig statt kurzfristig",
        icon: <Clock className="w-5 h-5 text-red-700" />,
        description:
            "Keine Kurzarbeit. Kein Hire & Fire. Die durchschnittliche Betriebszugehörigkeit bei Renteneintritt liegt bei über 25 Jahren. Weil es einfach passt.",
    },
    {
        title: "30 Tage Urlaub, Urlaubsgeld und ein 13. Gehalt",
        icon: <PlaneTakeoff className="w-5 h-5 text-red-700" />,
        description:
            "Erholung gehört zum Job. Deshalb gibt’s bei uns 30 Tage Urlaub, bisher immer ein 13. Gehalt und Urlaubsgeld. Klar geregelt, fair bezahlt.",
    },
    {
        title: "Verantwortung für Umwelt & Zukunft",
        icon: <Leaf className="w-5 h-5 text-red-700" />,
        description:
            "Überwiegend grüner Strom, umweltfreundliche Flotte, kein Abwasser und Weiterverwendung von Abfällen. Wer hier arbeitet, handelt nachhaltig. Tag für Tag.",
    },
    {
        title: "Starkes Produkt. Starkes Team.",
        icon: <ShieldCheck className="w-5 h-5 text-red-700" />,
        description:
            "Du wirkst an Produkten mit, die Jahrzehnte halten und bei Profis die erste Wahl sind. Ein Job mit Sinn. Eine Arbeit, hinter der du stehen kannst.",
    },
    {
        title: "Zusammen arbeiten. Zusammen wachsen.",
        icon: <Users className="w-5 h-5 text-red-700" />,
        description:
            "Ob Workshops, Weiterbildungen, kleine Feste oder gemeinsame Aktionen – so wirst du ganz schnell ein Teil unseres Teams.",
    },
    {
        title: "Weitere Benefits",
        icon: <Gift className="w-5 h-5 text-red-700" />,
        description:
            "Gute Arbeit verdient gute Extras. Du kannst ein E-Bike leasen und profitierst von betrieblicher Altersvorsorge, Berufsunfähigkeitsversicherung sowie weiteren Corporate Benefits.",
    },
    {
        title: "Deutschkurs",
        icon: <Languages className="w-5 h-5 text-red-700" />,
        description:
            "Um den Einstieg ins Unternehmen und in den Alltag zu erleichtern, bieten wir im Rahmen eines Pilotprojekts einen Deutschkurs für Mitarbeitende mit Migrationshintergrund an.",
    },
    {
        title: "Arbeitskleidung",
        icon: <Shirt className="w-5 h-5 text-red-700" />,
        description:
            "Für dich liegt ab dem ersten Tag hochwertige Arbeitskleidung bereit: 3 Jacken, 3 Hosen, 5 Poloshirts und 3 Sweatshirts – bequem, praktisch, professionell. Und ehrlich gesagt: ziemlich gut angezogen.",
    },
];




export default function Jobs() {
    return (
        <>
            <section className="grid grid-cols-1 md:grid-cols-2 py-24 px-6 md:px-16 gap-12 bg-white fade-slide-down">
                {/* Mniejsze zdjęcie */}
                <div className="w-full max-h-[400px] overflow-hidden rounded-lg shadow-md">
                    <Image
                        src="/jobs/jobs.jpg"
                        alt="Karriere bei Meyer-Holsen"
                        width={1200} // typowa szerokość dla pełnej sekcji
                        height={400} // bo `max-h-[400px]`
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Tekst */}
                <div className="flex flex-col justify-center gap-6 max-w-xl">
                    <h2 className="text-3xl font-bold text-gray-900">
                        Deine Karriere bei Meyer-Holsen
                    </h2>
                    <h3 className="text-xl font-medium text-gray-700">
                        Ein Dach, das bleibt – ein Job, der trägt.
                    </h3>
                    <p className="text-base leading-relaxed text-gray-600">
                        Tradition trifft Technik. Mit Menschen, die Qualität leben. Bei Meyer-Holsen gehörst du zu einem motivierten Team, das seit über 165 Jahren in zwei Werken im Kreis Minden-Lübbecke langlebige Dachziegel produziert – mit modernen Maschinen, klarem Anspruch und viel Know-how.
                        <br /><br />
                        Unsere Dachziegel liegen auf Häusern in ganz Europa, und sie erzählen Geschichten: von Verantwortung, Beständigkeit und echter Handwerkskunst.
                        <br /><br />
                        Was du hier tust, bleibt. Sichtbar auf unzähligen Dächern.
                    </p>
                </div>
            </section>
            <section className="bg-gray-50 py-24 px-6 md:px-16">
                <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
                    Deine Vorteile bei Meyer-Holsen
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition duration-300 cursor-pointer"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-full bg-red-100">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
                            </div>
                            <p className="text-sm text-gray-700 leading-relaxed">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-white py-24 px-6 md:px-16">
                <h2 className="text-3xl font-bold mb-12 text-gray-800 flex justify-center">Aktuelle Stellenangebote</h2>
                <JobBoard />
            </section>

            <section className="bg-white py-24 px-6 md:px-16">
                <h2 className="text-3xl font-bold mb-12 text-gray-800 flex justify-center">Ausbildung starten</h2>
                <Ausbildung />
            </section>

        </>
    );
}
