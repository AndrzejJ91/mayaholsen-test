import Image from "next/image";

export default function DenkmalProjektCard({
  image,
  title,
  desc,
  onClick,
}: {
  image: string;
  title: string;
  desc: string;
  onClick: () => void;
}) {
  return (
    <div
      className="cursor-pointer rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105 bg-neutral-100"
      onClick={onClick}
    >
      <Image
        src={image}
        alt={title}
        width={600}
        height={400}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{desc}</p>
        <button className="mt-4 text-sm text-blue-600 hover:underline">
          Mehr erfahren
        </button>
      </div>
    </div>
  );
}
