import { PropTypes } from 'prop-types';

function Select(props) {
    const id = props.id;
    const label = props.label;

    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <select name={id} id={id}></select>
        </div>
    )
};

Select.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string
};

export default Select;