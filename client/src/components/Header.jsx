import { Link } from 'react-router-dom';
import Nav from "./Nav";

const Header = () => {

    return (
        <header className="mb-4">
            <div className="p-4 bg-primary">
                <div className="container">
                    <Link to="/" id="header" className="text-decoration-none fs-1">Registro de Personas</Link>
                </div>
            </div>
            <Nav />
        </header>
    );
}
 
export default Header;