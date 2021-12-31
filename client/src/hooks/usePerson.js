import { useState } from 'react';

const usePerson = () => {

    const [person, setPerson] = useState({
        name: '',
        lastName: '',
        age: 0,
        job: -1
    });

    const resetStateWithAttributesExceptJob = () => {
        setPerson({
            name: person.name,
            lastName: person.lastName,
            age: person.age,
            job: -1
        });
    }

    const resetState = () => {
        setPerson({
            name: '',
            lastName: '',
            age: 0,
            job: -1
        });
    }

    return [ person, setPerson, resetStateWithAttributesExceptJob, resetState ];
}
 
export default usePerson;