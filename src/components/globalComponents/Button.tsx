export const Button = (props: { text?: string; classname?: string }) => {
  const text = props.text ?? "";
  return (
    <button className="h-12 min-w-40 rounded-lg bg-gradient-to-t from-[#D2CAFFE5] to-[#092B44CC] px-4 py-3 font-semibold text-white">
      {text}
    </button>
  );
};
