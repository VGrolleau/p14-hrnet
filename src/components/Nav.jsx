import { NavLink } from "react-router-dom";
import '../utils/style/Nav.css';

function Nav() {
    return (
        <nav>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Create employees</NavLink>
            <NavLink to="/employee-list" className={({ isActive }) => (isActive ? "active" : "")}>View current employees</NavLink>
        </nav>
    )
}

export default Nav;