"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-600 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="font-bold text-xl">
              LTCC
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/scores"
                className="hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Recent Scores
              </Link>
              <Link
                href="/about"
                className="hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                About Us
              </Link>
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSfZiry51CQYrvSK0OVcUp7SgZ5aroy5fVckQ0fpy9AZ6ZolKg/viewform"
                target="_blank"
                className="hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Join the Team
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/scores"
              className="hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Recent Scores
            </Link>
            <Link
              href="/about"
              className="hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              About Us
            </Link>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSfZiry51CQYrvSK0OVcUp7SgZ5aroy5fVckQ0fpy9AZ6ZolKg/viewform"
              target="_blank"
              className="hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Join the Team
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
