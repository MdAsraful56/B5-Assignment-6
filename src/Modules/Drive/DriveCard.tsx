// DriveCard.tsx
import { Clock, DollarSign, MapPin, Truck } from 'lucide-react';
import React from 'react';
import { toast } from 'sonner';
import { useCreateDriveMutation } from '../../Redux/Features/Driver/driver.api';

type RideInfo = {
    pickupLocation?: string;
    dropLocation?: string;
    status?: string;
    payment?: number;
};

interface DriveCardProps {
    ride: RideInfo & { _id: string; createdAt: string; status: string };
}

const DriveCard: React.FC<DriveCardProps> = ({ ride }) => {
    const [createDrive, { isLoading }] = useCreateDriveMutation();

    const handlePickup = async (rideId: string, rideInfo: RideInfo) => {
        try {
            await createDrive({ rideId, rideInfo }).unwrap();
            // console.log('Ride picked up:', rideId);
            toast.success('Ride picked up successfully!');
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (err) {
            // console.error('Pickup failed:', err);
            toast.error('Failed to pick up the ride.');
        }
    };

    // Status badge
    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'PENDING':
                return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-700 dark:text-yellow-100';
            case 'CONFIRMED':
                return 'bg-green-100 text-green-700 dark:bg-green-700 dark:text-green-100';
            default:
                return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200';
        }
    };

    return (
        <div className='bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all p-6 flex flex-col justify-between hover:scale-[1.02] duration-200'>
            {/* Pickup & Drop */}
            <div className='mb-4 space-y-2'>
                <p className='flex items-center gap-2 text-gray-700 dark:text-gray-300 font-medium'>
                    <MapPin className='w-5 h-5 text-green-500' /> Pickup:{' '}
                    {ride.pickupLocation}
                </p>
                <p className='flex items-center gap-2 text-gray-700 dark:text-gray-300 font-medium'>
                    <MapPin className='w-5 h-5 text-red-500' /> Drop:{' '}
                    {ride.dropLocation}
                </p>
            </div>

            {/* Payment & Status */}
            <div className='flex justify-between items-center mb-4'>
                <p className='flex items-center gap-2 font-semibold text-gray-800 dark:text-gray-100'>
                    <DollarSign className='w-5 h-5 text-yellow-500' />{' '}
                    {ride.payment} ৳
                </p>
                <span
                    className={`px-3 py-1 text-sm rounded-full ${getStatusBadge(
                        ride.status
                    )}`}
                >
                    {ride.status}
                </span>
            </div>

            {/* Created At */}
            <div className='flex items-center text-gray-500 dark:text-gray-400 text-sm mb-4 gap-1'>
                <Clock className='w-4 h-4' />{' '}
                {new Date(ride.createdAt).toLocaleString()}
            </div>

            {/* Pickup Button */}
            {ride.status === 'PENDING' && (
                <button
                    onClick={() => handlePickup(ride._id, ride)}
                    disabled={isLoading}
                    className='w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-all shadow-sm hover:shadow-md disabled:opacity-50'
                >
                    <Truck size={18} />
                    {isLoading ? 'Picking up...' : 'Pickup Ride'}
                </button>
            )}
        </div>
    );
};

export default DriveCard;
