import Image from "next/image";

const CommentBox = ({
  name,
  house,
  comment,
  image,
}: {
  name?: string;
  house?: string;
  comment?: string;
  image: string;
}) => {
  return (
    <>
      <div className="m-1.5 mt-1 h-[7.6rem] min-w-[10.6rem] bg-[#36465F] p-2 text-[#ECF0F6]">
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
