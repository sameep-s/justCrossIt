import axios from "axios";
import { NOTES_INIT } from "../constants/notesReducer-constant";



export async function getNotesHandler(dispatch, token) {
    try {
        const { data: { notes } } = await axios.get('/api/notes', {
            headers: {
                authorization: token
            }
        })
        notes && dispatch({ type: NOTES_INIT, payload: { notes: notes } })
    } catch (e) {
        console.error(e);
    }
}


export async function addToNotes(dispatch, noteUser, userToken) {
    try {
        const { data: { notes } } = await axios.post('/api/notes', {
            note: noteUser
        },
            {
                headers:
                {
                    authorization: userToken
                }
            });
        notes && dispatch({ type: NOTES_INIT, payload: { notes: notes } })
    } catch (e) {
        console.error(e);
    }
}


export async function updateNote(dispatch, noteId, note, userToken) {
    try {
        const { data: { notes } } = await axios.post(`/api/notes/${noteId}`, {
            note: note
        },
            {
                headers:
                {
                    authorization: userToken
                }
            });
        notes && dispatch({ type: NOTES_INIT, payload: { notes: notes } })
    } catch (e) {
        console.error(e);
    }
}



export async function deleteFromNotes(dispatch, id, token) {
    try {
        const { data: { notes } } = await axios.delete(`/api/notes/${id}`, {
            headers: {
                authorization: token
            }
        })
        notes && dispatch({ type: NOTES_INIT, payload: { notes: notes } })
    }
    catch (e) {
        console.error(e);
    }
}