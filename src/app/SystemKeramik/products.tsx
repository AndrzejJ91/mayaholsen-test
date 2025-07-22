"use client";

import Image from "next/image";

const featuresData = [
    {
        title: "Dachtritte",
        description:
            "Stabil, flexibel, sicher: Ideal für Wartungswege, sichere Begehbarkeit und Kaminzugang",
        cta: "mehr zu Dachtritten",
        image: "/system/dachtritt.jpg",
    },
    {
        title: "Schneefang",
        description:
            "Schutz für Dach und Umgebung: Verhindert gefährlichen Dachlawinen-Abgang und sichert Wege und Eingänge",
        cta: "mehr zu Schneefang",
        image: "/system/schneefang.jpg",
    },
    {
        title: "Solarträger",
        description:
            "Effizient und normgerecht: Perfekte Grundlage für eine zukunftssichere Dachintegration von Solarenergie",
        cta: "mehr zu Solarträger",
        image: "/system/solartraeger.jpg",
    },
];

export default function Products() {
    return (
        <section className="w-full bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {featuresData.map((data, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 transition hover:shadow-lg hover:scale-[1.02] flex flex-col min-h-[60px]"
                        >
                            <div className="w-full aspect-[5/4] overflow-hidden">
                                <Image
                                    src={data.image}
                                    alt={data.title}
                                    width={1000} // lub 1200 – zależnie od kontenera
                                    height={800} // bo 5:4 proporcja (1000 * 0.8 = 800)
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6 flex flex-col gap-4 flex-grow">
                                <h4 className="text-xl font-semibold text-gray-800">{data.title}</h4>
                                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                                    {data.description}
                                </p>
                                <button className="text-orange-600 text-sm font-medium hover:underline self-start">
                                    {data.cta}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
