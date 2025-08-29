import { Outlet } from 'react-router';
import Capabilities from '../Modules/Features/Capabilities';
import Features from '../Modules/Features/Features';
import { Pricing } from '../Modules/Features/Pricing';
import ServiceHero from '../Modules/Features/ServiceHero';

const FeaturesPage = () => {
    return (
        <div className=''>
            <Outlet />
            <ServiceHero />
            <Capabilities />
            <Features />
            <Pricing />
        </div>
    );
};

export default FeaturesPage;
