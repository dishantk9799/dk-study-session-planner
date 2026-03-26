import { useContext, useState } from "react";
import { sessionContext } from "../context/SessionContext";
import { IoMdTime } from "react-icons/io";
import { MdOutlineDateRange, MdDelete } from "react-icons/md";
import { TiTick } from "react-icons/ti";
const SessionCard = ({ item }) => {
    const { deleteSession } = useContext(sessionContext);
    const [complete, setComplete] = useState(false);
    return (
        <div className='mt-1 flex flex-col gap-2'>
            <div key={item.id} className={`w-full rounded-md duration-200 ${complete ? "opacity-70" : "opacity-100"} bg-zinc-950  text-zinc-200 p-5 flex flex-col gap-3`}>
                <div className='flex items-center justify-between'>
                    <h1 className={`text-lg ${complete ? "line-through" : "no-underline"} md:text-2xl font-bold duration-200`}>{item.topic}</h1>
                    <span className='bg-blue-600/20 text-blue-300 px-3 py-1 rounded-3xl text-xs md:text-sm'>{item.subject}</span>
                </div>
                <div className='flex gap-4'>
                    <h2 className='flex text-sm md:text-base items-center gap-1'><IoMdTime />{item.time}min</h2>
                    <h2 className='flex text-sm md:text-base items-center gap-1'><MdOutlineDateRange />{item.date}</h2>
                </div>
                <div className='mt-2 flex items-center justify-between'>
                    <span
                        className={`px-2 md:px-3 py-1 rounded-3xl text-[10px] md:text-sm border
                            ${item.priority === "Low" && "bg-green-400/10 border-green-400 text-green-500"}
                            ${item.priority === "Medium" && "bg-yellow-400/10 border-yellow-400 text-yellow-500"}
                            ${item.priority === "High" && "bg-red-400/10 border-red-400 text-red-500"}`}>
                        {item.priority} Priority
                    </span>
                    <div className='flex gap-2'>
                        <button onClick={() => setComplete(prev => !prev)} className={`flex text-sm md:text-base gap-0.5 items-center border ${complete ? "text-green-400 rounded-md border-green-400  hover:cursor-pointer hover:border-green-500 hover:text-green-400 hover:bg-green-400/20" : "text-blue-400 rounded-md border-blue-400 hover:border-blue-500 hover:text-blue-400 hover:bg-blue-400/20"} hover:cursor-pointer duration-200 px-1 md:px-2 py-1`}><TiTick />{complete ? "Complete" : "Incomplete"}</button>
                        <button onClick={() => deleteSession(item.id)} className='flex text-sm md:text-base gap-0.5 items-center border text-zinc-400 rounded-md border-red-400 hover:cursor-pointer hover:border-red-500 hover:text-red-400 hover:bg-red-400/20 duration-200 px-1 md:px-2 py-1'><MdDelete />Delete</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SessionCard
