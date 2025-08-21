import { Outlet } from 'react-router';
import { Available } from '../Modules/Home/Available';
import FAQ from '../Modules/Home/FAQ';
import HowItWork from '../Modules/Home/HowItWork';

const HomePage = () => {
    return (
        <div className='space-y-10 '>
            <Outlet />
            <HowItWork />
            <Available />
            <FAQ />
        </div>
    );
};

export default HomePage;
