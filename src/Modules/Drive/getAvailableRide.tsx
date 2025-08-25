import { useGetAvailableRideQuery } from '../../Redux/Features/Driver/driver.api';
import DriveCard from './DriveCard';

const GetAvailableRide = () => {
    const { data, isLoading, isError } = useGetAvailableRideQuery(undefined);

    if (isLoading) return <p className='text-center mt-10'>Loading rides...</p>;
    if (isError)
        return (
            <p className='text-center mt-10 text-red-500'>
                Failed to load rides.
            </p>
        );

    const rides = data?.data || [];

    return (
        <div className='min-h-screen py-10 px-4'>
            <h1 className='text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100'>
                Available Rides
            </h1>

            {rides.length === 0 ? (
                <p className='text-center text-gray-600 dark:text-gray-300'>
                    No rides available at the moment.
                </p>
            ) : (
                <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                    {rides.map((ride: any) => (
                        <DriveCard key={ride._id} ride={ride} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default GetAvailableRide;
