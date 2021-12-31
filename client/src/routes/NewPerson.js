import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { JobsContext } from '../context/JobsContext';
import { PersonsContext } from '../context/PersonsContext';
import Select from "../components/Select/Select";
import usePerson from "../hooks/usePerson";

const NewPerson = () => {

    const { jobs } = useContext(JobsContext);
    const { setUpdate } = useContext(PersonsContext);

    const { id } = useParams();

    const [error, setError] = useState(false);

    const [ loaded, setLoaded ] = useState(false);

    const [ person, setPerson, resetStateWithAttributesExceptJob, resetState ] = usePerson();
    const { name, lastName, age } = person;

    useEffect(() => {
        
        /*
        Función que se ejecuta cuando se va a modificar una persona
        Se recibe el id de la persona por parámetro y luego se hace una petición al servidor con el id, luego, se setean los datos al state
        */

        const sendFindPersonByIdRequest = async() => {
            try {
                const url = `http://localhost:8080/persons/${id}`;
                const response = await axios.get(url);
                
                setPerson(response.data);
                setLoaded(true);
            }
            catch (error) {
                console.log(error);
            }
        }

        if (id) sendFindPersonByIdRequest();

    }, []);

    useEffect(() => {
        
        /*
        Esta función se ejecuta cuando se va a modificar una persona
        Lo que hace es reemplezar el objeto job, el cual contiene la información del job traído del servidor, por el id de ese job
        En caso de que la persona tenga trabajo, caso contrario, le elimina esa propiedad
        */
       
        if (loaded) {
            if (id) {
                if (person.job) {
                    setPerson({...person, job: person.job.id});
                }
                else {
                    resetStateWithAttributesExceptJob();
                }
            }

            setLoaded(false);
        }

    }, []);
    
    const getTitle = () => {
        return (id) ? `Editando a ${name} ${lastName}` : "Nueva persona";
    }

    const sendPostRequest = async() => {
        try {
            console.table(person);
            
            const url = 'http://localhost:8080/persons';
            await axios.post(url, person);

            resetState();
            setUpdate(true);

        }
        catch (error) {
            console.log(error);
        }
    }

    const sendPutRequest = async() => {
        try {
            console.table(person);
            
            const url = `http://localhost:8080/persons/${id}`;
            await axios.put(url, person);

            resetState();
            setUpdate(true);
        }
        catch (error) {
            console.log(error);
        }
    }

    const handleClick = e => {

        e.preventDefault();

        if (name.trim() === '' || lastName.trim() === '' || age <= 0) {
            setError(true);
            return;
        }
        
        setError(false);

        // Se elimina el atributo job de la persona en caso de que no haya seleccionado un trabajo
        if (!person.job) resetStateWithAttributesExceptJob();

        if (id) {
            if (person.job === null) resetState();
            sendPutRequest();
        }
        else {
            sendPostRequest();
        }
    }

    const handleChange = e => {
        setPerson({
            ...person, 
            [e.target.name]: e.target.value});
    }

    return (
        <div className="container"> 
            <h3 className="text-secondary text-center mb-4">{getTitle()}</h3>

            {(error) ? 
            <div className="d-flex justify-content-center">
                <p className="text-light bg-danger p-3 w-50 text-center">Todos los campos son obligatorios</p>
            </div>
            :
            null}

            <div className="d-flex justify-content-center">
                <form className="border p-3 rounded w-50 shadow">
                    <label className="form-label" htmlFor="name">Nombre</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Ingrese el nombre de la persona"
                        onChange={handleChange}
                        value={name}
                    />

                    <label className="form-label mt-3" htmlFor="last_name">Apellido</label>
                    <input
                        id="last_name"
                        type="text"
                        name="lastName"
                        className="form-control"
                        placeholder="Ingrese el apellido de la persona"
                        onChange={handleChange}
                        value={lastName}
                    />

                    <label className="form-label mt-3" htmlFor="age">Edad</label>
                    <input
                        id="age"
                        type="number"
                        name="age"
                        className="form-control"
                        placeholder="Ingrese la edad de la persona"
                        onChange={handleChange}
                        value={ (age <= 0) ? "" : age }
                    />

                    <div className="mt-4">
                        <h5>Seleccione un empleo</h5>

                        <Select
                            person={person}
                            jobs={jobs}
                            setPerson={setPerson}
                        />
                    </div>

                    <div className="d-flex justify-content-end">
                        <input
                            type="button"
                            className="btn btn-primary mt-3"
                            value="Aceptar"
                            onClick={handleClick}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default NewPerson;