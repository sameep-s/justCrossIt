import {
    ARCHIVES_INIT,
    FILTER_COLOR,
    FILTER_LABEL,
    FILTER_PRIORITY,
    NOTES_INIT,
    TRASH_INIT,
    RESET_FILTERS,
    FILTER_SEARCH
} from "../constants/notesReducer-constant";

const defaultFilterState = {
    filter_priority: [],
    filter_color: [],
    filter_label: [],
    filter_search: ""
};


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
                if (state_note.filter_priority.includes(action.payload.priority)) {
                    return { ...state_note, filter_priority: state_note.filter_priority.filter((item) => item !== action.payload.priority) }
                }

                return { ...state_note, filter_priority: [...state_note.filter_priority, action.payload.priority] }
            }

        case FILTER_COLOR:
            {
                if (state_note.filter_color.includes(action.payload.color)) {
                    return { ...state_note, filter_color: state_note.filter_color.filter((item) => item !== action.payload.color) }
                }
                return { ...state_note, filter_color: [...state_note.filter_color, action.payload.color] }
            }

        case FILTER_LABEL:
            {
                if (state_note.filter_label.includes(action.payload.label)) {
                    return { ...state_note, filter_label: state_note.filter_label.filter((item) => item !== action.payload.label) }
                }

                return { ...state_note, filter_label: [...state_note.filter_label, action.payload.label] }
            }

        case FILTER_SEARCH: {
            return { ...state_note, filter_search: action.payload.search };
        }

        case RESET_FILTERS: {
            return { ...state_note, ...defaultFilterState };
        }

        default:
            return state_note;
    }
}