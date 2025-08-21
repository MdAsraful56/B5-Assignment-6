import { Outlet } from 'react-router';
import { Available } from '../Modules/Home/Available';
import Choose from '../Modules/Home/Choose';
import FAQ from '../Modules/Home/FAQ';
import HowItWork from '../Modules/Home/HowItWork';
import Review from '../Modules/Home/Review';

const HomePage = () => {
    return (
        <div className='space-y-10 '>
            <Outlet />
            <Choose />
            <HowItWork />
            <Available />
            <FAQ />
            <Review />
        </div>
    );
};

export default HomePage;
