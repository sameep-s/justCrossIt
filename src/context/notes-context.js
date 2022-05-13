import axios from "axios";
import { useContext, createContext, useReducer, useEffect } from "react";
import { reducerNotes } from "../reducers/notes-reducer";
import { getArchives } from "../services/archive-services";
import { getNotesHandler } from "../services/notes-services";

const defaultNotesVal = [];
const NoteContext = createContext(defaultNotesVal)

const NotesProvider = ({ children }) => {

    useEffect(() => {
        (async () => {
            try {
                const { data: { encodedToken } } = await axios.post('/api/auth/login', {
                    email: "sam@gmail.com",
                    password: "s123"
                })
                localStorage.setItem("tokenNotes", encodedToken)
            }
            catch (e) {
                console.error(e)
            }
        })();

        getNotesHandler(dispatch_note, tokenNotes);
        getArchives(dispatch_note, tokenNotes)
    }, []);

    const tokenNotes = localStorage.getItem('tokenNotes');
    const [state_note, dispatch_note] = useReducer(reducerNotes, { notes: [] });


    return (
        < NoteContext.Provider value={{ state_note, dispatch_note }} >
            {children}
        </NoteContext.Provider >
    )
}


const useNotes = () => useContext(NoteContext);

export { useNotes, NotesProvider };