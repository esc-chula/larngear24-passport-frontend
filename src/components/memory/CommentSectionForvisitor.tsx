import { useEffect, useState } from "react";
import getShortedBaanName from "@/libs/getShortedBaanName";
import { axiosClient } from "@/libs/axios";
import { Skeleton } from "../ui/skeleton";
import CommentBoxForVisitor from "./CommentBoxForVisitor";

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

const CommentSectionForVisitor = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  useEffect(() => {
    async function fetchMessages() {
      try {
        const response = await axiosClient.get<RawMessage[]>(
          `${process.env.NEXT_PUBLIC_API_URL}/message`,
          {
            headers: {
              Authorization: `Bearer 101720514651193914778`,
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
  }, []);
  if (!messages.length) {
    return (
      <div className="flex h-[286px] w-full overflow-y-hidden overflow-x-scroll border-y-4 border-[#36465F] bg-[#ECF0F6] pl-1.5 pt-1">
        {[
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
        ].map((pair, ind) => (
          <div className="grid grid-rows-2" key={ind}>
            {pair.map((item, index) => (
              <CommentBoxSkeleton key={index} />
            ))}
          </div>
        ))}
      </div>
    );
  }
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
              <CommentBoxForVisitor
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

export default CommentSectionForVisitor;

const CommentBoxSkeleton = (): React.JSX.Element => {
  return (
    <Skeleton className="m-1.5 mt-1 h-[7.6rem] min-w-[10.6rem] rounded-md p-2 text-[#ECF0F6]">
      <div className="flex gap-2">
        <Skeleton className="size-[25px] rounded-full" />
        <div className="resize-none text-sm font-bold">
          <Skeleton className="h-3 w-[110px]" />{" "}
          <Skeleton className="mt-1 h-3 w-[60px]" />
        </div>
      </div>
      <Skeleton className="mt-4 h-2 w-[130px] resize-none" />
      <Skeleton className="mt-2 h-2 w-[70px] resize-none" />
      <Skeleton className="mt-2 h-2 w-[100px] resize-none" />
    </Skeleton>
  );
};
