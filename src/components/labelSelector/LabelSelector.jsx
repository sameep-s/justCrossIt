import React from 'react';
import './labelSelector.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from "@fortawesome/free-solid-svg-icons";

const LabelSelector = ({ labelSelectorOpen, setLabelSelectorOpen }) => {
    return (
        <>
            <div className="label__selector pos-rel flex a-item-center jc-center">
                <FontAwesomeIcon className='icon__notes__action' onClick={() => setLabelSelectorOpen(!labelSelectorOpen)} icon={faTag}></FontAwesomeIcon>
                {
                    labelSelectorOpen
                    &&
                    <div className="label__selector__modal pos-abs">
                        <form
                            action="submit"
                            onSubmit={(e) => {
                                e.preventDefault()
                            }}
                        >
                            <input type="text" className='input-txt' placeholder='Add a Label' />
                        </form>

                        <div className="labels__container">
                            <div className="label__name flex p-1">
                                <input type="checkbox" name="BlackImp" id="" />
                                <label htmlFor="BlackImp" className='ml-1 '> VVIMP</label>
                            </div>
                        </div>

                        <div className="label__selector__overlay pos-fix" onClick={() => setLabelSelectorOpen(!labelSelectorOpen)}></div>
                    </div>
                }

            </div>
        </>
    )
}

export default LabelSelector;