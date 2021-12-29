import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import JobsProvider from './context/JobsContext';
import PersonsProvider from './context/PersonsContext';

const App = () => {
    return (
        <Fragment>
            <Header />
            <PersonsProvider>
                <JobsProvider>
                    <Outlet />
                </JobsProvider>
            </PersonsProvider>
        </Fragment>
    );
}
 
export default App;