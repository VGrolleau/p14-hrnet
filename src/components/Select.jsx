import { PropTypes } from 'prop-types';

function Select(props) {
    const id = props.id;
    const label = props.label;
    const dataOptions = props.dataOptions;

    return (
        <div className='custom-select'>
            <label htmlFor={id}>{label}</label>
            <select name={id} id={id}>
                {
                    dataOptions.map((dataOption, index) => {
                        return <option value={dataOption.name} key={index}>{dataOption.name}</option>
                    })
                }
            </select>
        </div>
    )
};

Select.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    dataOptions: PropTypes.array
};

export default Select;