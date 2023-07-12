"use client";
import { useState } from "react";
export default function LogInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValues, setEmailValues] = useState([]);
  const [passwordValues, setPasswordValues] = useState([]);

  return (
    <div className="h-screen bg-green-800 flex justify-center items-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setEmail("");
          setPassword("");
          setEmailValues((prev) => [...prev, email]);
          setPasswordValues((prev) => [...prev, password]);
          setEmail("");
          setPassword("");
          console.log("=================EMAIL================");
          console.log(email);
          console.log(emailValues);
          console.log("===============PASSWORD==================");
          console.log(password);
          console.log(passwordValues);
        }}
        className="bg-white text-black h-80 w-72 flex flex-col justify-center items-center rounded-md shadow-md"
      >
        <div className="flex flex-col">
          <label className="w-64 text-center p-1">Username/Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email"
            type="email"
            className="border-2 border-green-800 w-64 rounded-md mb-12 p-1"
          />
        </div>
        <div className="flex flex-col">
          <label className="w-64 text-center p-1">Username/Email</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
            type="password"
            className="border-2 border-green-800 w-64 rounded-md
            p-1"
          />
        </div>
        <button
          type="submit"
          className="mt-12 border-green-800 border-2 p-1 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
