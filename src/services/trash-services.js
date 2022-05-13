import axios from "axios";
import { NOTES_INIT, TRASH_INIT } from "../constants/notesReducer-constant";

export async function getTrashedNotes(dispatch, token) {
    try {
        const { data: { trash } } = await axios.get('api/trash', {
            headers: {
                authorization: token
            }
        });
        console.log(`trash working`);
        trash && dispatch({ type: TRASH_INIT, payload: { trash: trash } });
    }
    catch (e) {
        console.error(e);
    }
}


export async function moveToTrash(dispatch, token, noteId, note) {
    try {
        const { data: { notes, trash } } = await axios.post(`/api/notes/trash/${noteId}`, {
            note: note
        }, {
            headers: {
                authorization: token
            }
        });
        notes && dispatch({ type: NOTES_INIT, payload: { notes: notes } });
        trash && dispatch({ type: TRASH_INIT, payload: { trash: trash } });

    }
    catch (e) {
        console.error(e);
    }
}




export async function restoreFromTrash(dispatch, encodedToken, noteId) {
    try {
        const { data: { notes, trash } } = await axios.post(`/api/trash/restore/${noteId}`,
            {
                note: {}
            }
            , {
                headers: {
                    authorization: encodedToken
                }
            });

        notes && dispatch({ type: NOTES_INIT, payload: { notes: notes } });
        trash && dispatch({ type: TRASH_INIT, payload: { trash: trash } });
    }
    catch (e) {
        console.error(e)
    }
}


export async function deleteFromTrash(dispatch, token, noteId) {
    try {
        const { data: { trash } } = await axios.delete(`/api/trash/delete/${noteId}`, {
            headers: {
                authorization: token
            }
        });

        trash && dispatch({ type: TRASH_INIT, payload: { trash: trash } });
    } catch (e) {
        console.error(e);
    }

}
