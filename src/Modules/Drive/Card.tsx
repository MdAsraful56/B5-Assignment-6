import { CheckCircle2, DollarSign, Map, MapPin, XCircle } from 'lucide-react';
import React from 'react';
import { useUpdateDriveMutation } from '../../Redux/Features/Driver/driver.api';

interface Pick {
    _id: string;
    pickupLocation: string;
    dropLocation: string;
    payment: number;
    status: string;
    driver: string;
    user: string;
}

interface CardProps {
    pick: Pick;
}

const Card: React.FC<CardProps> = ({ pick }) => {
    const [updateDrive] = useUpdateDriveMutation();

    // const handleComplete = async (id: string, pick: Pick) => {
    //     try {
    //         const res = await updateDrive({
    //             id,
    //             status: 'COMPLETED',
    //         }).unwrap();
    //         console.log(res, 'response from handle complete');
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    const handleComplete = async (id: string) => {
        try {
            const res = await updateDrive({
                id,
                status: 'COMPLETED',
            }).unwrap();
            console.log(res, 'response from handle complete');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all p-6 flex flex-col justify-between hover:scale-[1.02] duration-200'>
            {/* Ride Info */}
            <div className='mb-4 space-y-2'>
                <h3 className='text-xl font-bold text-gray-800 dark:text-gray-100 mb-2'>
                    Ride Info
                </h3>

                <p className='flex items-center gap-2 text-gray-600 dark:text-gray-300'>
                    <MapPin size={18} /> Pickup: {pick.pickupLocation}
                </p>
                <p className='flex items-center gap-2 text-gray-600 dark:text-gray-300'>
                    <Map size={18} /> Drop: {pick.dropLocation}
                </p>
                <p className='flex items-center gap-2 text-gray-600 dark:text-gray-300'>
                    <DollarSign size={18} /> Payment: ${pick.payment}
                </p>

                {/* Status Badge */}
                <div className='mt-2'>
                    {pick.status === 'PICKED' && (
                        <span className='flex items-center gap-1 text-yellow-600 font-semibold'>
                            <MapPin size={16} /> PICKED
                        </span>
                    )}
                    {pick.status === 'COMPLETED' && (
                        <span className='flex items-center gap-1 text-green-600 font-semibold'>
                            <CheckCircle2 size={16} /> COMPLETED
                        </span>
                    )}
                    {pick.status === 'CANCELLED' && (
                        <span className='flex items-center gap-1 text-red-600 font-semibold'>
                            <XCircle size={16} /> CANCELLED
                        </span>
                    )}
                    {pick.status !== 'PICKED' &&
                        pick.status !== 'COMPLETED' &&
                        pick.status !== 'CANCELLED' && (
                            <span className='flex items-center gap-1 text-gray-500 font-semibold'>
                                <MapPin size={16} /> {pick.status}
                            </span>
                        )}
                </div>
            </div>

            {/* Buttons */}
            <div className='mt-4 flex gap-3'>
                <button
                    onClick={() => console.log('Cancel clicked')}
                    className='flex-1 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-200 shadow-sm hover:shadow-md'
                >
                    <XCircle size={20} /> Cancel
                </button>
                <button
                    onClick={() => handleComplete(pick._id, pick)}
                    className='flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-200 shadow-sm hover:shadow-md'
                >
                    <CheckCircle2 size={20} /> Completed
                </button>
            </div>
        </div>
    );
};

export default Card;
