import { useContext, createContext, useReducer, useEffect } from "react";
import { reducerNotes } from "../reducers/notes-reducer";
import { getNotesHandler } from "../services/notes-services";

const defaultNotesVal = [];
const NoteContext = createContext(defaultNotesVal)

const NotesProvider = ({ children }) => {
    const tokenNotes = localStorage.getItem('tokenNotes');
    const [state_note, dispatch_note] = useReducer(reducerNotes, { notes: [] });

    useEffect(() => {
        getNotesHandler(dispatch_note, tokenNotes);
    }, []);



    return (
        < NoteContext.Provider value={{ state_note, dispatch_note }} >
            {children}
        </NoteContext.Provider >
    )
}


const useNotes = () => useContext(NoteContext);

export { useNotes, NotesProvider };