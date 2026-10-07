"use client";

import { LibraryContext } from "@/Context/libraryContext";
import Link from "next/link";
import { useContext } from "react";

const NavButton = () => {
  const libraryContext = useContext(LibraryContext);

  if (!libraryContext) {
    return null;
  }

  const { libraryPlan, librarySaved } = libraryContext;

  return (
    <div className="flex items-center gap-8">
      <Link
        href="/myplan"
        className="flex items-center gap-3 text-5 text-white"
      >
        <span>Plan</span>

        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#B6FF00] text-6 font-bold text-black">
          {libraryPlan.length}
        </span>
      </Link>

      <Link
        href="/myplan"
        className="flex items-center gap-3 text-5 text-white"
      >
        <span>Saved</span>

        <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#343A46] text-6 text-white">
          {librarySaved.length}
        </span>
      </Link>
    </div>
  );
};

export default NavButton;
