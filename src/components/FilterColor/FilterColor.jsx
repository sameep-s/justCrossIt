import React from 'react';
import './filterColor.css';
import { paletteColors } from '../colorPalette/ColorPalette';
import { useNotes } from '../../context';
import { FILTER_COLOR } from '../../constants/notesReducer-constant';

const FilterColor = ({ isOpenColorFilter, setIsColorFilterIsOpen }) => {

    const { state_note: { filter_color }, dispatch_note } = useNotes();

    return (
        <>
            <div className="container__filter__property pos-rel">
                <div className="div"
                    onClick={() => setIsColorFilterIsOpen(true)}
                >
                    Color
                    <span className='icon__filter__arrow'>></span>
                </div>

                {
                    isOpenColorFilter
                    &&
                    <div className="container__overlay__color pos-abs">
                        {paletteColors.map((color) =>
                            <div className="color__item flex a-item-center mt-1" key={color}>
                                <input
                                    type="checkbox"
                                    className='mr-1'
                                    name={color}
                                    id={color}
                                    checked={filter_color.includes(color)}
                                    value={color}
                                    onChange={(e) => dispatch_note({ type: FILTER_COLOR, payload: { color: e.target.value } })}
                                />
                                <label htmlFor={color} style={{ backgroundColor: `${color}` }}></label>
                            </div>
                        )}
                        <div className="invisible___overlay pos-fix" onClick={() => setIsColorFilterIsOpen(false)} />
                    </div>
                }
            </div>
        </>
    );
};

export default FilterColor;