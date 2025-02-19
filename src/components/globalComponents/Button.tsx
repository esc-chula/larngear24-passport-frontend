export const Button = (props: {
  text?: string;
  classname?: string;
  imgSrc?: string;
}) => {
  const text = props.text ?? "";
  return (
    <button className="flex h-12 min-w-40 flex-row rounded-lg bg-gradient-to-t from-[#D2CAFF] to-[#092B44] px-4 py-3 font-sans font-semibold text-white">
      {props.imgSrc && (
        <img src={props.imgSrc} alt="Button Icon" className="mr-2 h-5 w-5" />
      )}

      {text}
    </button>
  );
};
