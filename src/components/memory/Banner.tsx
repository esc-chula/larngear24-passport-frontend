const Banner = ({
    imgUrl,
    googleDriveUrl
}: {
    imgUrl? : string,
    googleDriveUrl? : string
}) => {
    return(
        <>
        <a href={googleDriveUrl}><img src={imgUrl}></img></a>
        </>
    )
}

export default Banner