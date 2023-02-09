import { PropTypes } from 'prop-types';

function Input(props) {
    const id = props.id;
    const label = props.label;
    const type = props.type;

    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} />
        </div>
    )
};

Input.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string
}

export default Input;