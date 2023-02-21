import Table from "../components/Table";
import "../utils/style/EmployeeList.css";
// import { mockedEmployees } from "../data";
import { useSelector } from "react-redux";

function EmployeeList() {
    // const firstName = useSelector((state) => state.employee.firstName);
    // const lastName = useSelector((state) => state.employee.lastName);
    // const startDate = useSelector((state) => state.employee.startDate);
    // const department = useSelector((state) => state.employee.department);
    // const dateOfBirth = useSelector((state) => state.employee.dateOfBirth);
    // const street = useSelector((state) => state.employee.street);
    // const city = useSelector((state) => state.employee.city);
    // const state = useSelector((state) => state.employee.state);
    // const zipCode = useSelector((state) => state.employee.zipCode);

    // let employees = [];

    // employees.push(
    //     {
    //         firstName: firstName,
    //         lastName: lastName,
    //         startDate: startDate,
    //         department: department,
    //         dateOfBirth: dateOfBirth,
    //         street: street,
    //         city: city,
    //         state: state,
    //         zipCode: zipCode
    //     }
    // );
    const employees = useSelector((state) => state.employee.employees);

    console.log(employees);

    let columns = [];
    for (const key in employees[0]) {
        if (Object.hasOwnProperty.call(employees[0], key)) {
            let headerKey = key.replace(/([A-Z])/g, ' $1').trim();
            columns.push({ accessorKey: key, header: headerKey.charAt(0).toUpperCase() + headerKey.slice(1) })
        }
    };
    // for (const key in mockedEmployees[0]) {
    //     if (Object.hasOwnProperty.call(mockedEmployees[0], key)) {
    //         let headerKey = key.replace(/([A-Z])/g, ' $1').trim();
    //         columns.push({ accessorKey: key, header: headerKey.charAt(0).toUpperCase() + headerKey.slice(1) })
    //     }
    // };

    return (
        <section className="employee-list-section">
            <h2>Current employees</h2>

            <div className="employee-table">
                <Table data={employees} columns={columns} />
                {/* <Table data={mockedEmployees} columns={columns} /> */}
            </div>
        </section>
    )
}

export default EmployeeList;