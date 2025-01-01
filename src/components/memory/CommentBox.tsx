import { X } from "lucide-react";
import { axiosClient } from "@/libs/axios";
import { useSession } from "next-auth/react";
import { toast } from "@/hooks/use-toast";
import Image from "next/image";
function timeout(delay: number) {
  return new Promise((res) => setTimeout(res, delay));
}
const CommentBox = ({
  name,
  house,
  comment,
  image,
  is_owner,
  message_id,
}: {
  name: string;
  house: string;
  comment: string;
  image: string;
  is_owner: boolean;
  message_id: string;
}) => {
  const { data: session } = useSession();
  async function submit() {
    try {
      if (!session) return;
      if (!session.user) return;
      const response = await axiosClient.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/message/${message_id}`,
        {
          headers: {
            Authorization: `Bearer ${session?.user.id}`, // Add Authorization header
          },
        },
      );

      if (response.status !== 200) {
        throw Error("Failed to send message");
      }
      toast({
        title: "Success",
        description: "Delete Success!",
        className: "bg-green-500 text-white",
      });
      close();
      await timeout(1000);
      window.location.reload();
    } catch (error) {
      console.error("Error:", error);

      toast({
        title: "Error",
        description: "Failed to delete your message. Please try again.",
        className: "bg-red-500 text-white",
      });
    }
  }

  return (
    <>
      <div className="m-1.5 mt-1 h-[7.6rem] min-w-[10.6rem] rounded-md bg-[#36465F] p-2 text-[#ECF0F6]">
        <div className="flex gap-2">
          <Image
            src={image}
            className="h-[1.6rem] w-[1.6rem] rounded-full"
            width={25}
            height={25}
            alt="profile"
          />
          <div className="resize-none text-sm font-bold">
            {name} <span className="text-xl">#</span>
            {house}
          </div>
          {is_owner && (
            <button className="h-4 w-4" onClick={submit}>
              <X className="size-4" />
            </button>
          )}
        </div>
        <textarea
          readOnly
          rows={4}
          className="ml-2 mt-1 resize-none bg-transparent text-xs font-normal focus:outline-none"
          value={comment}
        />
      </div>
    </>
  );
};

export default CommentBox;
