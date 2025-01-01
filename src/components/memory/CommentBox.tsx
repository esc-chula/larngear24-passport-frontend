import { X } from "lucide-react";
import { axiosClient } from "@/libs/axios";
import { useSession } from "next-auth/react";
import { toast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
  //console.log(comment);

  return (
    <>
      <Dialog>
        <div className="relative z-0 m-1.5 mt-1 h-[7.6rem] w-[10.6rem]">
          {is_owner && (
            <button
              className="absolute right-2 top-2 z-10 h-4 w-4"
              onClick={submit}
            >
              <X className="size-4" />
            </button>
          )}
          <DialogTrigger>
            <div className="h-[7.6rem] w-[10.6rem] rounded-md bg-[#36465F] px-2 py-2 pr-5 text-[#ECF0F6]">
              <div className="flex gap-2">
                <Image
                  src={image}
                  className="h-[1.6rem] w-[1.6rem] rounded-full"
                  width={25}
                  height={25}
                  alt="profile"
                />
                <p className="resize-none overflow-hidden text-left text-sm font-bold">
                  {name} <br /> <span className="text-xl">#</span>
                  {house}
                </p>
              </div>
              <textarea
                readOnly
                rows={4}
                className="ml-2 mt-1 resize-none bg-transparent text-xs font-normal focus:outline-none"
                value={comment}
              />
            </div>
          </DialogTrigger>
        </div>
        <DialogContent className="max-h-[600px] w-[80%] rounded-md bg-[#36465F] p-4 text-[#ECF0F6]">
          <DialogHeader>
            <div className="flex items-center gap-2">
              <Image
                src={image}
                className="h-[1.6rem] w-[1.6rem] rounded-full"
                width={30}
                height={30}
                alt="profile"
              />
              <div className="text-normal ml-2 resize-none font-bold">
                {name} <span className="text-xl">#</span>
                {house}
              </div>
            </div>
          </DialogHeader>
          <DialogTitle hidden>
            ข้อความจาก {name} <span className="text-xl">#</span>
            {house}
          </DialogTitle>
          <DialogDescription className="w-full">
            <textarea
              readOnly
              rows={5}
              className="mt-1 w-full bg-transparent font-normal text-white focus:outline-none"
              value={comment}
            />
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CommentBox;
