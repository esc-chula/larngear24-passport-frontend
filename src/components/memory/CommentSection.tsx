import { Message } from "@/types/Message";
import CommentBox from "./CommentBox";
import { useEffect, useState } from "react";

const CommentSection = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  useEffect(() => {
    async function fetchMessages() {
      try {
        const response = await fetch("/api/messages", {
          headers: {
            "Content-Type": "application/json",
          },
          method: "GET",
        });
        const data = (await response.json()) as { messages: Message[] };
        setMessages(data.messages);
      } catch (error) {
        console.error("Error fetching:", error);
      }
    }
    void fetchMessages();
  }, []);
  if (!messages.length) return <></>;
  const pairedMessages = [];
  for (let i = 0; i < messages.length; i += 2) {
    pairedMessages.push(messages.slice(i, i + 2));
  }
  return (
    <>
      <div className="item-center h-71.5 flex overflow-x-scroll border-y-4 border-[#36465F] bg-[#ECF0F6] pl-1.5 pt-1">
        {pairedMessages.map((pair, ind) => (
          <div className="grid grid-rows-2" key={ind}>
            {pair.map((comment) => (
              <CommentBox
                key={comment.message_id}
                name={comment.username}
                house={comment.baan}
                comment={comment.message}
                image="https://placehold.co/300x200"
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default CommentSection;
