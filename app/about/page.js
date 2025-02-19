import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { OfficerCard } from "../components/OfficerCard";

export default function AboutPage() {
  const officers = [
    {
      name: "Bharat Vardhan Galla",
      role: "President",
      image: "/bharat.png",
    },
    {
      name: "Sushant Kumar Vetapalam",
      role: "Vice President",
      image: "/sushi.png",
    },
    {
      name: "Tanvesh Tenali",
      role: "Team Manager 1",
      image: "/tanvesh.png",
    },
    {
      name: "Nanda Gopal Velivala",
      role: "Team Manager 2",
      image: "/nanda.png",
    },
    {
      name: "Guhanesh",
      role: "Graphic designer 1",
      image: "/guhan.png",
    },
    {
      name: "Daakshinya Konakanchi",
      role: "Graphic designer 2",
      image: "/daakshu.png",
    },
    {
      name: "Pankaj",
      role: "Graphic designer 3",
      image: "/pankaj.png",
    },
    {
      name: "Chinmay Yalamati",
      role: "Social Media Manager",
      image: "/chinni.png",
    },
    {
      name: "Sai Suraj Kopparopu",
      role: "Website Designer 1",
      image: "/sai.png",
    },
    {
      name: "Chiruhas Nenavath",
      role: "Website Designer 2",
      image: "/chiru.png",
    },
    {
      name: "Nandhan Alahari",
      role: "Website Developer",
      image: "/nandhan.png",
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
