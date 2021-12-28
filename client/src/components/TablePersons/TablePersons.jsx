import Person from './Person';

const TablePersons = ({persons}) => {

    const columns = ["Apellido", "Nombre", "Edad", "Empleo", "Modificar", "Eliminar"];

    return (
        <table className="table table-bordered table-sm table-hover shadow text-center w-50">
            <thead className="table-primary">
                <tr>
                    {
                        Object.keys(columns).length > 0 ?
                            columns.map(column => (
                                <th scope="col" key={column}>{column}</th>
                            ))
                        :
                            null
                    }
                </tr>
            </thead>
            <tbody>
                {
                    Object.keys(persons).length > 0 ?
                        persons.map(person => (
                        <Person
                            key={person.id}
                            person={person}
                        />
                        ))
                    :
                        null
                }
            </tbody>
        </table>
    );
}
 
export default TablePersons;