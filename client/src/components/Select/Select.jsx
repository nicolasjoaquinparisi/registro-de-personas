import Option from "./Option";

const Select = ({person, jobs, setPerson}) => {
    return (
        <select
            className="form-select w-100"
            onChange={e => setPerson({...person, job: e.target.value}) }
            value={ (person.job) ? person.job.id : -1 }
        >
            <option value="-1">Ninguno</option>
            {
                jobs.map(job => (
                    <Option
                        key={job.id}
                        id={job.id}
                        name={job.name}
                        selectedJob={person.job}
                    />
                ))
            }
        </select>
    );
}
 
export default Select;