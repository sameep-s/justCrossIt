import { ARCHIVES_INIT, NOTES_INIT, TRASH_INIT } from "../constants/notesReducer-constant";


export const reducerNotes = (state_note, action) => {

    switch (action.type) {
        case NOTES_INIT:
            return { ...state_note, notes: [...action.payload.notes] };

        case ARCHIVES_INIT:
            return { ...state_note, archives: [...action.payload.archives] };

        case TRASH_INIT:
            return { ...state_note, trash: [...action.payload.trash] };

        default:
            return state_note;
    }
}