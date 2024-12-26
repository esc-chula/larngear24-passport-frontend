import { useState, useEffect } from "react";
import { rudeWords } from "../../constants/rudeWords";
import { toast } from "@/hooks/use-toast";

const AddYours = ({
  open,
  close,
  name,
  house,
}: {
  open: boolean;
  close: () => void;
  name: string;
  house: string;
}) => {
  const [comment, setComment] = useState("");
  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const unFiltered = e.target.value;
    const filteredComment = rudeWords.reduce((accumulatedWords, word) => {
      const badWord = new RegExp(`\\b${word}\\b`, "gi");
      return accumulatedWords.replace(badWord, "***");
    }, unFiltered);

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
      const response = await fetch("/api/messages", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          messages: comment,
        }),
      });
      if (!response.ok) {
        const errorData = (await response.json()) as { error: string };
        throw new Error(errorData.error || "Failed to send message");
      }
      toast({
        title: "Success",
        description: "Your message has been sent successfully.",
        className: "bg-green-500 text-white",
      });
      setComment("");
      close();
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "Failed to submit your message. Please try again.",
        className: "bg-red-500 text-white",
      });
    }
  }

  function closeWindow() {
    setComment("");
    close();
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
            <img
              src="https://placehold.co/25x25"
              className="h-[1.6rem] w-[1.6rem] rounded-full object-cover"
            ></img>
            <div className="ml-2">
              {name} #{house}
            </div>
          </div>

          <div className="relative left-[2.25rem] top-[4.75rem] h-[10.75rem] w-[16.1rem] bg-[#ECF0F6] p-3 text-black opacity-80">
            <div className="text-base font-bold">Share something</div>
            <textarea
              rows={5}
              className="w-[14rem] resize-none bg-transparent focus:outline-none"
              value={comment}
              onChange={handleCommentChange}
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              onClick={submit}
              className="relative top-24 rounded-lg bg-[#ECF0F6] px-4 py-2 text-2xl font-bold text-[#262D37]"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddYours;
