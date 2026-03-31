"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();

  const getHref = (id: string) => {
    if (id === "home") return "/";
    return `/${id}`;
  };

  const isActive = (id: string) => {
    if (id === "home") return pathname === "/";
    return pathname === `/${id}`;
  };

  return (
    <nav aria-label="Main navigation" className="w-full flex py-4 justify-between items-center navbar">
      <Link href="/" className="flex items-center cursor-pointer flex-shrink-0">
        <div className="w-[110px] h-[50px] sm:w-[130px] sm:h-[55px] bg-white rounded-xl flex items-center justify-center p-2 shadow-sm">
          <Image
            src="/logo.jpeg"
            alt="World Pass Immigration"
            width={130}
            height={55}
            priority
            className="w-full h-full object-contain"
          />
        </div>
      </Link>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, i) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              i === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <Link
              href={getHref(nav.id)}
              className={`transition-colors ${
                isActive(nav.id)
                  ? "text-secondary font-semibold"
                  : "text-gray-700 hover:text-secondary"
              }`}
            >
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>

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
