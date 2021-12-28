import { Fragment } from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

const App = () => {
    return (
        <Fragment>
            <Header />
            <Outlet />
        </Fragment>
    );
}
 
export default App;