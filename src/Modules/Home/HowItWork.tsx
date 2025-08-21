import { CarFront, Fingerprint, MapPinned, ShieldCheck } from 'lucide-react';
import { Button } from '../../components/ui/button';

const HowItWork = () => {
    return (
        <div className='flex Lg:flex-row md:flex-row flex-col gap-10 items-center justify-center py-32'>
            {/* first div section  */}
            <div className='flex flex-1 flex-col gap-5 p-2 space-y-5'>
                <h2 className='text-2xl font-semibold text-center'>
                    How it's Work
                </h2>
                <p className=' font-semibold'>
                    Booking a ride with our app is simpler than ever. Just enter
                    your destination, choose your preferred vehicle, and a
                    driver will be on their way in moments. Your safety and
                    comfort are our top priorities.
                </p>
                <Button>Read More</Button>
            </div>
            {/* second div section  */}
            <div className='flex flex-1 flex-col gap-5 p-2'>
                <div className='flex gap-8 p-2 items-center justify-center border rounded-lg border-amber-50 hover:border-amber-400'>
                    <div className=''>
                        <Fingerprint
                            className='hover:bg-amber-500 border border-orange-400 rounded-full p-2'
                            size={'60px'}
                        />
                    </div>
                    <div className='space-y-2'>
                        <h3 className='text-xl font-semibold'>
                            Book in Just 2 Taps
                        </h3>
                        <p className='font-semibold'>
                            Open the app, set your pickup and drop-off
                            locations, and confirm your ride in seconds.
                        </p>
                    </div>
                </div>
                <div className='flex gap-8 p-2 items-center justify-center border rounded-lg border-amber-50 hover:border-amber-400'>
                    <div className=''>
                        <CarFront
                            className='hover:bg-amber-500 border border-orange-400 rounded-full p-2'
                            size={'60px'}
                        />
                    </div>
                    <div className='space-y-2'>
                        <h3 className='text-xl font-semibold'> Get a Cab</h3>
                        <p className='font-semibold'>
                            Choose from a variety of vehicles—standard, premium,
                            or shared rides—based on your budget and comfort.
                        </p>
                    </div>
                </div>
                <div className='flex gap-8 p-2 items-center justify-center border rounded-lg border-amber-50 hover:border-amber-400'>
                    <div className=''>
                        <MapPinned
                            className='hover:bg-amber-500 border border-orange-400 rounded-full p-2'
                            size={'60px'}
                        />
                    </div>
                    <div className='space-y-2'>
                        <h3 className='text-xl font-semibold'>
                            Track Your Driver
                        </h3>
                        <p className='font-semibold'>
                            See your driver’s live location, estimated arrival
                            time, and trip details in real-time.
                        </p>
                    </div>
                </div>
                <div className='flex gap-8 p-2 items-center justify-center border rounded-lg border-amber-50 hover:border-amber-400'>
                    <div className=''>
                        <ShieldCheck
                            className='hover:bg-amber-500 border border-orange-400 rounded-full p-2'
                            size={'60px'}
                        />
                    </div>
                    <div className='space-y-2'>
                        <h3 className='text-xl font-semibold'>Arrive Safely</h3>
                        <p className='font-semibold'>
                            Enjoy a smooth, secure journey with verified drivers
                            and 24/7 customer support.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWork;
