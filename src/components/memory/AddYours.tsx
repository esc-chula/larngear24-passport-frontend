import { useState,useEffect } from "react";
import { rudeWords } from "../../constants/rudeWords";
import { toast } from "@/hooks/use-toast";

const AddYours = ({ open, close, name, house }: { open: boolean, close: () => void,name:string,house:string }) => {
    const [comment,setComment] = useState('')
    const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const unFiltered = e.target.value;
        const filteredComment = rudeWords.reduce((accumulatedWords, word) => {
            const badWord = new RegExp(`\\b${word}\\b`, 'gi');
            return accumulatedWords.replace(badWord, '***');
        }, unFiltered);

        setComment(filteredComment);
    };
    async function submit() {
        if(comment == ''){
            toast({
                title: "Message Required",
                description: "Please fill in your message before submitting.",
                className: "bg-yellow-500 text-white",
            });
            return;
        }
        try {
            const response = await fetch('/api/messages', {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({
                    messages: comment,
                }),
            });
            if (!response.ok) {
                const errorData = await response.json() as { error: string };
                throw new Error(errorData.error || 'Failed to send message');
            }
            toast({
                title: "Success",
                description: "Your message has been sent successfully.",
                className: "bg-green-500 text-white",
            });
            setComment('');
            close();
        } catch (error) {
            console.error("Error:", error);
            toast({
                title: "Error",
                description: "Failed to submit your message. Please try again.",
                className: "bg-red-500 text-white",
            });
        }
    }

    function closeWindow(){
        setComment('')
        close();
    }
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } 
        else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);
    
    if (!open) return null;
    

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="relative bg-[#262D37] border-2 border-[#ECF0F6] rounded-lg w-[20.4rem] h-[25.44rem] text-[#ECF0F6]">
                    <button
                        onClick={closeWindow}
                        className="absolute top-1 right-2 text-5xl"
                    >
                        &times;
                    </button>
                    <div className=" flex relative top-[4.75rem] left-[2.25rem] mb-2">
                    <img src="https://placehold.co/25x25" className="rounded-full h-[1.6rem] w-[1.6rem] object-cover"></img>
                    <div className="ml-2">{name} #{house}</div>
                    </div>
                    
                    <div className=" relative top-[4.75rem] left-[2.25rem] p-3 bg-[#ECF0F6] opacity-80 w-[16.1rem] h-[10.75rem] text-black">
                    <div className="text-base font-bold">Share something</div>
                    <textarea rows={5} className="bg-transparent focus:outline-none w-[14rem] resize-none" value={comment} onChange={handleCommentChange} />
                    </div>
                    

                    <div className="flex items-center justify-center">
                        <button
                            onClick={submit}
                            className="relative top-24 bg-[#ECF0F6] rounded-lg py-2 px-4 text-[#262D37] text-2xl font-bold"
                        >
                            Confirm
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddYours;
