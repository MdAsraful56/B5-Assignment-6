import { Outlet } from 'react-router';
import FAQ from '../Modules/Home/FAQ';

const HomePage = () => {
    return (
        <div>
            <h1 className='text-2xl font-bold mb-4'>Home Page</h1>
            <Outlet />
            <FAQ />
        </div>
    );
};

export default HomePage;
