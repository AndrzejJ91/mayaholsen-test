import { notFound } from "next/navigation";
import { datas } from "./data";
import { Cpu, Settings, Wrench, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const iconMap = {
  Cpu: <Cpu className="w-10 h-10 text-red-700" />,
  Settings: <Settings className="w-10 h-10 text-red-700" />,
  Wrench: <Wrench className="w-10 h-10 text-red-700" />,
  Zap: <Zap className="w-10 h-10 text-red-700" />,
};

export default async function AusbildungDetail({
  params,
}: {
  params: { slug: string };
}) {
  const ausbildung = datas.find((d) => d.slug === params.slug);
  if (!ausbildung) return notFound();

  const icon = iconMap[ausbildung.icon as keyof typeof iconMap];

  return (
    <section className="px-6 md:px-16 py-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <div className="p-4 bg-red-50 inline-block rounded-lg">{icon}</div>
          <h1 className="text-3xl font-bold text-gray-900">{ausbildung.title}</h1>
          <p className="text-gray-700">{ausbildung.intro}</p>
          <Image
            src={ausbildung.image}
            alt={ausbildung.title}
            className="rounded shadow mt-4"
            width={800}
            height={400}
          />
        </div>

        <div className="space-y-8">
          {ausbildung.sections.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-xl font-semibold text-red-700 mb-2">{section.title}</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {section.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
          <Link href={`/jobs/bewerbung?stelle=${encodeURIComponent(ausbildung.title)}`}>
            <button className="mt-6 px-6 py-2 bg-red-700 text-white rounded hover:bg-red-800 text-sm">
              Jetzt bewerben
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

// 🔧 TO JEST KLUCZ
type StaticParams = { slug: string };

export async function generateStaticParams(): Promise<StaticParams[]> {
  return datas.map((d) => ({
    slug: d.slug,
  }));
}
