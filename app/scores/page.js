import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { ScoreCard } from "../components/ScoreCard";

export default function ScoresPage() {
  const scores = [
    {
      homeTeam: {
        name: "LTHS",
        logo: "/lt-logo.png",
        score: "104/10",
      },
      awayTeam: {
        name: "RHHS",
        logo: "/rh-logo.png",
        score: "105/3",
      },
      date: "December 27, 2024",
      location: "Northeast Community Cricket Ground",
      isUpcoming: false,
    },
    {
      homeTeam: {
        name: "LTHS",
        logo: "/lt-logo.png",
        score: "79/10",
      },
      awayTeam: {
        name: "WGHS",
        logo: "/wg-logo.jpg",
        score: "80/4",
      },
      date: "December 30, 2024",
      location: "Northeast Community Cricket Ground",
      isUpcoming: false,
    },
    {
      homeTeam: {
        name: "LTHS",
        logo: "/lt-logo.png",
        score: "",
      },
      awayTeam: {
        name: "TBD",
        logo: "/placeholder.svg?height=40&width=40",
        score: "",
      },
      date: "TBD",
      location: "TBD",
      isUpcoming: true,
    },
    {
      homeTeam: {
        name: "LTHS",
        logo: "/lt-logo.png",
        score: 178,
      },
      awayTeam: {
        name: "TBD",
        logo: "/placeholder.svg?height=40&width=40",
        score: 165,
      },
      date: "TBD",
      location: "TBD",
      isUpcoming: true,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-green-600 mb-8 text-center">
            Recent Scores & Upcoming Games
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scores.map((score, index) => (
              <ScoreCard key={index} {...score} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
