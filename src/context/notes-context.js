import { useContext, createContext, useReducer } from "react";

const defaultNotesVal = [];
const NoteContext = createContext(defaultNotesVal)


const NotesProvider = ({ children }) => {



    const [state_note, dispatch_note] = useReducer(reducerNotes, { notes: [] });


    return (
        < NoteContext.Provider value={{ state_note, dispatch_note }} >
            {children}
        </NoteContext.Provider >
    )
}


const useNotes = () => useContext(NoteContext);

export { useNotes, NotesProvider };