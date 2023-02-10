import { useEffect } from "react";
import DropdownMenu from "../components/DropdownMenu";
import Input from "../components/Input";
import Select from "../components/Select";
import { dataForm, states, departments } from "../data";
import '../utils/style/CreateEmployee.css';

function CreateEmployee() {
    useEffect(() => { document.title = "HRnet - Home" });

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

    return (
        <section className="create-employee-section">
            <h2>Create employee</h2>

            <form>
                <div id="nameBloc">
                    {dataNameBloc.map(obj => {
                        return <Input id={obj.id} label={obj.label} type={obj.type} key={obj.id} />
                    })}
                </div>

                <fieldset className="address" id="addressBloc">
                    <legend>Address</legend>

                    {dataAddressBloc.map(obj => {
                        if (obj.category === "input") {
                            return <Input id={obj.id} label={obj.label} type={obj.type} key={obj.id} />
                        }
                        else {
                            {/* return <DropdownMenu id={obj.id} label={obj.label} dataOptions={states} key={obj.id} /> */ }
                            return <Select id={obj.id} label={obj.label} dataOptions={states} key={obj.id} />
                        }
                    })}
                </fieldset>

                <div id="departmentBloc">
                    {dataDepartmentBloc.map(obj => {
                        return <DropdownMenu id={obj.id} label={obj.label} dataOptions={departments} key={obj.id} />
                    })}
                </div>

                <button id="create-button">Save</button>
            </form>
        </section>
    )
}

export default CreateEmployee;