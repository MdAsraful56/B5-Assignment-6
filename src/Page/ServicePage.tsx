import { Outlet } from 'react-router';
import { Pricing } from '../Modules/Service/Pricing';

const ServicePage = () => {
    return (
        <div className=''>
            <Outlet />
            <Pricing />
        </div>
    );
};

export default ServicePage;
