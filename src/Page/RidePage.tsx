import { Outlet } from 'react-router';
import CreateRide from '../Modules/Ride/CreateRide';
import Features from '../Modules/Ride/Features';
import GetMyRide from '../Modules/Ride/GetMyRide';

const RidePage = () => {
    return (
        <div>
            <Outlet />
            <CreateRide />
            <GetMyRide />
            <Features />
        </div>
    );
};

export default RidePage;
