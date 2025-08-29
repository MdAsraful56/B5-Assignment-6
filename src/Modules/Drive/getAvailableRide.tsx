import { useState } from 'react';
import { Button } from '../../components/ui/button';
import { useGetAvailableRideQuery } from '../../Redux/Features/Driver/driver.api';
import DriveCard from './DriveCard';

const GetAvailableRide = () => {
    const { data, isLoading, isError } = useGetAvailableRideQuery(undefined);

    const [page, setPage] = useState(1);
    const itemsPerPage = 6;

    if (isLoading) return <p className='text-center mt-10'>Loading rides...</p>;
    if (isError)
        return (
            <p className='text-center mt-10 text-red-500'>
                Failed to load rides.
            </p>
        );

    const rides = data?.data || [];
    // console.log(rides, 'available rides data');

    // Pagination
    const totalPages = Math.ceil(rides.length / itemsPerPage);
    const paginatedRides = rides.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
    );

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
                    {paginatedRides.map((ride: any) => (
                        <DriveCard key={ride._id} ride={ride} />
                    ))}
                </div>
            )}
            <div className=''>
                {/* Pagination */}
                {totalPages > 1 && (
                    <div className='flex justify-center items-center gap-4 mt-8'>
                        <Button
                            disabled={page === 1}
                            onClick={() => setPage((prev) => prev - 1)}
                            variant='outline'
                        >
                            Prev
                        </Button>
                        <span>
                            Page {page} of {totalPages}
                        </span>
                        <Button
                            disabled={page === totalPages}
                            onClick={() => setPage((prev) => prev + 1)}
                            variant='outline'
                        >
                            Next
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GetAvailableRide;
