import { Link } from "react-router-dom";
import '../utils/style/Nav.css';

function Nav() {
    return (
        <nav>
            <Link to="/">Create employees</Link>
            <Link to="/employee-list">View current employees</Link>
        </nav>
    )
}

export default Nav;