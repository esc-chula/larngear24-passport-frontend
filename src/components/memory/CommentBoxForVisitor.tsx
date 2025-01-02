import { X } from "lucide-react";
import { axiosClient } from "@/libs/axios";
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
const CommentBoxForVisitor = ({
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
  //console.log(comment);

  return (
    <>
      <Dialog>
        <div className="relative z-0 m-1.5 mt-1 h-[7.6rem] w-[10.6rem]">
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
                <p className="resize-none overflow-hidden text-left font-ibm text-xs font-bold">
                  {name} <br /> <span className="text-sm">#</span>
                  {house}
                </p>
              </div>
              <textarea
                readOnly
                rows={4}
                className="ml-2 mt-1 resize-none bg-transparent font-ibm text-xs font-normal focus:outline-none"
                value={comment}
              />
            </div>
          </DialogTrigger>
        </div>
        <DialogContent className="max-h-[600px] w-[80%] rounded-md bg-[#36465F] p-4 text-[#ECF0F6]">
          <DialogHeader>
            <div className="flex items-center justify-start gap-2">
              <Image
                src={image}
                className="h-[1.6rem] w-[1.6rem] rounded-full"
                width={30}
                height={30}
                alt="profile"
              />
              <div className="text-normal ml-2 resize-none font-ibm font-bold">
                {name} <span className="text-xl">#</span>
                {house}
              </div>
            </div>
          </DialogHeader>
          <DialogTitle hidden>
            ข้อความจาก {name} <span className="text-base">#</span>
            {house}
          </DialogTitle>
          <DialogDescription className="w-full">
            <textarea
              readOnly
              rows={5}
              className="mt-1 w-full bg-transparent font-ibm font-normal text-white focus:outline-none"
              value={comment}
            />
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CommentBoxForVisitor;
