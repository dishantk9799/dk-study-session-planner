import { useContext } from "react";
import { sessionContext } from "../context/SessionContext";
import { useForm } from "react-hook-form";
import { IoMdAdd } from "react-icons/io";
const SessionForm = () => {
    const { sessions, addSession } = useContext(sessionContext);
    const { register, reset, handleSubmit, formState: { errors, isSubmitting } } = useForm();
    const handleSub = (data) => {
        addSession(data);
        console.log(sessions)
        reset();
    }
    return (
        <form onSubmit={handleSubmit(handleSub)} className='w-full flex flex-col gap-3 p-5 md:gap-2 text-zinc-200 bg-blue-600/10 rounded-md'>
            <h1 className='flex justify-center text-xl items-center font-semibold'><span><IoMdAdd /></span>New Session</h1>

            {/* TOPIC NAME */}
            <div>
                <label className='text-xs text-zinc-300 tracking-wide'>TOPIC NAME</label>
                <input {...register("topic", { required: "Topic is required" })} placeholder='e.g., Linear Search' className='w-full h-11 md:h-9 rounded-md border p-2  border-zinc-600 outline-none focus:border-blue-500 bg-zinc-900' type="text" />
                {errors.topic ? <p className='text-red-500 animate-pulse ml-1 mt-1 text-xs '>{errors.topic.message}</p> : <p className="opacity-0 ml-1 mt-1 text-xs">topic</p>}
            </div>

            {/* SUBJECT */}
            <div>
                <label className='text-xs text-zinc-300 tracking-wide'>SUBJECT</label>
                <select {...register("subject", { required: "Subject is required" })} className='w-full h-11 md:h-9 rounded-md border p-2  border-zinc-600 outline-none focus:border-blue-500 bg-zinc-900'>
                    <option value="">Select Subject</option>
                    <option value="DSA">DSA</option>
                    <option value="Web Dev">Web Dev</option>
                    <option value="DBMS">DBMS</option>
                    <option value="OS">OS</option>
                    <option value="Other">Other</option>
                </select>
                {errors.subject ? <p className='text-red-500 animate-pulse ml-1 mt-1 text-xs '>{errors.subject.message}</p> : <p className="opacity-0 ml-1 mt-1 text-xs">subject</p>}
            </div>

            {/* DURATION TIME */}
            <div>
                <label className='text-xs text-zinc-300 tracking-wide'>DURATION (minutes)</label>
                <input {...register("time", {
                    valueAsNumber: true,
                    required: "Duration is required",
                    validate: (value) => {
                        if (value < 10) {
                            return "Minimum 10 minutes is required";
                        }
                        if (value > 120) {
                            return "Maximum 120 minutes allowed";
                        }
                        return true;
                    }
                })} placeholder='Minimum 10 minutes' className='w-full h-11 md:h-9 rounded-md border p-2  border-zinc-600 outline-none focus:border-blue-500 bg-zinc-900' type="number" />
                {errors.time ? <p className='text-red-500 animate-pulse ml-1 mt-1 text-xs '>{errors.time.message}</p> : <p className="opacity-0 ml-1 mt-1 text-xs">time</p>}
            </div>

            {/* PRIORITY */}
            <div>
                <label className='text-xs text-zinc-300 tracking-wide'>PRIORITY</label>
                <select {...register("priority", { required: "Priority is required" })} className='w-full h-11 md:h-9 rounded-md border p-2  border-zinc-600 outline-none focus:border-blue-500 bg-zinc-900'>
                    <option value="">Select Priority</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
                {errors.priority ? <p className='text-red-500 animate-pulse ml-1 mt-1 text-xs '>{errors.priority.message}</p> : <p className="opacity-0 ml-1 mt-1 text-xs">priority</p>}
            </div>

            {/* Date */}
            <div>
                <label className='text-xs text-zinc-300 tracking-wide'>DATE</label>
                <input {...register("date", { required: "Date is required" })} className='w-full h-11 md:h-9 rounded-md border p-2  border-zinc-600 outline-none focus:border-blue-500 bg-zinc-900' type="date" />
                {errors.date ? <p className='text-red-500 animate-pulse ml-1 mt-1 text-xs '>{errors.date.message}</p> : <p className="opacity-0 ml-1 mt-1 text-xs">date</p>}
            </div>
            {/* BUTTON */}
            <button disabled={isSubmitting} type="submit" className=' flex p-4 md:p-2 rounded-md items-center justify-center bg-blue-600 noise-[25,19,35] shadow-sm hover:shadow-blue-900 hover:bg-blue-600/80 duration-200 text-zinc-200 font-extrabold text-xl'>
                {isSubmitting ? (
                    <>
                        <div
                            className="inline-block h-7 w-7 mr-1 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
                            role="status">
                        </div>
                        Loading
                    </>
                ) : (<><span>Add Session</span></>)}
            </button>
        </form>
    )
}

export default SessionForm
