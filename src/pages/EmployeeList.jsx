import Table from "../components/Table";
import "../utils/style/EmployeeList.css";
import { mockedEmployees } from "../data";

function EmployeeList() {
    let columns = [];
    for (const key in mockedEmployees[0]) {
        if (Object.hasOwnProperty.call(mockedEmployees[0], key)) {
            let headerKey = key.replace(/([A-Z])/g, ' $1').trim();
            columns.push({ accessorKey: key, header: headerKey.charAt(0).toUpperCase() + headerKey.slice(1) })
        }
    };

    return (
        <section className="employee-list-section">
            <h2>Current employees</h2>

            <div className="employee-table">
                <Table data={mockedEmployees} columns={columns} />
            </div>
        </section>
    )
}

export default EmployeeList;