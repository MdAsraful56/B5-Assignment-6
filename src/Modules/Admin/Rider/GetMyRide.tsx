import { Outlet } from 'react-router';
import RideGetMyRide from './../../Ride/GetMyRide';

const GetMyRide = () => {
    return (
        <div className=''>
            <div className='text-center text-2xl font-semibold my-5 mx-5'>
                <h3 className=''>Get My All Ride</h3>
            </div>
            <Outlet />
            <RideGetMyRide />
        </div>
    );
};

export default GetMyRide;
