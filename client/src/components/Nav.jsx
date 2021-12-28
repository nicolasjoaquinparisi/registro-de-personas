import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="navbar bg-nav navbar-expand-lg p-0 border-bottom">
            <div className="container d-flex justify-content-evenly">
                <Link className="nav-link link" to="/persons">Personas</Link>
                <Link className="nav-link link" to="/jobs">Empleos</Link>
            </div>
        </nav>
    );
}
 
export default Nav;