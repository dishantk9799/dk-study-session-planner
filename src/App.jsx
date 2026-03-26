import SessionForm from './components/SessionForm';
import SessionList from './components/SessionList';
import { FaBook } from "react-icons/fa";
const App = () => {
  return (
    <div
      style={{ fontFamily: "Space Grotesk" }}
      className="w-full p-2 lg:px-20  min-h-screen bg-[#18181b] noise-[0,20,35] grid grid-cols-1 grid-rows-[9rem_1fr_1fr] lg:grid-cols-2 lg:grid-rows-[9rem_1fr] gap-2"
    >
      {/* TITLE */}
      <div className="text-zinc-200 flex items-center justify-center row-span-1 lg:col-span-2">
         <div className='w-[80%] md:w-[80%] lg:w-[40%] flex flex-col items-center gap-4'>
            <div className='flex flex-col md:flex-row gap-2 items-center text-4xl md:text-3xl font-bold'><span className='p-2 rounded-md  bg-zinc-800/80 shadow-sm shadow-blue-500/70'><FaBook /></span><h1 className='text-center'>dk Study Session Planner</h1></div>
            <p className='hidden md:block text-center text-xs md:text-base text-zinc-500'>Organize your <span className='text-blue-500'>study sessions</span>, track your progress, and stay <span className='text-blue-500'>focused</span> on your <span className='text-blue-500'>goals</span>.</p>
         </div>
      </div>

      {/* FORM OF SESSION */}
      <div className="row-span-1 lg:row-span-1">
        <SessionForm/>
      </div>
      {/* LIST OF SESSION */}
      <div className="row-span-1 lg:row-span-1">
        <SessionList/>
      </div>
    </div>
  )
}

export default App
