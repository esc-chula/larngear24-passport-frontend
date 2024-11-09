import { useState,useEffect } from "react";
import { rudeWords } from "../../constants/rudeWords";
const AddYours = ({ open, close, name, house }: { open: boolean; close: () => void,name:string,house:string }) => {
    const [comment,setComment] = useState('')
    const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const unFiltered = e.target.value;
        const filteredComment = rudeWords.reduce((accumulatedWords, word) => {
            const badWord = new RegExp(`\\b${word}\\b`, 'gi');
            return accumulatedWords.replace(badWord, '***');
        }, unFiltered);

        setComment(filteredComment);
    };
    function submit() {
        // submit comment
        console.log(comment)
        setComment('')
        close();
    }
    useEffect(() => {
        {open? document.body.style.overflow = 'hidden':document.body.style.overflow = ''}
        return () => {document.body.style.overflow = ''}
    }, [open]);

    if (!open) return null;

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="relative bg-white p-6 rounded-lg shadow-lg w-[75%] h-[50%]">
                    <button
                        onClick={close}
                        className="absolute top-2 right-2 text-2xl text-gray-600"
                    >
                        &times;
                    </button>

                    <p className="text-start">{name} #{house}</p>
                    <div className="flex items-center justify-center">
                        <div className="bg-gray-400 p-6 rounded-lg w-[75%] h-[100%]">
                            <input className="w-full bg-transparent outline-none" value={comment} onChange={handleCommentChange} />
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            onClick={submit}
                            className="bg-blue-500 text-white py-2 px-4 rounded-lg"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddYours;
