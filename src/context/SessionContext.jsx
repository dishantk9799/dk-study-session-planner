import { createContext, useState } from "react";
import { nanoid } from 'nanoid';
export const sessionContext = createContext();

export const SessionProvider = ({ children }) => {
    const [sessions, setSessions] = useState(JSON.parse(localStorage.getItem("sessions")) || []);
    const addSession = (session) => {
        let arr = [{ ...session, id: nanoid() }, ...sessions];
        setSessions(arr);
        localStorage.setItem("sessions", JSON.stringify(arr));
    }
    const deleteSession = (id) => {
        let filterSessions= sessions.filter((s) => s.id !== id);
        setSessions(filterSessions);
        localStorage.setItem("sessions",JSON.stringify(filterSessions))
    }
    return <sessionContext.Provider value={{ sessions, setSessions, addSession, deleteSession }}>{children}</sessionContext.Provider>
}