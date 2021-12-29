import { useState, useEffect, createContext } from "react";

import axios from "axios";

export const PersonsContext = createContext();

const PersonsProvider = (props) => {

    const [ persons, setPersons ] = useState([]);
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

    return (
        <PersonsContext.Provider
            value={{
                persons,
                setUpdate
            }}
        >
            {props.children}
        </PersonsContext.Provider>
    )
}
export default PersonsProvider;