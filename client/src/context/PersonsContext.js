import { useState, useEffect, createContext } from "react";

import axios from "axios";

export const PersonsContext = createContext();

const PersonsProvider = (props) => {

    const [ persons, setPersons ] = useState([]);
    const [ updatePersons, setUpdatePersons ] = useState(false);

    useEffect(() => {

        const sendRequest = async() => {
          try {
            const url = `http://localhost:8080/persons`;
            const response = await axios.get(url);
            
            setPersons(response.data);
            setUpdatePersons(false);
          }
          catch (error) {
            console.log(error);
          }
        }
        sendRequest();
      
      }, [updatePersons]);

    return (
        <PersonsContext.Provider
            value={{
                persons,
                setUpdatePersons
            }}
        >
            {props.children}
        </PersonsContext.Provider>
    )
}
export default PersonsProvider;