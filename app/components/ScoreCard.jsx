import Image from "next/image";

export function ScoreCard({
  homeTeam,
  awayTeam,
  date,
  location,
  isUpcoming = false,
}) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <Image
              src={homeTeam.logo}
              alt={`${homeTeam.name} logo`}
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="ml-2 font-semibold">{homeTeam.name}</span>
          </div>
          <div className="text-xl font-bold">
            {isUpcoming ? "VS" : `${homeTeam.score} - ${awayTeam.score}`}
          </div>
          <div className="flex items-center">
            <span className="mr-2 font-semibold">{awayTeam.name}</span>
            <Image
              src={awayTeam.logo}
              alt={`${awayTeam.name} logo`}
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
        </div>
        <div className="text-sm text-gray-600">
          <p>{date}</p>
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
}
