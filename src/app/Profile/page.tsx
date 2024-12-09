"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/globalComponents/Button";
import Link from "next/link";
export default function Profile() {
  const [dressingParts, setDressingParts] = useState({
    head: "defaultHead",
    body: "defaultBody",
    shoes: "defaultShoes",
  });

  useEffect(() => {
    const savedParts = JSON.parse(
      localStorage.getItem("dressingParts") ?? "null",
    );
    if (savedParts) {
      setDressingParts((prevParts) => ({
        ...prevParts,
        ...savedParts,
      }));
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem("dressingParts", JSON.stringify(dressingParts));
    alert("Dressing saved!");
  };

  const toggleHat = () => {
    setDressingParts((prevParts) => ({
      ...prevParts,
      head: prevParts.head === "defaultHead" ? "hat" : "defaultHead",
    }));
  };

  return (
    <>
      <h1>Hi this is Profile page</h1>
      <div>this is just a test of the dressing function</div>
      <div>Head : {dressingParts.head}</div>
      <div>Body : {dressingParts.body}</div>
      <div>Shoes: {dressingParts.shoes}</div>
      <button
        onClick={toggleHat}
        className="rounded bg-pink-500 px-4 py-2 text-white transition duration-200 hover:bg-pink-600"
      >
        {dressingParts.head === "defaultHead" ? "Wear Hat" : "Remove Hat"}
      </button>
      <div>
        <button
          onClick={handleSave}
          className="rounded bg-blue-500 px-4 py-2 text-white transition duration-200 hover:bg-blue-600"
        >
          Save
        </button>
      </div>
      <Link href="/Profile/dress">
        <Button text={"Go to Dress Page"} />
      </Link>
    </>
  );
}
