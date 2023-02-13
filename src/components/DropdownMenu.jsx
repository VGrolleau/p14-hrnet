import { PropTypes } from 'prop-types';
import '../utils/style/DropdownMenu.css';

function DropdownMenu(props) {
    const id = props.id;
    const label = props.label;
    const dataOptions = props.dataOptions;

    /** TODO:
     * Gérer la récupération du texte dans le span du bouton
     */

    // document.body.addEventListener('click', e => { console.log(e.target) })

    return (
        <div className='custom-select'>
            <label htmlFor={id}>{label}</label>
            <button className="choice-button" onClick={handleButton}>
                <span>Choose a {id} :</span>
                <span className="fa-solid fa-angle-down select-arrow"></span>
            </button>
            <ul>
                {
                    dataOptions.map((dataOption, index) => {
                        return <li value={dataOption.name} className="choice-li" key={index} onClick={getText}>{dataOption.name}</li>
                    })
                }
            </ul>
        </div>
    )
};

function handleButton(e) {
    e.preventDefault();
    // console.log(e);
}

function getText() {
    const choiceBtnSpan = document.querySelector(".choice-button span");
    const choicesLi = document.querySelectorAll(".choice-li");
    // console.log(choicesLi)
    choicesLi.forEach((choiceLi) =>
        // console.log(choiceLi)
        choiceLi.addEventListener('click', () => {
            // console.log(choicesLi);
            choiceBtnSpan.textContent = choiceLi.textContent;
        })
    );
}

DropdownMenu.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    dataOptions: PropTypes.array
};

export default DropdownMenu;