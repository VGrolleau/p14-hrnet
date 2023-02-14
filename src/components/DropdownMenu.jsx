// import Dropdown from 'react-dropdown';
import { PropTypes } from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import '../utils/style/DropdownMenu.css';

function DropdownMenu(props) {
    const id = props.id;
    const label = props.label;
    const dataOptions = props.dataOptions;
    const defaultOption = dataOptions[0];

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = value => () => {
        setSelectedOption(value);
        setIsOpen(false);
    };

    /**
     * If the user clicks outside of the element, then set the state to false.
     */
    const useOutsideAlerter = (ref) => {
        useEffect(() => {
            /**
             * If the user clicks outside of the dropdown menu, then close the dropdown menu
             */
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setIsOpen(false)
                }
            }
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    return (
        <div className={isOpen ? 'custom-select open' : 'custom-select'} ref={wrapperRef}>
            <label htmlFor={id}>{label}</label>
            <div className={isOpen ? 'choice-button open' : 'choice-button'} onClick={toggling}>
                <span>{selectedOption || defaultOption.name}</span>
                <span className="fa-solid fa-angle-down select-arrow"></span>
            </div>
            {isOpen && (
                <ul className='dropdown-list'>
                    {
                        dataOptions.map((dataOption, index) => {
                            return (
                                <li value={dataOption.name} className="list-item" onClick={onOptionClicked(dataOption.name)} key={index}>
                                    {dataOption.name}
                                </li>
                            )
                        })
                    }
                </ul>
            )}
        </div>
    )
};

DropdownMenu.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    dataOptions: PropTypes.array
};

export default DropdownMenu;