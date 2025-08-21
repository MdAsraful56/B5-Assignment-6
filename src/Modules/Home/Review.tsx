import TestimonialCard from '../../components/Components/TestimonialCard';

const Review = () => {
    const reviews = [
        {
            id: 1,
            name: 'Emily Carter',
            review: 'The team was incredibly professional and attentive. Everything was handled smoothly from start to finish.',
            img: 'https://randomuser.me/api/portraits/women/44.jpg',
        },
        {
            id: 2,
            name: 'Michael Johnson',
            review: 'Fantastic experience! The support staff went above and beyond to make sure I was satisfied with the service.',
            img: 'https://randomuser.me/api/portraits/men/32.jpg',
        },
        {
            id: 3,
            name: 'Sophia Lee',
            review: 'Very reliable and friendly service. I felt valued as a customer and would definitely use them again.',
            img: 'https://randomuser.me/api/portraits/women/65.jpg',
        },
    ];

    return (
        <div className='py-10'>
            <h3 className='text-2xl text-center font-bold mb-6'>Reviews</h3>
            <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center'>
                {reviews.map((review, index) => (
                    <TestimonialCard key={index} review={review} />
                ))}
            </div>
        </div>
    );
};

export default Review;
