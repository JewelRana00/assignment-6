"use client";

import { TLibrary } from "@/types/Type";
import React, { createContext, ReactNode, useState } from "react";

type TLibraryContext = {
  libraryPlan: TLibrary[];
  setLibraryPlan: React.Dispatch<React.SetStateAction<TLibrary[]>>;

  librarySaved: TLibrary[];
  setLibrarySaved: React.Dispatch<React.SetStateAction<TLibrary[]>>;
};

export const LibraryContext = createContext<TLibraryContext | null>(null);

type TLibraryProviderProps = {
  children: ReactNode;
};

const LibraryProvider = ({ children }: TLibraryProviderProps) => {
  const [libraryPlan, setLibraryPlan] = useState<TLibrary[]>(() => {
    if (typeof window === "undefined") return [];

    const savedPlan = localStorage.getItem("libraryPlan");

    return savedPlan ? JSON.parse(savedPlan) : [];
  });

  const [librarySaved, setLibrarySaved] = useState<TLibrary[]>(() => {
    if (typeof window === "undefined") return [];

    const savedList = localStorage.getItem("librarySaved");

    return savedList ? JSON.parse(savedList) : [];
  });

  return (
    <LibraryContext.Provider
      value={{
        libraryPlan,
        setLibraryPlan,
        librarySaved,
        setLibrarySaved,
      }}
    >
      {children}
    </LibraryContext.Provider>
  );
};

export default LibraryProvider;
