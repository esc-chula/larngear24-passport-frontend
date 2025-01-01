import CommentBox from "./CommentBox";
import { useEffect, useState } from "react";
import getShortedBaanName from "@/libs/getShortedBaanName";
import { axiosClient } from "@/libs/axios";
import { useSession } from "next-auth/react";

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
  is_owner: boolean;
}
interface Message {
  message_id: string;
  username: string;
  baan: string | null;
  message: string;
  imageUrl: string;
  is_owner: boolean;
}

const CommentSection = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const { data: session, status } = useSession();
  useEffect(() => {
    async function fetchMessages() {
      if (!session) return;
      if (!session.user) return;
      try {
        const response = await axiosClient.get<RawMessage[]>(
          `${process.env.NEXT_PUBLIC_API_URL}/message`,
          {
            headers: {
              Authorization: `Bearer ${session.user.id}`,
            },
          },
        );

        const rawData = response.data;
        // console.log("API Response:", rawData);
        const data: Message[] = rawData.map((item: RawMessage) => ({
          message_id: item.message_id,
          username: item.user.username,
          baan: getShortedBaanName(item.user.baan),
          message: item.message,
          imageUrl: item.user.imageUrl,
          is_owner: item.is_owner,
        }));
        setMessages(data);
      } catch (error) {
        console.error("Error fetching:", error);
      }
    }
    void fetchMessages();
  }, [session, status]);
  if (!messages.length)
    return (
      <div className="flex h-[286px] w-full overflow-y-hidden overflow-x-scroll border-y-4 border-[#36465F] bg-[#ECF0F6] pl-1.5 pt-1"></div>
    );
  const pairedMessages = [];
  for (let i = 0; i < messages.length; i += 2) {
    pairedMessages.push(messages.slice(i, i + 2));
  }
  return (
    <>
      <div className="flex h-[286px] w-full items-center overflow-y-hidden overflow-x-scroll border-y-4 border-[#36465F] bg-[#ECF0F6] pl-1.5 pt-1">
        {pairedMessages?.map((pair, ind) => (
          <div className="grid grid-rows-2" key={ind}>
            {pair.map((comment) => (
              <CommentBox
                key={comment.message_id}
                name={comment.username}
                house={comment.baan ?? ""}
                comment={comment.message}
                image={comment.imageUrl}
                is_owner={comment.is_owner}
                message_id={comment.message_id}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default CommentSection;
