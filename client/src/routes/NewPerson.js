import { useState, useEffect } from "react";

import axios from "axios";

import { useParams } from 'react-router-dom';

const NewPerson = () => {

    const [person, setPerson] = useState({
        name: '',
        lastName: '',
        age: ''
    });
    const [error, setError] = useState(false);

    const { name, lastName, age } = person;

    const { id } = useParams();

    useEffect(() => {
        
        const sendFindPersonByIdRequest = async() => {
            try {
                const url = `http://localhost:8080/persons/${id}`;
                const response = await axios.get(url);
                
                setPerson(response.data);
            }
            catch (error) {
                console.log(error);
            }
        }

        if (id) sendFindPersonByIdRequest();

    }, [id])
    
    const getTitle = () => {
        return (id) ? `Editando a ${name} ${lastName}` : "Nueva persona";
    }

    const sendPostRequest = async() => {
        console.log("POST...");
        try {
            const url = 'http://localhost:8080/persons';
            await axios.post(url, person);

            setPerson({
                name: '',
                lastName: '',
                age: ''
            });

        }
        catch (error) {
            console.log(error);
        }
    }

    const sendPutRequest = async() => {
        console.log("PUT...");
        try {
            const url = `http://localhost:8080/persons/${id}`;
            await axios.put(url, person);
        }
        catch (error) {
            console.log(error);
        }
    }

    const handleClick = e => {

        e.preventDefault();

        if (name.trim() === '' || lastName.trim() === '' || age.trim() <= 0) {
            setError(true);
            return;
        }
        
        setError(false);

        if (id)
            sendPutRequest();
        else
            sendPostRequest();
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
                        type="text"
                        name="age"
                        className="form-control"
                        placeholder="Ingrese la edad de la persona"
                        onChange={handleChange}
                        value={age}
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
 
export default NewPerson;