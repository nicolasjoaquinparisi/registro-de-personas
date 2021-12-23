import { useState, useEffect } from 'react';

import Table from './components/Table/Table';

import axios from 'axios';

const App = () => {

  useEffect(() => {

    const sendRequest = async() => {
      try {
        const url = `http://localhost:8080/persons`;
        const response = await axios.get(url);
        
        setPersons(response.data);
      }
      catch (error) {
        console.log(error);
      }
    }
    sendRequest();
  
  }, [])

  const [ persons, setPersons ] = useState([]);

  return (
    <div className="container">
      <main className="mt-5 d-flex justify-content-center table-responsive-sm">
      {
          Object.keys(persons).length > 0 ?
            <Table
              persons={persons}
            />
          :
            <p className="fs-5 text-secondary">Por el momento no hay personas dadas de alta.</p>
        }
      </main>
    </div>
  );
}

export default App;
