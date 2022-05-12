import axios from "axios";
import { ARCHIVES_INIT, NOTES_INIT } from '../constants/notesReducer-constant';


export async function getArchives(dispatch, token) {
    try {
        const { data: { archives } } = await axios.get('/api/archives', {
            headers: {
                authorization: token
            }
        })
        if (archives) {
            dispatch({ type: ARCHIVES_INIT, payload: { archives: archives } });
        };

    } catch (e) {
        console.error(e);
    }

}


export async function moveToArchive(dispatch, token, noteId, note) {


    try {

        const { data: { notes, archives } } = await axios.post(`api/notes/archives/${noteId}`, {
            note: note
        }, {
            headers: {
                authorization: token
            }
        })
        notes && dispatch({ type: NOTES_INIT, payload: { notes: notes } });
        archives && dispatch({ type: ARCHIVES_INIT, payload: { archives: archives } });
    }

    catch (e) {
        console.error(e)
    }
}


export async function restoreFromArchives(dispatch, token, noteId) {
    try {
        const { data: { notes, archives } } = await axios.post(`/api/archives/restore/${noteId}`, {
            headers: {
                authorization: token
            }
        })
        notes && dispatch({ type: NOTES_INIT, payload: { notes: notes } })
        archives && dispatch({ type: ARCHIVES_INIT, payload: { archives: archives } })
    }
    catch (e) {
        console.error(e)
    }
}


export async function deleteFromArchives(dispatch, token, noteId) {
    try {
        const { data: { archives } } = await axios.delete(`/api/archives/delete/${noteId}`, {
            headers: {
                authorization: token
            }
        });
        archives && dispatch({ type: ARCHIVES_INIT, payload: { archives: archives } })
    } catch (e) {
        console.error(e);
    }

}