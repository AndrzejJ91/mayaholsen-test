"use client";

import { useState } from "react";
import { MapPin, Clock } from "lucide-react";
import Link from "next/link";

const jobs = [
    {
        name: "Mechaniker (m/w/d)",
        ort: "Werk Hüllhorst",
        wymiarpracy: "Vollzeit",
        details: "Du arbeitest in einem motivierten Team mit modernster Technik...",
    },
    {
        name: "Produktionshelfer (m/w/d)",
        ort: "Werk Porta Westfalica",
        wymiarpracy: "Schichtbetrieb",
        details: "Du unterstützt unser Team bei der Fertigung langlebiger Ziegel...",
    },
    {
        name: "Vertriebsmitarbeiter (m/w/d)",
        ort: "Außendienst",
        wymiarpracy: "Teilzeit",
        details: "Du betreust Bestandskunden und baust neue Kontakte auf...",
    },
];

export default function JobBoard() {
    const [selectedJob, setSelectedJob] = useState(jobs[0]);

    return (
        <section className="py-16 px-6 md:px-16 bg-white">
            <h2 className="text-3xl font-bold mb-10 text-gray-800">Aktuelle Stellenangebote</h2>

            <div className="grid md:grid-cols-[400px_1fr] gap-12">
                {/* Lewa kolumna – lista */}
                {/* Lewa kolumna – lista z przewijaniem */}
                <div className="space-y-6 max-h-[600px] overflow-y-auto pr-2">
                    {jobs.map((job, idx) => (
                        <div
                            key={idx}
                            onClick={() => setSelectedJob(job)}
                            className={`cursor-pointer p-6 rounded-xl border ${selectedJob.name === job.name
                                ? "bg-red-50 border-red-400 shadow"
                                : "bg-gray-50 border-gray-200 hover:shadow-md"
                                } transition`}
                        >
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{job.name}</h3>

                            <div className="flex items-center gap-2 mb-1 text-gray-600 text-sm">
                                <MapPin className="w-4 h-4 text-red-700" />
                                <span>{job.ort}</span>
                            </div>

                            <div className="flex items-center gap-2 text-gray-600 text-sm">
                                <Clock className="w-4 h-4 text-red-700" />
                                <span>{job.wymiarpracy}</span>
                            </div>
                        </div>
                    ))}
                </div>


                {/* Prawa kolumna – szczegóły */}
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 shadow-sm">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedJob.name}</h3>
                    <p className="text-sm text-gray-600 mb-6">
                        <MapPin className="inline-block w-4 h-4 mr-1 text-red-700" />
                        {selectedJob.ort} &nbsp; • &nbsp;
                        <Clock className="inline-block w-4 h-4 mr-1 text-red-700" />
                        {selectedJob.wymiarpracy}
                    </p>
                    <p className="text-gray-700 leading-relaxed">{selectedJob.details}</p>

                    <Link href={`/jobs/bewerbung?stelle=${encodeURIComponent(selectedJob.name)}`}>
                        <button className="mt-6 px-6 py-2 bg-red-700 text-white rounded hover:bg-red-800 text-sm">
                            Jetzt bewerben
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
