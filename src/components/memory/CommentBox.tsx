const CommentBox = ({
    name,
    house,
    comment
}: {
    name? : string,
    house? : string,
    comment? :string
}) => {
    return(
        <>
        <div className="bg-[#36465F] min-w-[10.6rem] h-[7.6rem] p-2 m-1.5 mt-3 text-[#ECF0F6]">
           <div className="font-bold text-sm">{name} <span className="text-xl">#</span>{house}</div>
        <textarea readOnly rows={3} className="text-xs font-normal bg-transparent focus:outline-none resize-none" value={comment}/>
        </div>
        </>
    )
}

export default CommentBox