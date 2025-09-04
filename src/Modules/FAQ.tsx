import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

const items = [
    {
        id: '1',
        title: 'How do I book or schedule a ride?',
        content:
            "To book a ride, set your pickup and drop-off locations in the app and tap 'Book Ride'. You can also schedule a ride in advance by choosing a specific date and time.",
    },
    {
        id: '2',
        title: 'How are fares calculated and how can I pay?',
        content:
            'Fares are based on distance, time, and traffic conditions. The app shows you an estimated fare before confirming. Payments can be made via cash, mobile wallets (bKash, Nagad), or debit/credit cards.',
    },
    {
        id: '3',
        title: 'How do I contact the driver and what if I cancel?',
        content:
            'After booking, you can call or chat with the driver directly through the app. If you cancel early, no fee is charged, but last-minute cancellations may include a small fee.',
    },
    {
        id: '4',
        title: 'What about safety and rider/driver experience?',
        content:
            'All drivers are verified, trips are GPS-tracked, and an in-app SOS button ensures safety. Riders can add multiple stops, leave ratings and feedback, and even switch between rider and driver modes in the same app.',
    },
    {
        id: '5',
        title: 'Can I share my ride with others?',
        content:
            'Yes, the app allows you to share a ride with friends or family. You can invite others to join your trip, and fares will be split automatically.',
    },
    {
        id: '6',
        title: 'Is there a loyalty or rewards program?',
        content:
            'Yes, frequent riders earn points for every ride, which can be redeemed for discounts or free rides. Check the app’s "Rewards" section for details.',
    },
    {
        id: '7',
        title: 'What if I lose an item in the car?',
        content:
            'If you leave something in the vehicle, contact the driver through the app immediately. You can also reach out to support to help recover your item.',
    },
    {
        id: '8',
        title: 'Can I book rides for someone else?',
        content:
            'Yes, you can book a ride for another person by entering their pickup and drop-off locations. The driver will contact the person directly if needed.',
    },
    {
        id: '9',
        title: 'Are pets allowed in the rides?',
        content:
            'Small pets in carriers are allowed. Make sure to mention your pet in the booking so the driver is prepared.',
    },
    {
        id: '10',
        title: 'How do I report an issue or give feedback?',
        content:
            'You can report issues or leave feedback directly in the app under "Help & Support." This ensures the team can take action quickly.',
    },
    {
        id: '11',
        title: 'Can I schedule recurring rides?',
        content:
            'Yes, you can set up recurring rides for daily commutes or regular trips. Choose the frequency and time in the scheduling section of the app.',
    },
    {
        id: '12',
        title: 'Is the app available in multiple languages?',
        content:
            'Yes, the app supports multiple languages. You can change your preferred language in the settings.',
    },
];

// const data = [
//     {
//         id: '1',
//         title: 'How do I book or schedule a ride?',
//         content:
//             "To book a ride, set your pickup and drop-off locations in the app and tap 'Book Ride'. You can also schedule a ride in advance by choosing a specific date and time.",
//     },
//     {
//         id: '2',
//         title: 'How are fares calculated and how can I pay?',
//         content:
//             'Fares are based on distance, time, and traffic conditions. The app shows you an estimated fare before confirming. Payments can be made via cash, mobile wallets (bKash, Nagad), or debit/credit cards.',
//     },
//     {
//         id: '3',
//         title: 'How do I contact the driver and what if I cancel?',
//         content:
//             'After booking, you can call or chat with the driver directly through the app. If you cancel early, no fee is charged, but last-minute cancellations may include a small fee.',
//     },
//     {
//         id: '4',
//         title: 'What about safety and rider/driver experience?',
//         content:
//             'All drivers are verified, trips are GPS-tracked, and an in-app SOS button ensures safety. Riders can add multiple stops, leave ratings and feedback, and even switch between rider and driver modes in the same app.',
//     },
// ];

export default function FAQ() {
    return (
        <div className='space-y-4'>
            <h2 className='text-2xl mt-5 font-bold text-center py-3'>
                Frequently Asked Questions
            </h2>
            <Accordion
                type='single'
                collapsible
                className='w-full space-y-2'
                defaultValue='3'
            >
                {items.map((item) => (
                    <AccordionItem
                        value={item.id}
                        key={item.id}
                        className='bg-background has-focus-visible:border-ring has-focus-visible:ring-ring/50 rounded-md border px-4 py-1 outline-none last:border-b has-focus-visible:ring-[3px]'
                    >
                        <AccordionTrigger className='py-2 text-[15px] leading-6 hover:no-underline focus-visible:ring-0'>
                            {item.title}
                        </AccordionTrigger>
                        <AccordionContent className='text-muted-foreground pb-2'>
                            {item.content}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}
