"use client";

import Link from "next/link";
import { useState } from "react";

export default function RangeInput() {
  const [category, setCategory] = useState(0);
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex gap-2">
        <input
          className=" text-green-900"
          type="range"
          value={category}
          onChange={(ev) => setCategory(ev.target.value)}
        />
        <div>{category}</div>
      </div>
      <Link
        href={"/products/" + category}
        className="hover:text-white hover:bg-green-950 px-2 py-1 hover:rounded-md"
      >
        Cauta
      </Link>
    </div>
  );
}
