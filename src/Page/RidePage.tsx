import { Outlet } from 'react-router';
import CreateRide from '../Modules/Ride/CreateRide';
import Features from '../Modules/Ride/Features';
import GetMyRide from '../Modules/Ride/GetMyRide';

const RidePage = () => {
    return (
        <div>
            <Outlet />
            <CreateRide />
            <div className=''>
                <div className='text-center my-12 space-y-5'>
                    <h2 className='text-3xl font-bold'>My Rides</h2>
                    <p className='text-gray-600'>
                        Manage and view your ride details
                    </p>
                </div>
            </div>
            <GetMyRide />
            <Features />
        </div>
    );
};

export default RidePage;
