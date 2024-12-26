import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { OfficerCard } from "../components/OfficerCard";

export default function AboutPage() {
  const officers = [
    {
      name: "Bharat Vardhan Galla",
      role: "President",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "tbd",
      role: "Vice President",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "tbd",
      role: "GM",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "tdb",
      role: "AGM",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "tbd",
      role: "Social Media Manager",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "tbd",
      role: "Website Manager",
      image: "/placeholder.svg?height=300&width=300",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-green-600 mb-8 text-center">
            About Us
          </h1>
          <p className="text-lg text-gray-700 mb-8 text-center">
            Lebanon Trail Cricket Club is dedicated to promoting the sport of
            cricket in our community. Our team of passionate officers works
            tirelessly to organize events, manage the club, and foster a love
            for the game.
          </p>
          <h2 className="text-2xl font-semibold text-green-600 mb-6 text-center">
            Meet Our Officers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {officers.map((officer, index) => (
              <OfficerCard key={index} {...officer} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
