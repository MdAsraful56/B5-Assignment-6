const FAQ = () => {
    // const data = [
    //     {
    //         question: 'How do I book a ride?',
    //         answer: "Open the app, set your pickup and drop-off locations, then tap 'Book Ride' to connect with a nearby driver.",
    //     },
    //     {
    //         question: 'Can I schedule a ride in advance?',
    //         answer: 'Yes, you can schedule rides for a specific date and time directly from the app.',
    //     },
    //     {
    //         question: 'How is the fare calculated?',
    //         answer: 'The fare is calculated based on distance, time, and traffic conditions. An estimated fare is shown before confirming the ride.',
    //     },
    //     {
    //         question: 'How can I pay for my ride?',
    //         answer: 'You can pay using cash, mobile payments (bKash, Nagad), or debit/credit cards.',
    //     },
    //     {
    //         question: 'How do I contact my driver?',
    //         answer: 'Once your ride is confirmed, you can call or chat with the driver via the app.',
    //     },
    //     {
    //         question: 'What happens if I cancel my ride?',
    //         answer: 'If you cancel early, no fee is charged. Late cancellations may include a small cancellation fee.',
    //     },
    //     {
    //         question: 'How is safety ensured?',
    //         answer: 'All drivers are verified, trips are GPS-tracked, and there is 24/7 support with an in-app SOS button.',
    //     },
    //     {
    //         question: 'Can I add multiple stops?',
    //         answer: 'Yes, you can add multiple stops while booking your ride.',
    //     },
    //     {
    //         question: 'What if I am unhappy with my driver?',
    //         answer: 'You can leave a rating and feedback after the ride, or contact customer support for complaints.',
    //     },
    //     {
    //         question: 'Can I use the app as both rider and driver?',
    //         answer: 'Yes, you can switch between rider and driver modes within the same app.',
    //     },
    // ];

    const data = [
        {
            question: 'How do I book or schedule a ride?',
            answer: "To book a ride, set your pickup and drop-off locations in the app and tap 'Book Ride'. You can also schedule a ride in advance by choosing a specific date and time.",
        },
        {
            question: 'How are fares calculated and how can I pay?',
            answer: 'Fares are based on distance, time, and traffic conditions. The app shows you an estimated fare before confirming. Payments can be made via cash, mobile wallets (bKash, Nagad), or debit/credit cards.',
        },
        {
            question: 'How do I contact the driver and what if I cancel?',
            answer: 'After booking, you can call or chat with the driver directly through the app. If you cancel early, no fee is charged, but last-minute cancellations may include a small fee.',
        },
        {
            question: 'What about safety and rider/driver experience?',
            answer: 'All drivers are verified, trips are GPS-tracked, and an in-app SOS button ensures safety. Riders can add multiple stops, leave ratings and feedback, and even switch between rider and driver modes in the same app.',
        },
    ];

    console.log(data);

    return (
        <div>
            <div className='flow-root'>
                <h2 className='text-2xl font-bold m-4 text-center'>
                    Frequently Asked Questions
                </h2>
                <div className='-my-4 flex flex-col divide-y divide-gray-200 dark:divide-gray-700'>
                    {data.map((item, index) => (
                        <details
                            key={index}
                            className='group py-4 [&_summary::-webkit-details-marker]:hidden'
                        >
                            <summary className='flex items-center justify-between gap-1.5 text-gray-900 dark:text-white'>
                                <h2 className='text-lg font-medium'>
                                    {item.question}
                                </h2>

                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='block size-5 shrink-0 group-open:hidden'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                    strokeWidth='2'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                                    />
                                </svg>

                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='hidden size-5 shrink-0 group-open:block'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                    strokeWidth='2'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                                    />
                                </svg>
                            </summary>

                            <p className='pt-4 text-gray-900 dark:text-white'>
                                {item.answer}
                            </p>
                        </details>
                    ))}

                    {/* <details className='group py-4 [&_summary::-webkit-details-marker]:hidden'>
                        <summary className='flex items-center justify-between gap-1.5 text-gray-900 dark:text-white'>
                            <h2 className='text-lg font-medium'>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing?
                            </h2>

                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='block size-5 shrink-0 group-open:hidden'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                strokeWidth='2'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                                />
                            </svg>

                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='hidden size-5 shrink-0 group-open:block'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                strokeWidth='2'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                                />
                            </svg>
                        </summary>

                        <p className='pt-4 text-gray-900 dark:text-white'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Ab hic veritatis molestias culpa in,
                            recusandae laboriosam neque aliquid libero nesciunt
                            voluptate dicta quo officiis explicabo consequuntur
                            distinctio corporis earum similique!
                        </p>
                    </details> */}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
