"use client";
import Card from "./Card";
import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
export default function Cards() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProduct();
  }, []);

  async function getProduct() {
    axios.get("/api/products").then((res) => setProducts(res.data));
  }
  console.log(products);
  return (
    <div className="overflow-scroll overflow-x-hidden pl-2 pt-2 h-[calc(100vh-80px)] w-full text-black gap-3 grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
      {products?.map((product) => (
        <Card product={product} />
      ))}
    </div>
  );
}
