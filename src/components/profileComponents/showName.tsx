"use client";
import { useState } from "react";
export const ShowName = ({ username }: { username: string }) => {
  const [name, setName] = useState(username);
  const [change, setChange] = useState(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleSaveName = () => {
    // NEEN : fetch /changename here
    const isLocalStorageAvailable =
      typeof window !== "undefined" && window.localStorage && window;
    if (!isLocalStorageAvailable) return;
    localStorage.setItem("name", name.trim());
    setChange(false);
  };

  return (
    <div className="mb-3 flex w-[100%] grow flex-row items-center justify-end space-x-2">
      {change ? (
        <>
          <input
            id="nameInput"
            type="text"
            value={name}
            onChange={handleInputChange}
            placeholder="โปรดใส่ชื่อของคุณ"
            className="mt-1 w-[60%] rounded-md bg-[#ECF0F6] p-1 text-center font-ibm text-sm font-semibold focus:outline-none"
          />
          <button
            className="exclude-from-screenshot2 flex h-6 cursor-pointer items-center justify-center overflow-hidden rounded-md bg-teal-300 px-2 text-sm font-bold"
            onClick={handleSaveName}
          >
            save
          </button>
        </>
      ) : (
        <>
          <p className="mt-1 w-[70%] rounded-md bg-[#ECF0F6] p-1 text-center font-ibm text-sm font-semibold focus:outline-none">
            {name}
          </p>
          <div
            className="exclude-from-screenshot2 flex h-6 w-6 cursor-pointer items-center justify-center overflow-hidden rounded-md bg-[#ECF0F6] text-sm"
            onClick={() => {
              setChange(true);
            }}
          >
            <img src="/profile/pencil.webp" className="w-3/5" />
          </div>
        </>
      )}
    </div>
  );
};
