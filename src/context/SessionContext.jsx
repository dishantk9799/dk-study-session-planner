import { createContext, useState } from "react";
import { nanoid } from 'nanoid';
export const sessionContext = createContext();

export const SessionProvider = ({ children }) => {
    const [sessions, setSessions] = useState([]);
    const addSession = (session) => {
        setSessions((prev) => [{ ...session, id: nanoid() }, ...prev])
    }
    const deleteSession = (id) => {
        setSessions((prev) => prev.filter((s) => s.id !== id));
    }
    return <sessionContext.Provider value={{ sessions, setSessions, addSession, deleteSession }}>{children}</sessionContext.Provider>
}