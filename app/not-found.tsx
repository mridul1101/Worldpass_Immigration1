import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | World Pass Immigration",
  description: "The page you are looking for does not exist. Navigate back to World Pass Immigration.",
};

export default function NotFound() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center pb-16 px-6">
      <div className="text-center max-w-[540px]">
        <span className="text-[100px] block mb-4">🌍</span>
        <h1 className="font-poppins font-bold text-[64px] text-dark leading-tight mb-4">
          404
        </h1>
        <h2 className="font-poppins font-semibold text-[24px] text-secondary mb-4">
          Page Not Found
        </h2>
        <p className="font-poppins text-gray-500 text-[16px] leading-[28px] mb-10">
          Sorry, the page you are looking for doesn&apos;t exist or has been
          moved. Let us help you find your way.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="py-3.5 px-8 bg-secondary text-white font-poppins font-bold text-[16px] rounded-full hover:bg-blue-700 hover:scale-105 hover:shadow-xl transition-all text-center"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="py-3.5 px-8 border-2 border-secondary text-secondary font-poppins font-semibold text-[16px] rounded-full hover:bg-secondary hover:text-white transition-all text-center"
          >
            Contact Us
          </Link>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <p className="font-poppins text-gray-500 text-[14px] mb-4">
            Explore our pages:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "Services", href: "/services" },
              { label: "Process", href: "/process" },
              { label: "Countries", href: "/countries" },
              { label: "Testimonials", href: "/testimonials" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-poppins text-secondary hover:text-blue-800 text-[14px] transition-colors underline underline-offset-4"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
