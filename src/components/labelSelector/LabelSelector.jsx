import React, { useState } from 'react';
import './labelSelector.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from "@fortawesome/free-solid-svg-icons";


const LabelSelector = ({ labelSelectorOpen, setLabelSelectorOpen }) => {
    const [tags, setTags] = useState(['imppClass']);


    function addLabel() {
        setTags([...tags, "nrw"]);
        console.log(tags);
        console.log(`mapLabel`);
    }

    return (
        <>
            <div className="label__selector pos-rel flex a-item-center jc-center">
                <FontAwesomeIcon className='icon__notes__action' onClick={() => setLabelSelectorOpen(!labelSelectorOpen)} icon={faTag}></FontAwesomeIcon>
                {
                    labelSelectorOpen
                    &&
                    <div className="label__selector__modal pos-abs">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault()
                                addLabel();
                            }}
                        >
                            <input type="text" className='input-txt' placeholder='Add a Label ...' />
                        </form>

                        <div className="labels__container">
                            {tags.map((item) =>
                                <div key={item} className="label__name flex p-1">
                                    <input type="checkbox" name={item} id={item} />
                                    <label htmlFor={item} className='ml-1 '>{item}</label>
                                </div>
                            )}

                        </div>

                        <div className="label__selector__overlay pos-fix" onClick={() => setLabelSelectorOpen(!labelSelectorOpen)}></div>
                    </div>
                }

            </div>
        </>
    )
}

export default LabelSelector;