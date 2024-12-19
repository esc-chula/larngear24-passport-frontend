const CommentBox = ({
    name,
    house,
    comment,
    image
}: {
    name? : string,
    house? : string,
    comment? :string,
    image? :string
}) => {
    return(
        <>
        <div className="bg-[#36465F] min-w-[10.6rem] h-[7.6rem] p-2 m-1.5 mt-3 text-[#ECF0F6]">
            <div className="flex gap-2">
            <img src={image} className="rounded-full h-[1.6rem] w-[1.6rem] object-cover"></img>
            <div className="font-bold text-sm resize-none">{name} <span className="text-xl">#</span>{house}</div>
            </div>
        <textarea readOnly rows={4} className="ml-2 mt-1 text-xs font-normal bg-transparent focus:outline-none resize-none" value={comment}/>
        </div>
        </>
    )
}

export default CommentBox