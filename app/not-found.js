import Link from "next/link";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-100 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">
            <span className="text-green-600">4</span>
            <span className="text-yellow-600">0</span>
            <span className="text-green-600">4</span>
          </h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
          <Link
            href="/"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 active:scale-95"
          >
            Return to Homepage
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
