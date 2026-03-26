import { useContext, useEffect, useState } from "react";
import { sessionContext } from "../context/SessionContext";
import SessionCard from './SessionCard';
import { RiMenuAddFill } from "react-icons/ri";
import { FaBookDead } from "react-icons/fa";
const SessionList = () => {
    const { sessions } = useContext(sessionContext);
    const [totalDuration, setTotalDuration] = useState(0);
    useEffect(() => {
        const total = sessions.reduce((sum, session) => {
            return sum + Number(session.time || 0);
        }, 0);

        setTotalDuration(total);
    }, [sessions]);
    const [filter, setFilter] = useState("All");
    const filteredSessions =
        filter === "All"
            ? sessions
            : sessions.filter(
                (session) => session.subject === filter
            );
    return (
        <div className='w-full flex flex-col gap-5 px-5 pt-5 text-zinc-200'>
            {/*LIST TITLE */}
            <h1 className='flex items-center gap-2 text-xl font-semibold'><span><RiMenuAddFill /></span>Your Sessions</h1>

            {/* TOTAL SESSION AND DURATION */}
            <div className='flex w-full gap-2'>
                <div className='w-1/2 rounded-md bg-zinc-950 p-4'>
                    <p className='text-sm'>TOTAL SESSIONS</p>
                    <h3 className='text-2xl text-blue-500 font-bold'>{sessions.length}</h3>
                </div>
                <div className='flex-1 rounded-md bg-zinc-950 p-4'>
                    <p className='text-sm'>TOTAL DURATION</p>
                    <h3 className='text-2xl text-blue-500 font-bold'>{totalDuration} m</h3>
                </div>
            </div>

            {/* FILTER BUTTON */}
            <div className='flex gap-2 flex-wrap'>
                <button onClick={() => setFilter("All")} className='flex border text-zinc-400 rounded-md border-zinc-600  hover:cursor-pointer hover:border-blue-600 hover:text-blue-600 focus:bg-blue-600/20 focus:text-blue-600 focus:border-blue-600 duration-200 px-3 py-1'>All</button>
                <button onClick={() => setFilter("DSA")} className='flex border text-zinc-400 rounded-md border-zinc-600  hover:cursor-pointer hover:border-blue-600 hover:text-blue-600 focus:bg-blue-600/20 focus:text-blue-600 focus:border-blue-600 duration-200 px-3 py-1'>DSA</button>
                <button onClick={() => setFilter("Web Dev")} className='flex border text-zinc-400 rounded-md border-zinc-600  hover:cursor-pointer hover:border-blue-600 hover:text-blue-600 duration-200 focus:bg-blue-600/20 focus:text-blue-600 focus:border-blue-600 px-3 py-1'>Wen Dev</button>
                <button onClick={() => setFilter("DBMS")} className='flex border text-zinc-400 rounded-md border-zinc-600  hover:cursor-pointer hover:border-blue-600 hover:text-blue-600 duration-200 focus:bg-blue-600/20 focus:text-blue-600 focus:border-blue-600 px-3 py-1'>DBMS</button>
                <button onClick={() => setFilter("OS")} className='flex border text-zinc-400 rounded-md border-zinc-600  hover:cursor-pointer hover:border-blue-600 hover:text-blue-600 duration-200 focus:bg-blue-600/20 focus:text-blue-600 focus:border-blue-600 px-3 py-1'>OS</button>
                <button onClick={() => setFilter("Other")} className='flex border text-zinc-400 rounded-md border-zinc-600  hover:cursor-pointer hover:border-blue-600 hover:text-blue-600 duration-200 focus:bg-blue-600/20 focus:text-blue-600 focus:border-blue-600 px-3 py-1'>Other</button>
            </div>


            {/* SESSION CARD */}
            <div className='w-full h-[335px] overflow-y-auto flex flex-col gap-4'>
                {sessions.length === 0 ? (
                    <>
                        {/* IF NO SESSIONS */}
                        <div className='flex-1 justify-center flex flex-col items-center gap-1'>
                            <span className='text-3xl text-blue-600'><FaBookDead /></span>
                            <h2 className='text-xl font-bold'>No Sessions Yet</h2>
                            <p className='text-sm tracking-wider text-zinc-500'>Add your first study session.</p>
                        </div>
                    </>
                ) : (
                    <>
                        {/* CARD */}
                        {filteredSessions.length === 0 ? (
                            <>
                                <div className='flex-1 justify-center flex flex-col items-center gap-1'>
                                    <span className='text-3xl text-blue-600'><FaBookDead /></span>
                                    <h2 className='text-xl font-bold'>No Subject Sessions Yet</h2>
                                </div>
                            </>
                        ) : (
                            filteredSessions.map((item) => (
                                <SessionCard key={item.id} item={item} />
                            ))
                        )}
                    </>
                )}
            </div>
        </div >
    )
}

export default SessionList
