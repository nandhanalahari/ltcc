"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-white">
        <section className="flex items-center justify-center min-h-[calc(100vh-4rem)] p-4">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 mx-2">
              <span className="text-green-600">Lebanon </span>
              <span className="text-yellow-600">Trail </span>
              <span className="text-green-600">Cricket </span>
              <span className="text-yellow-600">Club</span>
            </h1>
            <h2 className="text-sm sm:text-base md:text-lg font-bold text-green-600 mb-6">
              Bring cricket to our community for the greater good
            </h2>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center">
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSfZiry51CQYrvSK0OVcUp7SgZ5aroy5fVckQ0fpy9AZ6ZolKg/viewform"
                target="_blank"
                className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center"
              >
                <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mx-2 transition duration-300 ease-in-out transform hover:scale-105 active:scale-95">
                  Join us!
                </button>
              </Link>
              <Link
                href="/about"
                className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center"
              >
                <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mx-2 transition duration-300 ease-in-out transform hover:scale-105 active:scale-95">
                  Learn More!
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-green-600 mb-8 text-center">
              About Our Club
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <Image
                  src="/lt.png"
                  alt="Lebanon Trail Cricket Club team"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 space-y-4">
                <p className="text-lg">
                  Lebanon Trail Cricket Club is dedicated to promoting the sport
                  of cricket in our local community. We believe in the power of
                  cricket to bring people together, foster teamwork, and promote
                  physical fitness.
                </p>
                <p className="text-lg">
                  Our club welcomes players of all skill levels, from beginners
                  to experienced cricketers. We offer regular training sessions,
                  friendly matches, and participate in local tournaments.
                </p>
                <p className="text-lg">
                  Join us in our mission to grow the game of cricket and create
                  a vibrant sporting community in Lebanon Trail!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
