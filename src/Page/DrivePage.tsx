import { Outlet } from 'react-router';
import CreatePick from '../Modules/Drive/CreatePick';
import GetAvailableRide from '../Modules/Drive/getAvailableRide';
import GetMyPick from '../Modules/Drive/GetMyPick';

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
