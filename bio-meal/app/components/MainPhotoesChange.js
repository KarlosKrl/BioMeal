"use client";
import Image from "next/image";
import { useState } from "react";

export default function MainPhotoesChange({ produs }) {
  const [currentImage, setCurrentImage] = useState(produs.image[0]);
  return (
    <>
      <div className="relative w-full max-w-[300px] aspect-square">
        <Image
          src={currentImage}
          fill
          priority
          style={{ objectFit: "cover" }}
          className="rounded-md"
          alt={produs.alt}
        />
      </div>
      <div className=" flex h-full w-full gap-4 justify-center mt-4 max-w-[300px]">
        {produs.image.map((val, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(produs.image[index])}
            className="relative w-full max-w-[60px] aspect-square shadow-md shadow-black/80 rounded-md"
          >
            <Image
              src={produs.image[index]}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-md"
              alt={produs.alt}
            />
          </button>
        ))}
      </div>
    </>
  );
}
