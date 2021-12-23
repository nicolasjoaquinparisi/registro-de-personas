import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="navbar bg-nav navbar-expand-lg p-0 border-bottom">
            <div className="container d-flex justify-content-evenly">
                <div className="">
                    <Link className="nav-link link" to="/">Listar</Link>
                </div>

                <Link className="nav-link link" to="/new-person">Nueva persona</Link>
            </div>
        </nav>
    );
}
 
export default Nav;