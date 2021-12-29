import { useState, useEffect } from 'react';

import TablePersons from '../components/TablePersons/TablePersons';

import { Link } from 'react-router-dom';

import axios from 'axios';

const Persons = () => {

  const [ update, setUpdate ] = useState(false);

  useEffect(() => {

    const sendRequest = async() => {
      try {
        const url = `http://localhost:8080/persons`;
        const response = await axios.get(url);
        
        setPersons(response.data);
        setUpdate(false);
      }
      catch (error) {
        console.log(error);
      }
    }
    sendRequest();
  
  }, [update]);

  const [ persons, setPersons ] = useState([]);

  return (
    <div className="container">
      <div className="d-flex justify-content-end">
        <Link className="bg-transparent link-button border-0 fs-4 p-0 " to="/new-person">Nueva persona</Link>
      </div>

      <main className="mt-5 d-flex justify-content-center table-responsive-sm">
      {
          Object.keys(persons).length > 0 ?
            <TablePersons
              persons={persons}
              setUpdate={setUpdate}
            />
          :
            <p className="fs-5 text-secondary">Por el momento no hay personas dadas de alta.</p>
        }
      </main>
    </div>
  );
}

export default Persons;
