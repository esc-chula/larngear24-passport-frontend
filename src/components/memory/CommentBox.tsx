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
        <div className="bg-gray-200 p-4 w-64 h-32 rounded-md">
        <div>
           <p>{name} #{house}</p>
        </div>
        <div>{comment}</div>
        </div>
        </>
    )
}

export default CommentBox