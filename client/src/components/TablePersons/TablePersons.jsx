import { useContext } from 'react';
import Person from './Person';
import { PersonsContext } from '../../context/PersonsContext';

const TablePersons = () => {

    const columns = ["Apellido", "Nombre", "Edad", "Empleo", "Modificar", "Eliminar"];

    const { persons } = useContext(PersonsContext);

    return (
        <table className="table table-bordered table-sm table-hover shadow text-center w-50">
            <thead className="table-primary">
                <tr>
                    {
                        columns.map(column => (
                            <th scope="col" key={column}>{column}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    persons.map(person => (
                        <Person
                            key={person.id}
                            person={person}
                        />
                    ))
                }
            </tbody>
        </table>
    );
}
 
export default TablePersons;