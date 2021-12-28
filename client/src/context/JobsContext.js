import { useState, useEffect, createContext } from "react";

import axios from "axios";

export const JobsContext = createContext();

const JobsProvider = (props) => {

    const [ jobs, setItems ] = useState([]);
    const [ update, setUpdate ] = useState(false);

    useEffect(() => {

        const sendRequest = async() => {
            try {
                const url = `http://localhost:8080/jobs`;
                const response = await axios.get(url);
            
                setItems(response.data);
            }
            catch (error) {
                console.log(error);
            }
            
            setUpdate(false);
        }
        sendRequest();
    
    }, [update]);

    return (
        <JobsContext.Provider
            value={{
                jobs,
                setUpdate
            }}
        >
            {props.children}
        </JobsContext.Provider>
    )
}
export default JobsProvider;