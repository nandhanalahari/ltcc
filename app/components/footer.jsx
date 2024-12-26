import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-green-600 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">
              Lebanon Trail Cricket Club
            </h3>
            <p className="text-sm">
              Bringing cricket to our community for the greater good
            </p>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end gap-4">
            <Link href="/scores" className="hover:underline">
              Scores
            </Link>
            <Link href="/about" className="hover:underline">
              About
            </Link>
            {/*<Link
              href="/mailto:alahari.nandhan@gmail.com"
              target="_blank"
              className="hover:underline"
            >
              Contact
            </Link>*/}
            <Link
              href="https://www.instagram.com/ltcricket2024/?__pwa=1#"
              target="_blank"
              className="hover:underline"
            >
              Instagram
            </Link>
          </nav>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Lebanon Trail Cricket Club. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
