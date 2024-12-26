import Image from "next/image";

export function OfficerCard({ name, role, image }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <Image
        src={image}
        alt={`${name} - ${role}`}
        width={300}
        height={300}
        className="w-full h-64 object-cover"
      />
      <div className="p-4 text-center">
        <h3 className="text-xl font-semibold text-green-600">{name}</h3>
        <p className="text-gray-600">{role}</p>
      </div>
    </div>
  );
}
