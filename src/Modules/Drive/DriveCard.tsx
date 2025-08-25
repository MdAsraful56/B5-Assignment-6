import { Clock, DollarSign, MapPin } from 'lucide-react';
import { useCreateDriveMutation } from '../../Redux/Features/Driver/driver.api';

type RideInfo = {
    pickupLocation?: string;
    dropLocation?: string;
    status?: string;
    payment?: number;
};

const DriveCard = ({ ride }) => {
    const [createDrive, { isLoading }] = useCreateDriveMutation();

    const handlePickup = async (rideId: string, rideInfo: RideInfo) => {
        console.log(rideId);

        await createDrive({ rideId, rideInfo }).unwrap();

        // console.log('Attempting to pick up ride:', ride);
        // const toastId = toast.loading('Updating...');
        // try {
        //     await createDrive({ rideId: ride._id }).unwrap();
        //     toast.success('Ride picked up successfully', { id: toastId });
        // } catch (error) {
        //     console.error('Pickup failed:', error);
        //     toast.error('Failed to pick up the ride', { id: toastId });
        // }
    };

    return (
        <div>
            <div
                key={ride._id}
                className='bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6 hover:shadow-lg transition'
            >
                {/* Pickup & Drop */}
                <div className='mb-4'>
                    <p className='flex items-center text-gray-700 dark:text-gray-200 font-medium'>
                        <MapPin className='w-5 h-5 mr-2 text-green-500' />
                        Pickup:{' '}
                        <span className='ml-1'>{ride.pickupLocation}</span>
                    </p>
                    <p className='flex items-center text-gray-700 dark:text-gray-200 font-medium'>
                        <MapPin className='w-5 h-5 mr-2 text-red-500' />
                        Drop: <span className='ml-1'>{ride.dropLocation}</span>
                    </p>
                </div>

                {/* Payment & Status */}
                <div className='flex justify-between items-center mb-4'>
                    <p className='flex items-center text-gray-800 dark:text-gray-100 font-semibold'>
                        <DollarSign className='w-5 h-5 mr-1 text-yellow-500' />
                        {ride.payment} ৳
                    </p>
                    <span
                        className={`px-3 py-1 text-sm rounded-full ${
                            ride.status === 'PENDING'
                                ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-700 dark:text-yellow-100'
                                : ride.status === 'CONFIRMED'
                                ? 'bg-green-100 text-green-700 dark:bg-green-700 dark:text-green-100'
                                : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200'
                        }`}
                    >
                        {ride.status}
                    </span>
                </div>

                {/* Created At */}
                <div className='flex items-center text-gray-500 dark:text-gray-400 text-sm mb-4'>
                    <Clock className='w-4 h-4 mr-1' />
                    {new Date(ride.createdAt).toLocaleString()}
                </div>

                {/* Pickup Button */}
                {ride.status === 'PENDING' && (
                    <button
                        onClick={() => handlePickup(ride._id, ride)}
                        disabled={isLoading}
                        className='w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition disabled:opacity-50'
                    >
                        {isLoading ? 'Picking up...' : 'Pickup Ride'}
                    </button>
                )}
            </div>
        </div>
    );
};

export default DriveCard;
