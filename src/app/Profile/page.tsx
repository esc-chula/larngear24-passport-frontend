"use client";

import { useState, useEffect } from "react";

export default function Profile() {
  const [dressingParts, setDressingParts] = useState({
    head: "defaultHead",
    body: "defaultBody",
    shoes: "defaultShoes"
  })

  useEffect(() => {
    const savedParts = JSON.parse(localStorage.getItem("dressingParts") ?? "null");
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
      <button onClick={toggleHat} className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 transition duration-200">
                {dressingParts.head === "defaultHead" ? "Wear Hat" : "Remove Hat"}
      </button>
      <div>
        <button onClick={handleSave} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">Save</button>
      </div>
    </>
  );
}
