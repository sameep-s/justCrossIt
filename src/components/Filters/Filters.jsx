import React, { useState } from 'react';
import './filters.css';
import { FilterColor } from '../';
import FilterLabel from '../FilterLabel/FilterLabel';
import { useNotes } from '../../context';
import { FILTER_PRIORITY, RESET_FILTERS } from '../../constants/notesReducer-constant';

const Filters = () => {

    const { state_note: { notes, filter_priority }, dispatch_note } = useNotes();

    const [isOpenColorFilter, setIsColorFilterIsOpen] = useState(false);
    const [isOpenLabelFilter, setIsLabelFilterIsOpen] = useState(false);

    function filterByPriority(priorityVal) {
        if (priorityVal) {
            dispatch_note({ type: FILTER_PRIORITY, payload: { priority: priorityVal } })
        }
    }


    return (
        <>
            <div className="filter__notes__container mt-1 mb-1 pb-1 pt-1">
                <div className="filter__notes__heading flex ml-1 mr-1 pb-1">
                    Filter By:
                    <span
                        onClick={() => dispatch_note({ type: RESET_FILTERS })}
                    >Clear All</span>
                </div>
                <div className="container__filters flex a-item-center">
                    <div className="container__filter__priority flex">
                        <div className="filter__checkbox flex a-item-center">
                            <input
                                type="checkbox"
                                name="LOW"
                                id="LOW"
                                checked={filter_priority.includes("LOW")}
                                onChange={() => filterByPriority("LOW")}
                            />
                            <label htmlFor="LOW">LOW</label>
                        </div>

                        <div className="filter__checkbox flex a-item-center">
                            <input
                                type="checkbox"
                                name="MEDIUM"
                                id="MEDIUM"
                                checked={filter_priority.includes("MEDIUM")}
                                onChange={() => filterByPriority("MEDIUM")}
                            />
                            <label htmlFor="MEDIUM">MEDIUM</label>
                        </div>

                        <div className="filter__checkbox flex a-item-center">
                            <input
                                type="checkbox"
                                name="HIGH"
                                id="HIGH"
                                checked={filter_priority.includes("HIGH")}
                                onChange={() => filterByPriority("HIGH")}
                            />
                            <label htmlFor="HIGH">HIGH</label>
                        </div>
                    </div>


                    {/* colorFilter */}
                    <FilterColor {...{ isOpenColorFilter, setIsColorFilterIsOpen }} />

                    {/* labelFilter */}
                    <FilterLabel {...{ isOpenLabelFilter, setIsLabelFilterIsOpen }} />

                </div>
            </div>
        </>
    );
};

export default Filters;