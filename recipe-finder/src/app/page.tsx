"use client";

import MenuOptions from "@/components/menuOptions";
import { useRouter } from "next/navigation";
import { useState } from "react";

const cuisineOptions: string[] = [
  "Italian",
  "Mexican",
  "Chinese",
  "French",
  "Spanish",
];

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [cuisine, setCuisine] = useState<string>("");
  const [maxPrepTime, setMaxPrepTime] = useState<number | "">("");

  const router = useRouter();

  const handleOptionClick = (option: string) => {
    setCuisine(option);
    setMenuOpen(false);
  };

  const isNextEnabled =
    query.trim() !== "" || cuisine !== "" || maxPrepTime !== "";

  const handleNextClick = () => {
    if (!isNextEnabled) return;

    const params = new URLSearchParams();
    if (query) params.append("query", query);
    if (cuisine) params.append("cuisine", cuisine);
    if (maxPrepTime) params.append("maxPrepTime", maxPrepTime.toString());

    router.push(`/recipes?${params.toString()}`);
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-8 pt-10 gap-5 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-2xl font-bold mb-4">Recipe Finder</h1>
      <form className="flex flex-col gap-5">
        <input
          type="text"
          className="border-[2px] border-gray-400 rounded-lg p-2 focus:outline-none focus:border-black focus:ring-0"
          placeholder="Search recipes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="relative">
          <input
            type="text"
            className="border-[2px] border-gray-400 rounded-lg p-2 focus:outline-none focus:border-black focus:ring-0"
            placeholder="Choose cuisine..."
            value={cuisine}
            onClick={() => setMenuOpen(true)}
            readOnly
          />
          {menuOpen && (
            <MenuOptions options={cuisineOptions} onClick={handleOptionClick} />
          )}
        </div>
        <input
          type="number"
          className="border-[2px] border-gray-400 rounded-lg p-2 focus:outline-none focus:border-black focus:ring-0"
          placeholder="Max prep time (minutes)"
          value={maxPrepTime}
          onChange={(e) =>
            setMaxPrepTime(e.target.value ? Number(e.target.value) : "")
          }
          min="1"
        />
        <button
          type="button"
          className={`px-4 py-2 rounded-lg font-medium text-white ${
            isNextEnabled
              ? "bg-black hover:bg-gray-800"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={!isNextEnabled}
          onClick={handleNextClick}
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default HomePage;
