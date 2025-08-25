import { Outlet } from 'react-router';
import CreatePick from '../Modules/Drive/CreatePick';
import GetMyPick from '../Modules/Drive/GetMyPick';
import GetAvailableRide from '../Modules/Drive/getAvailableRide';

const DrivePage = () => {
    return (
        <div>
            <Outlet />
            <GetAvailableRide />
            <CreatePick />
            <GetMyPick />
        </div>
    );
};

export default DrivePage;
