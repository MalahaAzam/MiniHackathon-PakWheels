"use client";
import React from "react";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      <nav className="flex w-full h-10 bg-gray-950 text-white border-gray-800 text-base border items-center justify-between px-4 md:px-20">
        <div className="hidden md:flex space-x-4">
          <p>📱 Download App via SMS</p>
        </div>

        <div className="flex space-x-5">
          <p className="text-red-600">اردو</p>
          <p>
            <Link href="./Routes2/Sign">| Sign Up </Link>
          </p>
          <p>
            <Link href="./Routes2/Sign">| Sign In </Link>
          </p>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {isMobileMenuOpen && (
        <nav className="md:hidden bg-gray-950 text-white px-4 py-2 space-y-2">
          <p>📱 Download App via SMS</p>
          <p className="text-red-600">اردو</p>
          <p>
            <Link href="./Routes2/Sign">Sign Up</Link>
          </p>
          <p>
            <Link href="./Routes2/Sign">Sign In</Link>
          </p>
        </nav>
      )}

      <nav className="flex w-full h-20 text-xl bg-gray-950 text-white items-center px-4 md:px-8">
        <div className="flex space-x-7 items-center">
          <div className="pl-0 md:pl-8">
            <Link href="https://www.pakwheels.com/">
              <Image src="/logo.png" alt="logo" width={175} height={125} />
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 items-center pl-4 text-sm">
            <div>
              <Link href="#">Home▼</Link>
            </div>
            <div>
              <Link href="./Routes/UsedCars">Used Cars▼</Link>
            </div>
            <div>
              <Link href="./Routes/NewCars">New Cars▼</Link>
            </div>
            <div>
              <Link href="./Routes/Bikes">Bikes▼</Link>
            </div>
            <div>
              <Link href="./Routes/AutoStore">Auto Store▼</Link>
            </div>
            <div>
              <Link href="./Routes/Videos">Videos▼</Link>
            </div>
            <div>
              <Link href="./Routes/Forum">Forum▼</Link>
            </div>
            <div>
              <Link href="./Routes/Blogs">Blogs▼</Link>
            </div>
            <div>
              <Link href="./Routes/More">More▼</Link>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <button className="flex items-center bg-red-700 text-white rounded-md text-base px-3 py-1">
            <Link href="./Routes2/Add">Post an Add</Link>
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <nav className="md:hidden bg-gray-950 text-white px-4 py-2 space-y-2">
          <div>
            <Link href="#">Home▼</Link>
          </div>
          <div>
            <Link href="./Routes/UsedCars">Used Cars▼</Link>
          </div>
          <div>
            <Link href="./Routes/NewCars">New Cars▼</Link>
          </div>
          <div>
            <Link href="./Routes/Bikes">Bikes▼</Link>
          </div>
          <div>
            <Link href="./Routes/AutoStore">Auto Store▼</Link>
          </div>
          <div>
            <Link href="./Routes/Videos">Videos▼</Link>
          </div>
          <div>
            <Link href="./Routes/Forum">Forum▼</Link>
          </div>
          <div>
            <Link href="./Routes/Blogs">Blogs▼</Link>
          </div>
          <div>
            <Link href="./Routes/More">More▼</Link>
          </div>
          <div>
            <button className="flex items-center bg-red-700 text-white rounded-md text-base px-3 py-1 w-full">
              <Link href="./Routes2/Add">Post an Add</Link>
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
