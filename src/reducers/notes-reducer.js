import { FilterColor, FilterLabel } from "../components";
import { ARCHIVES_INIT, FILTER_PRIORITY, NOTES_INIT, TRASH_INIT } from "../constants/notesReducer-constant";

const defaultFilterState = null;


export const reducerNotes = (state_note, action) => {

    switch (action.type) {
        case NOTES_INIT:
            return { ...state_note, notes: [...action.payload.notes] };

        case ARCHIVES_INIT:
            return { ...state_note, archives: [...action.payload.archives] };

        case TRASH_INIT:
            return { ...state_note, trash: [...action.payload.trash] };

        case FILTER_PRIORITY:
            {
                if (action.payload.priority) {
                    const notes_copy = state_note.notes;
                    return { ...state_note, notes: notes_copy.filter((item) => item.priority === action.payload.priority) }
                }

                return { ...state_note, notes: state_note.notes }
            }

        case FilterColor:

        case FilterLabel:

        default:
            return state_note;
    }
}