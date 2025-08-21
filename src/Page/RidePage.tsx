import { Outlet } from 'react-router';
import CreateRide from '../Modules/Ride/CreateRide';
import Features from '../Modules/Ride/Features';

const RidePage = () => {
    return (
        <div>
            <Outlet />
            <CreateRide />
            <Features />
        </div>
    );
};

export default RidePage;
