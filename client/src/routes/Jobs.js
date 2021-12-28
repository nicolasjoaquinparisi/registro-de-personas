import { useState, useContext } from 'react';

import CardJob from '../components/CardJob';

import { Link } from "react-router-dom";

import Modal from '@material-ui/core/Modal';
import { JobsContext } from '../context/JobsContext';

const Jobs = () => {

    const { jobs } = useContext(JobsContext);

    /* MODAL */
    const [ infoJob, setInfoJob ] = useState({});
    const [open, setOpen] = useState(false);

    const getModalStyle = () => {
        const top = '50';
        const left = '50';
        const marginTop = '50';
        const marginLeft = '50';
    
        return {
            top: `${top}%`,
            left: `${left}%`,
            marginTop: `-${marginTop}px`,
            marginLeft: `-${marginLeft}px`,
            transform: `translate(-${top}%, -${left}%)`,
            position: 'absolute',
        };
    }

    const [ modalStyle ] = useState(getModalStyle);

    const handleClose = () => {
        setOpen(false);
    }

  return (
    <div className="container">
        <div className="d-flex justify-content-end">
            <Link className="bg-transparent link-button border-0 fs-4 p-0 " to="/new-job">Nuevo empleo</Link>
        </div>

        <Modal
            open={open}
            onClose={() => { handleClose(); }}
            >
            <div style={modalStyle} className="p-3 w-50 bg-light text-light rounded">
                <h2 className="text-center text-primary p-3 rounded">{infoJob.name}</h2>
                <p className="p-3 bg-secondary rounded">{infoJob.description}</p>

                <div className="d-flex justify-content-end">
                    <button className="btn btn-primary" onClick={handleClose}>Cerrar</button>
                </div>
            </div>
        </Modal>

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
                                    setOpen={setOpen}
                                    setInfoJob={setInfoJob}
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
