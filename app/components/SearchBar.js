"use client";

import Link from "next/link";
import { useState } from "react";

export default function SearchBar() {
  const [category, setCategory] = useState("");
  return (
    <div className="flex items-center text-black rounded-md p-2 border h-8 shadow-md shadow-white/20 bg-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>

      <input
        value={category}
        type="text"
        placeholder="cauta"
        className="shadow-white/20 h-7 outline-none p-2"
        onChange={(ev) => setCategory(ev.target.value)}
      />
      <Link href={"/products/" + category}>Cauta</Link>
    </div>
  );
}
