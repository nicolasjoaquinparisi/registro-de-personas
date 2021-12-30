import { useContext } from 'react';
import { Link } from "react-router-dom";
import CardJob from '../components/CardJob';
import { JobsContext } from '../context/JobsContext';


const Jobs = () => {

    const { jobs } = useContext(JobsContext);

  return (
    <div className="container">
        <div className="d-flex justify-content-end">
            <Link className="bg-transparent link-button border-0 fs-4 p-0 " to="/new-job">Nuevo empleo</Link>
        </div>

        <main className="mt-5 d-flex justify-content-center table-responsive-sm">
        {
            Object.keys(jobs).length > 0 ?
                (
                    <div>
                        {
                            Object.keys(jobs).length > 0 ?
                                jobs.map(job => (
                                <CardJob
                                    key={job.id}
                                    job={job}
                                />
                                ))
                            :
                                null
                        }
                    </div>
                )
            :
                <p className="fs-5 text-secondary">Por el momento no hay empleos dados de alta.</p>
        }
        </main>
    </div>
  );
}

export default Jobs;
