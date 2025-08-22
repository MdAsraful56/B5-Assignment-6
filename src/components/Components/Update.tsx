import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useEffect, useState } from 'react';

import type { ReactNode } from 'react';

interface IProps {
    children: ReactNode;
    onConfirm: (rideInfo: {
        pickupLocation: string;
        dropLocation: string;
        payment: number;
    }) => void;
    ride: {
        pickupLocation: string;
        dropLocation: string;
        payment: number;
    };
}

export function Update({ children, onConfirm, ride }: IProps) {
    const [pickupLocation, setPickupLocation] = useState('');
    const [dropLocation, setDropLocation] = useState('');
    const [payment, setPayment] = useState('');

    useEffect(() => {
        if (ride) {
            setPickupLocation(ride.pickupLocation || '');
            setDropLocation(ride.dropLocation || '');
            setPayment(String(ride.payment || ''));
        }
    }, [ride]);

    const handleConfirm = () => {
        onConfirm({
            pickupLocation,
            dropLocation,
            payment: Number(payment),
        });
    };

    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className='sm:max-w-[425px]'>
                <DialogHeader>
                    <DialogTitle>Update Ride</DialogTitle>
                    <DialogDescription>
                        Update your ride details here.
                    </DialogDescription>
                </DialogHeader>
                <div className='grid gap-4'>
                    <div className='grid gap-3'>
                        <Label htmlFor='pickupLocation'>Pickup Location</Label>
                        <Input
                            id='pickupLocation'
                            value={pickupLocation}
                            onChange={(e) => setPickupLocation(e.target.value)}
                        />
                    </div>
                    <div className='grid gap-3'>
                        <Label htmlFor='dropLocation'>Drop Location</Label>
                        <Input
                            id='dropLocation'
                            value={dropLocation}
                            onChange={(e) => setDropLocation(e.target.value)}
                        />
                    </div>
                    <div className='grid gap-3'>
                        <Label htmlFor='payment'>Payment</Label>
                        <Input
                            id='payment'
                            type='number'
                            value={payment}
                            onChange={(e) => setPayment(e.target.value)}
                        />
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant='outline'>Cancel</Button>
                    </DialogClose>
                    <Button onClick={handleConfirm}>Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
