import { useContext } from 'react';
import { Link } from 'react-router-dom';
import TablePersons from '../components/TablePersons/TablePersons';
import { PersonsContext } from '../context/PersonsContext';

const Persons = () => {

  const { persons } = useContext(PersonsContext);

  return (
    <div className="container">
      <div className="d-flex justify-content-end">
        <Link className="bg-transparent link-button border-0 fs-4 p-0 " to="/new-person">Nueva persona</Link>
      </div>

      <main className="mt-5 d-flex justify-content-center table-responsive-sm">
      {
          Object.keys(persons).length > 0 ?
            <TablePersons />
          :
            <p className="fs-5 text-secondary">Por el momento no hay personas dadas de alta.</p>
        }
      </main>
    </div>
  );
}

export default Persons;
