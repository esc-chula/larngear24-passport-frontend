export const Button = (props: { text?: string; classname?: string, imgSrc?: string }) => {
  const text = props.text ?? "";
  return (
    <button className="flex flex-row h-12 min-w-40 rounded-lg bg-gradient-to-t from-[#D2CAFF] to-[#092B44] px-4 py-3 font-semibold text-white">
      {props.imgSrc && (
        <img src={props.imgSrc} alt="Button Icon" className="w-5 h-5 mr-2" />
      )} 

      {text}
    </button>
  );
};
