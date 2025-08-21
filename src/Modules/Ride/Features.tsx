// src/pages/Features01Page.tsx
import {
    Car,
    Clock,
    CreditCard,
    MapPin,
    ShieldCheck,
    Users,
} from 'lucide-react';

const features = [
    {
        icon: Car,
        title: 'Wide Range of Vehicles',
        description:
            'Choose from budget rides to premium cars—perfect for every occasion and budget.',
    },
    {
        icon: ShieldCheck,
        title: 'Safety First',
        description:
            'All drivers are verified and trained, ensuring secure and comfortable rides every time.',
    },
    {
        icon: MapPin,
        title: 'Real-Time Tracking',
        description:
            'Track your ride live on the map and share your trip details with friends or family.',
    },
    {
        icon: CreditCard,
        title: 'Multiple Payment Options',
        description:
            'Pay easily with cash, cards, or mobile wallets—flexible and convenient for everyone.',
    },
    {
        icon: Clock,
        title: '24/7 Availability',
        description:
            'Book a ride anytime, anywhere—our drivers are always ready when you are.',
    },
    {
        icon: Users,
        title: 'Ride Sharing & Pooling',
        description:
            'Save money and reduce emissions by sharing rides with other passengers going your way.',
    },
];

const Features = () => {
    return (
        <div className='min-h-screen flex items-center justify-center py-12 bg-background'>
            <div className='w-full'>
                {/* Section Heading */}
                <h2 className='text-4xl sm:text-5xl font-bold tracking-tight text-center'>
                    Why Choose <span className='text-primary'>RideShareX</span>?
                </h2>
                <p className='text-center text-foreground/70 mt-3 text-lg'>
                    Experience safe, reliable, and affordable rides—anytime,
                    anywhere.
                </p>

                {/* Features Grid */}
                <div className='mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-lg mx-auto px-6'>
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className='flex flex-col border rounded-2xl py-6 px-5 shadow-sm hover:shadow-lg transition'
                        >
                            <div className='mb-3 h-12 w-12 flex items-center justify-center bg-primary/10 rounded-full'>
                                <feature.icon className='h-6 w-6 text-primary' />
                            </div>
                            <span className='text-lg font-semibold'>
                                {feature.title}
                            </span>
                            <p className='mt-2 text-foreground/80 text-[15px] leading-relaxed'>
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features;
