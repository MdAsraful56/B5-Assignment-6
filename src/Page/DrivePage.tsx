import { Outlet } from 'react-router';
import GetMyPick from '../Modules/Drive/GetMyPick';

const DrivePage = () => {
    return (
        <div>
            <Outlet />
            <GetMyPick />
        </div>
    );
};

export default DrivePage;
