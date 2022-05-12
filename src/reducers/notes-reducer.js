import { v4 as uuid } from 'uuid';
import { NOTES_INIT } from "../constants/notesReducer-constant";


export const reducerNotes = (state_note, action) => {

    switch (action.type) {
        case NOTES_INIT:
            return { ...state_note, notes: [...action.payload.notes] };

        default:
            return state_note;
    }
}