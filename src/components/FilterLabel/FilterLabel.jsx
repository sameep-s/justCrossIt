import React from 'react';
import { useNotes } from '../../context';
import './filterLabel.css';

const FilterLabel = ({ isOpenLabelFilter, setIsLabelFilterIsOpen }) => {

    const { state_note: { labels } } = useNotes();

    return (
        <>
            <div className="container__filter__property pos-rel">
                <div className="" onClick={() => setIsLabelFilterIsOpen(!isOpenLabelFilter)}>
                    Labels <span className='icon__filter__arrow'>></span>
                </div>

                {
                    isOpenLabelFilter
                    &&

                    <div className="container__overlay__label pos-abs">
                        {
                            labels.map((label) =>
                                <div className="label__item flex a-item-center mt-1" key={label}>
                                    <input type="checkbox" className='mr-1' name={label} id={label} />
                                    <label htmlFor="label">{label}</label>
                                </div>
                            )
                        }


                        <div className="invisible___overlay pos-fix" onClick={() => setIsLabelFilterIsOpen(false)} />
                    </div>
                }
            </div>

        </>
    );
};

export default FilterLabel;