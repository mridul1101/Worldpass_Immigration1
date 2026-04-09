"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, services, countries } from "@/lib/constants";

const dropdownData: Record<string, { label: string; href: string; emoji?: string }[]> = {
  services: services.map((s) => ({ label: s.title, href: "/services", emoji: s.emoji })),
  countries: countries.map((c) => ({ label: c.name, href: "/countries", emoji: c.flag })),
};

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const getHref = (id: string) => {
    if (id === "home") return "/";
    return `/${id}`;
  };

  const isActive = (id: string) => {
    if (id === "home") return pathname === "/";
    return pathname === `/${id}`;
  };

  const hasDropdown = (id: string) => id in dropdownData;

  return (
    <nav aria-label="Main navigation" className="w-full flex py-4 justify-between items-center navbar">
      <Link href="/" className="flex items-center cursor-pointer flex-shrink-0">
        <div className="w-[160px] h-[62px] sm:w-[200px] sm:h-[75px] flex items-center justify-center">
          <Image
            src="/logo.jpeg"
            alt="World Pass Immigration"
            width={200}
            height={75}
            priority
            className="w-full h-full object-contain scale-125"
          />
        </div>
      </Link>

      {/* Desktop nav */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, i) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] relative ${
              i === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
            onMouseEnter={() => hasDropdown(nav.id) && setOpenDropdown(nav.id)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <Link
              href={getHref(nav.id)}
              className={`transition-colors flex items-center gap-1 ${
                isActive(nav.id)
                  ? "text-secondary font-semibold"
                  : "text-gray-700 hover:text-secondary"
              }`}
            >
              {nav.title}
              {hasDropdown(nav.id) && (
                <svg className={`w-3.5 h-3.5 transition-transform ${openDropdown === nav.id ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </Link>

            {/* Dropdown panel */}
            {hasDropdown(nav.id) && openDropdown === nav.id && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                <div className="bg-white border border-gray-200 rounded-xl shadow-xl p-4 min-w-[220px] dropdown-enter">
                  {dropdownData[nav.id].map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-gray-600 hover:bg-secondary/5 hover:text-secondary transition-colors text-[14px] font-poppins"
                    >
                      {item.emoji && <span className="text-lg">{item.emoji}</span>}
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile nav */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <button
          aria-label="Toggle menu"
          onClick={() => setToggle((previous) => !previous)}
          className="w-[28px] h-[28px] flex items-center justify-center"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {toggle ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-white border border-gray-200 shadow-xl absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, i) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  i === navLinks.length - 1 ? "mr-0" : "mb-4"
                }`}
              >
                <Link
                  href={getHref(nav.id)}
                  className={`transition-colors ${
                    isActive(nav.id)
                      ? "text-secondary font-semibold"
                      : "text-gray-700 hover:text-secondary"
                  }`}
                  onClick={() => setToggle(false)}
                >
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
