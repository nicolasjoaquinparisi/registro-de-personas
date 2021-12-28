import { Link } from 'react-router-dom';

const AppIndex = () => {
    return (
        <main className="container">
            <h3 className="text-center mt-4">Bienvenido al Sistema de Registro de Personas</h3>
            <p className="mt-4">En la sección <Link to="persons">personas</Link> podrás encontrar la información sobre las personas dadas de alta en el sistema</p>
        </main>
    );
}
 
export default AppIndex;