import React, { useState } from 'react';
import './colorPalette.css';

const paletteColors = [
    'rgb(255, 255, 255)',
    'rgb(161, 161, 253)',
    'rgb(229, 198, 252)',
    'rgb(255, 205, 255)',
    'rgb(173, 252, 173)',
    'rgb(250, 250, 132)',
    'rgb(255, 220, 155)',
    'rgb(255, 189, 189)'
]

const ColorPalette = ({ colorPaletteOpen, setColorPaletteOpen }) => {

    const [noteBackgroundColor, setNoteBackgroundColor] = useState('');

    return (
        <>
            <div
                onClick={() => setColorPaletteOpen(!colorPaletteOpen)}
                className="colorPalette pos-rel"
                style={{ backgroundColor: `${noteBackgroundColor}` }}
            >
                {
                    colorPaletteOpen
                    &&
                    <div className="paletteModalContainer">
                        <div className="colorPaletteModal flex pos-abs">
                            {paletteColors.map((color) =>
                                <div
                                    className="colorElement"
                                    style={{ backgroundColor: `${color}` }}
                                    onClick={() => setNoteBackgroundColor(`${color}`)}
                                />

                            )}
                        </div>
                        <div
                            onClick={() => setColorPaletteOpen(false)}
                            className="colorPaletteOverlay pos-fix"></div>
                    </div>
                }
            </div>
        </>
    );
};

export default ColorPalette;