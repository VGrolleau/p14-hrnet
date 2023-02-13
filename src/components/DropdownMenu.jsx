// import Dropdown from 'react-dropdown';
import { PropTypes } from 'prop-types';
import { useState } from 'react';
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

    return (
        <div className='custom-select'>
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