import { RxUpdate } from 'react-icons/rx';
import {
    useGetRideQuery,
    useRemoveRideMutation,
    useUpdateRideMutation,
} from '../../Redux/Features/Ride/ride.api';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import { DeleteConfirmation } from '../../components/Components/DeleteConfirmation';
import { Update } from '../../components/Components/Update';
import Loading from '../../components/Loading';
import { Button } from '../../components/ui/button';

// const items = [
//     {
//         id: '1',
//         name: 'Alex Thompson',
//         email: 'alex.t@company.com',
//         location: 'San Francisco, US',
//         status: 'Active',
//         balance: '$1,250.00',
//     },
//     {
//         id: '2',
//         name: 'Sarah Chen',
//         email: 'sarah.c@company.com',
//         location: 'Singapore',
//         status: 'Active',
//         balance: '$600.00',
//     },
//     {
//         id: '3',
//         name: 'James Wilson',
//         email: 'j.wilson@company.com',
//         location: 'London, UK',
//         status: 'Inactive',
//         balance: '$650.00',
//     },
//     {
//         id: '4',
//         name: 'Maria Garcia',
//         email: 'm.garcia@company.com',
//         location: 'Madrid, Spain',
//         status: 'Active',
//         balance: '$0.00',
//     },
//     {
//         id: '5',
//         name: 'David Kim',
//         email: 'd.kim@company.com',
//         location: 'Seoul, KR',
//         status: 'Active',
//         balance: '-$1,000.00',
//     },
// ];

// Define a type for rideInfo or import it if already defined

type RideInfo = {
    pickupLocation?: string;
    dropLocation?: string;
    status?: string;
    payment?: number;
};

const GetMyRide = () => {
    const { data, error, isLoading } = useGetRideQuery(undefined);
    const [removeRide] = useRemoveRideMutation();
    const [updateRide] = useUpdateRideMutation();

    const items = data?.data?.rides?.result || [];

    if (isLoading)
        return (
            <div className='flex items-center justify-center h-screen'>
                <Loading />
            </div>
        );
    if (error)
        return (
            <div>
                Error:{' '}
                {typeof error === 'object' &&
                error !== null &&
                'message' in error
                    ? (error as { message: string }).message
                    : 'An error occurred.'}
            </div>
        );
    if (!data || data.length === 0) return <div>No rides found.</div>;

    if (items.length === 0)
        return (
            <div className='text-center text-gray-500'>No rides available.</div>
        );

    const handleUpdateRide = async (rideId: string, rideInfo: RideInfo) => {
        const toastId = toast.loading('Updating...');
        try {
            const res = await updateRide({ rideId, rideInfo }).unwrap();
            if (res.success) {
                toast.success('Updated successfully', { id: toastId });
            }
        } catch (err) {
            console.error(err);
            toast.error('Failed to update ride', { id: toastId });
        }
    };

    const handleRemoveRide = async (rideId: string) => {
        const toastId = toast.loading('Removing...');
        try {
            const res = await removeRide(rideId).unwrap();

            if (res.success) {
                toast.success('Removed', { id: toastId });
            }
        } catch (err) {
            console.error(err);
            toast.error('Failed to remove ride', { id: toastId });
        }
    };

    return (
        <div className='border rounded-md p-2'>
            <Table>
                <TableHeader>
                    <TableRow className='hover:bg-transparent'>
                        <TableHead>Pickup Location</TableHead>
                        <TableHead>Drop Location</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead className='text-right'>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {items.map((item) => (
                        <TableRow key={item._id}>
                            <TableCell className='font-medium'>
                                {item.pickupLocation}
                            </TableCell>
                            <TableCell>{item.dropLocation}</TableCell>
                            <TableCell>{item.status}</TableCell>
                            <TableCell>$ {item.payment}</TableCell>
                            <TableCell className='text-right'>
                                <div className='flex flex-row justify-end gap-4'>
                                    {/* <button className='border rounded-md p-1 hover:bg-amber-400'>
                                        <RxUpdate size={20} />
                                    </button> */}

                                    <Update
                                        ride={item}
                                        onConfirm={(rideInfo) =>
                                            handleUpdateRide(item._id, rideInfo)
                                        }
                                    >
                                        <Button
                                            size='sm'
                                            className='bg-amber-300 hover:bg-amber-500'
                                        >
                                            <RxUpdate size={20} />
                                        </Button>
                                    </Update>

                                    <DeleteConfirmation
                                        onConfirm={() =>
                                            handleRemoveRide(item._id)
                                        }
                                    >
                                        <Button
                                            size='sm'
                                            className='bg-red-300 hover:bg-red-500'
                                        >
                                            <Trash2 />
                                        </Button>
                                    </DeleteConfirmation>

                                    {/* <button className='border rounded-md p-1 hover:bg-orange-500'>
                                        <MdDeleteForever
                                            size={20}
                                            color='red'
                                        />
                                    </button> */}
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default GetMyRide;
