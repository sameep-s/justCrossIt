import { useContext, createContext, useReducer, useEffect } from "react";
import { reducerNotes } from "../reducers/notes-reducer";

const defaultNotesVal = [];
const NoteContext = createContext(defaultNotesVal)

const NotesProvider = ({ children }) => {

    const [state_note, dispatch_note] = useReducer(reducerNotes, { notes: [], labels: [] });

    return (
        <NoteContext.Provider value={{ state_note, dispatch_note }} >
            {children}
        </NoteContext.Provider>
    )
}


const useNotes = () => useContext(NoteContext);

export { useNotes, NotesProvider };