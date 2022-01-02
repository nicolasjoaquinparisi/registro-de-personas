import { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { JobsContext } from "../context/JobsContext";
import { PersonsContext } from "../context/PersonsContext";

const NewJob = () => {

    const { setUpdateJobs } = useContext(JobsContext);
    const { setUpdatePersons } = useContext(PersonsContext);

    const [job, setJob] = useState({
        name: '',
        description: ''
    });
    const [error, setError] = useState(false);

    const { name, description } = job;

    // Edit
    const { id } = useParams();
    const [ loaded, setLoaded ] = useState(false);
    const [ jobName, setJobName ] = useState('');

    useEffect(() => {

        const sendFindJobByIdRequest = async() => {
            try {
                const url = `http://localhost:8080/jobs/${id}`;
                const response = await axios.get(url);
                
                setJob(response.data);
                setLoaded(true);
            }
            catch (error) {
                console.log(error);
            }
        }

        if (id) sendFindJobByIdRequest();

    }, []);

    useEffect(() => {
        if (loaded) {
            setJobName(`${name}`);
        }
    }, [loaded]);

    const resetState = () => {
        setJob({
            name: '',
            description: ''
        });
    }

    const sendPostRequest = async() => {
        try {
            const url = 'http://localhost:8080/jobs';
            await axios.post(url, job);

            resetState();
            setUpdateJobs(true);

        }
        catch (error) {
            console.log(error);
        }
    }

    const sendPutRequest = async() => {
        try {
            const url = `http://localhost:8080/jobs/${id}`;
            await axios.put(url, job);

            resetState();
            setUpdateJobs(true);
            setUpdatePersons(true);
        }
        catch (error) {
            console.log(error);
        }
    }

    const handleClick = e => {

        e.preventDefault();

        if (name.trim() === '' || description.trim() === '') {
            setError(true);
            return;
        }
        
        setError(false);

        if (id) {
            sendPutRequest()
        } else {
            sendPostRequest();
        }
    }

    const handleChange = e => {
        setJob({
            ...job, 
            [e.target.name]: e.target.value});
    }

    return (
        <div className="container"> 
            <h3 className="text-secondary text-center mb-4">{(id) ? `Editando el empleo '${jobName}'` : "Nuevo empleo"}</h3>

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
                        placeholder="Ingrese el nombre del empleo"
                        onChange={handleChange}
                        value={name}
                    />

                    <label className="form-label mt-3" htmlFor="description">Descripción</label>
                    <textarea
                        id="description"
                        type="text"
                        name="description"
                        className="form-control"
                        placeholder="Ingrese la descripción del empleo"
                        onChange={handleChange}
                        value={description}
                    />

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
 
export default NewJob;