import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DropdownMenu from "../components/DropdownMenu";
import Input from "../components/Input";
import Modal from "../components/Modal";
import { dataForm, states, departments } from "../data";
import { createEmployee, getOption } from "../redux";
import '../utils/style/CreateEmployee.css';

function CreateEmployee() {
    useEffect(() => { document.title = "HRnet - Home" });
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [startDate, setStartDate] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [department, setDepartment] = useState('');
    const [modal, setModal] = useState(false);

    let dispatch = useDispatch();

    const textModal = "Employee created!";

    let dataNameBloc = [];
    let dataAddressBloc = [];
    let dataDepartmentBloc = [];

    dataForm.map((bloc) => {
        if (bloc.nameBloc) {
            for (const obj of bloc.nameBloc) {
                dataNameBloc.push(obj);
            }
        }
        if (bloc.addressBloc) {
            for (const obj of bloc.addressBloc) {
                dataAddressBloc.push(obj);
            }
        }
        if (bloc.departmentBloc) {
            for (const obj of bloc.departmentBloc) {
                dataDepartmentBloc.push(obj);
            }
        }
        return (dataNameBloc, dataAddressBloc, dataDepartmentBloc);
    });

    const toggleModal = () => {
        setModal(!modal);
    };

    const employeesState = useSelector((state) => state.employee.employees);
    // const optionState = useSelector((state) => state.employee.option);

    let employees = [...employeesState];
    employees.push({
        firstName: firstName,
        lastName: lastName,
        dateOfBirth: dateOfBirth,
        startDate: startDate,
        street: street,
        city: city,
        state: state,
        zipCode: zipCode,
        department: department
    });

    const setChangeValue = (elementId, settingFunction) => {
        document.getElementById(elementId).addEventListener("change", (e) => settingFunction(e.target.value));
    }

    // let startStateText = "";
    // let endStateText = "";
    // let storage = undefined;

    window.addEventListener("load", () => {
        setChangeValue("first-name", setFirstName);
        setChangeValue("last-name", setLastName);
        setChangeValue("date-of-birth", setDateOfBirth);
        setChangeValue("start-date", setStartDate);
        setChangeValue("street", setStreet);
        setChangeValue("city", setCity);
        setChangeValue("zip-code", setZipCode);
        // setState(document.getElementById("state").textContent);
        // setDepartment(document.getElementById("department").textContent);
        // document.addEventListener("click", () => console.log(document.getElementById("state").textContent))
        if (typeof storage !== "undefined") {
            document.getElementById("state").addEventListener("change", console.log(document))
        }

        // console.log(state);
        // startStateText = document.getElementById("state").textContent;
    })

    // setTimeout(() => {
    //     setChangeValue("first-name", setFirstName);
    //     setChangeValue("last-name", setLastName);
    //     setChangeValue("date-of-birth", setDateOfBirth);
    //     setChangeValue("start-date", setStartDate);
    //     setChangeValue("street", setStreet);
    //     setChangeValue("city", setCity);
    //     setChangeValue("zip-code", setZipCode);
    //     // setState(document.getElementById("state").textContent);
    //     // setDepartment(document.getElementById("department").textContent);
    //     // document.addEventListener("click", () => console.log(document.getElementById("state").textContent))
    //     // if (storage === undefined) {
    //     //     document.getElementById("state").addEventListener("change", console.log(document))
    //     // }

    //     // console.log(state);
    //     // startStateText = document.getElementById("state").textContent;

    // }, 1);
    // document.addEventListener("click", () => console.log(document.getElementById("state").textContent, state))

    const handleSubmit = (e) => {
        e.preventDefault();
        /** TODO:
         * Envoyer les données dans redux pour pouvoir ajouter dans le tableau dans EmployeeList
         */
        // endStateText = document.getElementById("state").textContent;
        // console.log(startStateText, endStateText);
        // endStateText !== startStateText ? setState(endStateText) : setState(startStateText);
        setState(document.getElementById("state").textContent);
        setDepartment(document.getElementById("department").textContent);
        // console.log(state);
        console.log(document.getElementById("state").textContent, state, document.getElementById("department").textContent, department);
        // console.log(employees);
        // console.log(optionState);
        // dispatch(createEmployee(employees));
        toggleModal();
    };

    return (
        <section className="create-employee-section">
            <h2>Create employee</h2>

            <form onSubmit={handleSubmit}>
                <div id="nameBloc">
                    {dataNameBloc.map(obj => {
                        return <Input id={obj.id} label={obj.label} type={obj.type} key={obj.id} />
                    })}
                </div>

                <fieldset className="address" id="addressBloc">
                    <legend>Address</legend>

                    {dataAddressBloc.map((obj, index) => {
                        if (obj.category === "input") {
                            return <Input id={obj.id} label={obj.label} type={obj.type} key={obj.id} />
                        }
                        else {
                            return <DropdownMenu id={obj.id} label={obj.label} dataOptions={states} key={`${obj.id}-${index}`} />
                        }
                    })}
                </fieldset>

                <div id="departmentBloc">
                    {dataDepartmentBloc.map((obj, index) => {
                        return (
                            <DropdownMenu id={obj.id} label={obj.label} dataOptions={departments} key={`${obj.id}-${index}`} />
                        )
                    })}
                </div>

                <button id="create-button">Save</button>
            </form>
            {modal && (
                <Modal toggleModal={toggleModal} textModal={textModal} />
            )}
        </section>
    )
}

export default CreateEmployee;