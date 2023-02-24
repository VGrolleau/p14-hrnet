import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DropdownMenu from "../components/DropdownMenu";
import Input from "../components/Input";
import Modal from "../components/Modal";
import { dataForm, states, departments } from "../data";
import { createEmployee } from "../redux";
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
    const [errors, setErrors] = useState({});

    let dispatch = useDispatch();

    const textModal = "Employee created!";

    let dataNameBlock = [];
    let dataAddressBlock = [];
    let dataDepartmentBlock = [];

    dataForm.map((block) => {
        if (block.nameBloc) {
            for (const obj of block.nameBloc) {
                dataNameBlock.push(obj);
            }
        }
        if (block.addressBloc) {
            for (const obj of block.addressBloc) {
                dataAddressBlock.push(obj);
            }
        }
        if (block.departmentBloc) {
            for (const obj of block.departmentBloc) {
                dataDepartmentBlock.push(obj);
            }
        }
        return (dataNameBlock, dataAddressBlock, dataDepartmentBlock);
    });

    const toggleModal = () => {
        setModal(!modal);
    };

    const employeesSelector = useSelector((state) => state.employee.employees);

    let newEmployees = [...employeesSelector];
    newEmployees.push({
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

    const handleState = (newValue) => {
        // setState(newValue);
        if (!newValue) {
            setErrors((prevErrors) => ({ ...prevErrors, "state": "Please choose employee state" }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, "state": "" }));
            setState(newValue);
        }
    }

    const handleDepartment = (newValue) => {
        // setDepartment(newValue)
        if (!newValue) {
            setErrors((prevErrors) => ({ ...prevErrors, "department": "Please choose employee department" }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, "department": "" }));
            setDepartment(newValue);
        };
    }

    const regexText = /^[a-zA-Z]+$/;

    const handleInput = (idValue, newValue) => {
        switch (idValue) {
            case "first-name":
                if (!newValue) {
                    setErrors((prevErrors) => ({ ...prevErrors, "first-name": "Please enter employee first name" }));
                }
                else if (!newValue.match(regexText)) {
                    setErrors((prevErrors) => ({ ...prevErrors, "first-name": "Please enter valid first name" }));
                }
                else {
                    setErrors((prevErrors) => ({ ...prevErrors, "first-name": "" }));
                    setFirstName(newValue);
                }
                break;

            case "last-name":
                if (!newValue) {
                    setErrors((prevErrors) => ({ ...prevErrors, "last-name": "Please enter employee last name" }));
                }
                else if (!newValue.match(regexText)) {
                    setErrors((prevErrors) => ({ ...prevErrors, "last-name": "Please enter valid last name" }));
                }
                else {
                    setErrors((prevErrors) => ({ ...prevErrors, "last-name": "" }));
                    setLastName(newValue);
                }
                // setLastName(newValue)
                break;
            case "date-of-birth":
                if (!newValue) {
                    setErrors((prevErrors) => ({ ...prevErrors, "date-of-birth": "Please choose a date of birth" }));
                } else {
                    setErrors((prevErrors) => ({ ...prevErrors, "date-of-birth": "" }));
                    setDateOfBirth(newValue);
                }
                // setDateOfBirth(newValue)
                break;
            case "start-date":
                if (!newValue) {
                    setErrors((prevErrors) => ({ ...prevErrors, "start-date": "Please choose a start date" }));
                } else {
                    setErrors((prevErrors) => ({ ...prevErrors, "start-date": "" }));
                    setStartDate(newValue);
                }
                // setStartDate(newValue)
                break;
            case "street":
                if (!newValue) {
                    setErrors((prevErrors) => ({ ...prevErrors, "street": "Please enter employee street" }));
                } else {
                    setErrors((prevErrors) => ({ ...prevErrors, "street": "" }));
                    setStreet(newValue);
                }
                // setStreet(newValue)
                break;
            case "city":
                if (!newValue) {
                    setErrors((prevErrors) => ({ ...prevErrors, "city": "Please enter employee city" }));
                } else {
                    setErrors((prevErrors) => ({ ...prevErrors, "city": "" }));
                    setCity(newValue);
                }
                // setCity(newValue)
                break;
            case "zip-code":
                if (!newValue) {
                    setErrors((prevErrors) => ({ ...prevErrors, "zip-code": "Please enter employee zip code" }));
                } else {
                    setErrors((prevErrors) => ({ ...prevErrors, "zip-code": "" }));
                    setZipCode(newValue);
                }
                // setZipCode(newValue)
                break;

            default:
                break;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const formErrors = {};
        if (!firstName) {
            formErrors["first-name"] = "Please enter employee first name";
        } else if (!firstName.match(regexText)) {
            formErrors["first-name"] = "Please enter valid first name";
        }

        if (!lastName) {
            formErrors["last-name"] = "Please enter employee last name";
        } else if (!lastName.match(regexText)) {
            formErrors["last-name"] = "Please enter valid last name";
        }
        if (!dateOfBirth) {
            formErrors["date-of-birth"] = "Please choose a date of birth";
        }
        if (!startDate) {
            formErrors["start-date"] = "Please choose a start date";
        }
        if (!street) {
            formErrors["street"] = "Please enter employee street";
        }
        if (!city) {
            formErrors["city"] = "Please enter employee city";
        }
        if (!state) {
            formErrors["state"] = "Please choose employee state";
        }
        if (!zipCode) {
            formErrors["zip-code"] = "Please enter employee zip code";
        }
        if (!department) {
            formErrors["department"] = "Please choose employee department";
        }

        // check other fields for errors here
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }
        dispatch(createEmployee(newEmployees));
        toggleModal();
    };

    return (
        <section className="create-employee-section">
            <h2>Create employee</h2>

            <form onSubmit={handleSubmit}>
                <div id="nameBloc">
                    {dataNameBlock.map((obj, index) => {
                        return <Input id={obj.id} label={obj.label} type={obj.type} error={errors[obj.id]} onUpdate={handleInput} key={`${obj.id}-${index}`} />
                    })}
                </div>

                <fieldset className="address" id="addressBloc">
                    <legend>Address</legend>

                    {dataAddressBlock.map((obj, index) => {
                        if (obj.category === "input") {
                            return <Input id={obj.id} label={obj.label} type={obj.type} error={errors[obj.id]} onUpdate={handleInput} key={`${obj.id}-${index}`} />
                        }
                        else {
                            return <DropdownMenu id={obj.id} label={obj.label} dataOptions={states} error={errors[obj.id]} onUpdate={handleState} key={`${obj.id}-${index}`} />
                        }
                    })}
                </fieldset>

                <div id="departmentBloc">
                    {dataDepartmentBlock.map((obj, index) => {
                        return (
                            <DropdownMenu id={obj.id} label={obj.label} dataOptions={departments} error={errors[obj.id]} onUpdate={handleDepartment} key={`${obj.id}-${index}`} />
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