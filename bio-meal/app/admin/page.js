"use client";

import { useState, useEffect } from "react";
import axios from "axios";

export default function AdminPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);
  async function saveProduct(ev) {
    ev.preventDefault();
    const data = { name, description, category, price };
    await axios.post("/api/products", data);
    setName("");
    setDescription("");
    setCategory("");
    setPrice("");
    getProduct();
  }

  useEffect(() => {
    getProduct();
  }, []);

  async function getProduct() {
    axios.get("/api/products").then((res) => setProducts(res.data));
  }
  async function deleteTask(id) {
    await axios.delete("api/products?id=" + id);
    getProduct();
  }
  return (
    <div className="h-fit bg-gray-300">
      <form
        onSubmit={saveProduct}
        className="flex flex-col items-center justify-center gap-4"
      >
        <div className="flex gap-2 p-2 justify-between w-[450px]">
          <label className="">Product Name</label>
          <input
            type="text"
            placeholder="task"
            className="px-2 py-1 rounded-md"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            required
          />
        </div>
        <div className="flex gap-2 p-2 justify-between w-[450px]">
          <label className="">Product Description</label>
          <input
            type="text"
            placeholder="task"
            className="px-2 py-1 rounded-md"
            value={description}
            onChange={(ev) => setDescription(ev.target.value)}
            required
          />
        </div>
        <div className="flex gap-2 p-2 justify-between w-[450px]">
          <label className="">Product Category</label>
          <input
            type="text"
            placeholder="task"
            className="px-2 py-1 rounded-md"
            value={category}
            onChange={(ev) => setCategory(ev.target.value)}
            required
          />
        </div>
        <div className="flex gap-2 p-2 justify-between w-[450px]">
          <label className="">Product Price</label>
          <input
            type="text"
            placeholder="task"
            className="px-2 py-1 rounded-md"
            value={price}
            onChange={(ev) => setPrice(ev.target.value)}
            required
          />
        </div>

        <input type="submit" className="p-2 border-2 rounded-md" />
      </form>
      {products.map((product) => (
        <div className=" flex flex-col gap-2 border-2 rounded-md">
          <div>{product.productName}</div>
          <div>{product.productDescription}</div>
          <div>{product.productCategory}</div>
          <div>{product.productPrice}</div>
          <button onClick={() => deleteTask(product.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
