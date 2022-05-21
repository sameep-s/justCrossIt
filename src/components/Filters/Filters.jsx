import React, { useState } from 'react';
import './filters.css';
import { FilterColor } from '../';
import FilterLabel from '../FilterLabel/FilterLabel';

const Filters = () => {

    const [isOpenColorFilter, setIsColorFilterIsOpen] = useState(false);
    const [isOpenLabelFilter, setIsLabelFilterIsOpen] = useState(false);

    return (
        <>
            <div className="filter__notes__container mt-1 mb-1 pb-1 pt-1">
                <div className="filter__notes__heading ml-1 mr-1 pb-1">
                    Filter By:
                </div>
                <div className="container__filters flex a-item-center">
                    <div className="container__filter__priority flex">
                        <div className="filter__checkbox flex a-item-center">
                            <input type="checkbox" name="LOW" id="LOW" />
                            <label htmlFor="LOW">LOW</label>
                        </div>

                        <div className="filter__checkbox flex a-item-center">
                            <input type="checkbox" name="MEDIUM" id="MEDIUM" />
                            <label htmlFor="MEDIUM">MEDIUM</label>
                        </div>

                        <div className="filter__checkbox flex a-item-center">
                            <input type="checkbox" name="HIGH" id="HIGH" />
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