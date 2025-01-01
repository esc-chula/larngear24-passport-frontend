import { useState, useEffect } from "react";
import { rudeWords } from "../../constants/rudeWords";
import { toast } from "@/hooks/use-toast";
import { axiosClient } from "@/libs/axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";

function timeout(delay: number) {
  return new Promise((res) => setTimeout(res, delay));
}
interface User {
  username: string;
  baan: number;
  imageUrl: string;
}

interface RawMessage {
  message_id: string;
  user_id: string;
  message: string;
  createdAt: string;
  user: User;
}

const AddYours = ({
  open,
  close,
  name,
  house,
  imgUrl,
}: {
  open: boolean;
  close: () => void;
  name: string;
  house: string;
  imgUrl: string;
}) => {
  const { data: session } = useSession();
  const [comment, setComment] = useState("");
  const router = useRouter();

  function filterRudeWords(sentence: string, rudeWords: string[]): string {
    const pattern = new RegExp(`${rudeWords.join("|")}`, "giu");
    return sentence.replace(pattern, (match) => "*".repeat(match.length));
  }

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const unFiltered = e.target.value;
    const filteredComment = filterRudeWords(unFiltered, rudeWords);

    setComment(filteredComment);
  };
  async function submit() {
    if (comment == "") {
      toast({
        title: "Message Required",
        description: "Please fill in your message before submitting.",
        className: "bg-yellow-500 text-white",
      });
      return;
    }

    try {
      if (!session) return;
      if (!session.user) return;
      console.log("Sending message:", comment);
      console.log("User ID:", session?.user.id);
      const response = await axiosClient.post<RawMessage[]>(
        `${process.env.NEXT_PUBLIC_API_URL}/message`,
        {
          message: comment, // This is the request body
        },
        {
          headers: {
            Authorization: `Bearer ${session?.user.id}`, // Add Authorization header
          },
        },
      );
      console.log("API Response:", response.data);

      if (!response.data) {
        throw new Error("Failed to send message");
      }
      toast({
        title: "Success",
        description: "Sent! please refresh to see your message",
        className: "bg-green-500 text-white",
      });
      setComment("");
      close();
      router.refresh();
    } catch (error) {
      console.error("Error:", error);
      if (error instanceof AxiosError) {
        console.error(error.cause);
        console.error(error.response?.headers);
        console.error(error.response?.data);
      }

      toast({
        title: "Error",
        description: "Failed to submit your message. Please try again.",
        className: "bg-red-500 text-white",
      });
    }
  }

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function closeWindow() {
    setComment("");
    close();
  }

  if (!open) return null;

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="relative h-[25.44rem] w-[20.4rem] rounded-lg border-2 border-[#ECF0F6] bg-[#262D37] text-[#ECF0F6]">
          <button
            onClick={closeWindow}
            className="absolute right-2 top-1 text-5xl"
          >
            &times;
          </button>

          <div className="relative left-[2.25rem] top-[4.75rem] mb-2 flex">
            <Image
              src={imgUrl}
              className="h-[1.6rem] w-[1.6rem] rounded-full object-cover"
              alt="user profile"
              width={25}
              height={25}
            />
            <div className="ml-2">
              {name} #{house}
            </div>
          </div>
          <form onSubmit={submit}>
            <div className="relative left-[2.25rem] top-[4.75rem] h-[10.75rem] w-[16.1rem] bg-[#ECF0F6] p-3 text-black opacity-80">
              <div className="text-base font-bold">Share something</div>
              <textarea
                placeholder="Write your message here"
                rows={5}
                maxLength={500}
                className="w-[14rem] resize-none bg-transparent focus:outline-none"
                value={comment}
                onChange={handleCommentChange}
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="relative top-24 rounded-lg bg-[#ECF0F6] px-4 py-2 text-2xl font-bold text-[#262D37]"
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddYours;
