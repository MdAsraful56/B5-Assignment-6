import { Outlet } from 'react-router';
import CreateRide from '../Modules/Ride/CreateRide';
import GetCompletedRide from '../Modules/Ride/GetCompletedRide';
import GetMyRide from '../Modules/Ride/GetMyRide';

const RidePage = () => {
    return (
        <div>
            <Outlet />
            <CreateRide />
            <GetMyRide />
            <GetCompletedRide />
            {/* <Features /> */}
        </div>
    );
};

export default RidePage;
