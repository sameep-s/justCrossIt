import React from 'react';
import './filterLabel.css';

const FilterLabel = ({ isOpenLabelFilter, setIsLabelFilterIsOpen }) => {
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
                        <div className="label__item flex a-item-center">
                            <input type="checkbox" className='mr-1' name="label" id="" />
                            <label htmlFor="label">label 1</label>
                        </div>

                        <div className="invisible___overlay pos-fix" onClick={() => setIsLabelFilterIsOpen(false)} />
                    </div>
                }
            </div>

        </>
    );
};

export default FilterLabel;