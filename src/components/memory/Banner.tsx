import Image from "next/image";

const Banner = ({
  imgUrl,
  googleDriveUrl,
}: {
  imgUrl?: string;
  googleDriveUrl?: string;
}) => {
  return (
    <>
      <a href={googleDriveUrl}>
        <Image src={imgUrl ?? ""} alt="house banner"/>
      </a>
    </>
  );
};

export default Banner;
