import Image from "next/image";

const Banner = ({
  imgUrl,
  googleDriveUrl,
}: {
  imgUrl: string;
  googleDriveUrl?: string;
}) => {
  return (
    <>
      <a href={googleDriveUrl}>
        <Image
          className="object-cover"
          src={imgUrl}
          width={80}
          height={130}
          alt="house banner"
        />
      </a>
    </>
  );
};

export default Banner;
