"use client";
import { axiosClient } from "@/libs/axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { toast } from "@/hooks/use-toast";
import Image from "next/image";

export const ShowName = ({ username }: { username: string }) => {
  const [name, setName] = useState(username);
  const [change, setChange] = useState(false);
  const { data: session } = useSession();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSaveName = async () => {
    const response = await axiosClient.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/user/changename`,
      {
        newname: name.trim(),
      },
      {
        headers: {
          Authorization: `Bearer ${session?.user.id}`,
        },
      },
    );
    if (response.status == 200) {
      toast({
        title: "Success",
        description: "Successfully change name",
        className: "bg-green-500 text-white",
      });
    }

    setChange(false);
  };
  useEffect(() => {
    setName(username);
  }, [username]);

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
            <Image 
              src="/profile/pencil.webp" 
              alt="Pencil" 
              className="w-3/5"
              width={60} // Replace with appropriate dimensions
              height={60} // Replace with appropriate dimensions
            />
          </div>
        </>
      )}
    </div>
  );
};
