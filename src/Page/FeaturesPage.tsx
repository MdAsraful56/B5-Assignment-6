import { Outlet } from 'react-router';
import { Pricing } from '../Modules/Features/Pricing';
import ServiceHero from '../Modules/Features/ServiceHero';

const FeaturesPage = () => {
    return (
        <div className=''>
            <Outlet />
            <ServiceHero />
            <Pricing />
        </div>
    );
};

export default FeaturesPage;
