import { Eye } from 'lucide-react';
import Icon01 from '../../assets/Images/Icon/Icon (1).svg';
import Icon02 from '../../assets/Images/Icon/Icon (2).svg';
import Icon03 from '../../assets/Images/Icon/Icon (3).svg';
import Section from '../../components/Components/Section';
import { Button } from '../../components/ui/button';

const data = [
    {
        id: 1,
        title: 'Fair Prices',
        description:
            'Transparent and affordable fares with no hidden charges. Pay only for what you ride, with competitive pricing for every.',
        image: Icon02,
    },
    {
        id: 2,
        title: 'Verified Drivers',
        description:
            'All our drivers are background-checked, licensed, and trained to ensure your safety and comfort during every ride.',
        image: Icon01,
    },
    {
        id: 3,
        title: 'Luxury Cars',
        description:
            'Choose from a wide range of premium vehicles for a smooth, stylish, and comfortable ride experience.',
        image: Icon03,
    },
];

const Choose = () => (
    <div className=''>
        <Section
            heading='Connecting You to Your Destination'
            description='
    Welcome to RideShareX – your reliable ride partner!
    Book rides instantly with verified drivers, enjoy comfortable journeys, and reach your destination safely and on time.'
        />

        <div className='container mx-auto max-w-7xl'>
            <div className='p-10 space-y-5 flex flex-col md:flex-row lg:flex-row space-x-4 '>
                {data.map((item) => (
                    <div
                        key={item.id}
                        className='space-y-3 p-5 border h-[320px] border-blue-100 hover:border-amber-500 rounded-lg flex flex-1 flex-col'
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className='w-20 h-20 p-5 bg-amber-500 rounded-full'
                        />
                        <h3 className='text-lg font-semibold'>{item.title}</h3>
                        <p className='text-muted-foreground font-semibold'>
                            {item.description}
                        </p>
                        <Button className='hover:bg-amber-600'>
                            <Eye />
                            See More
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default Choose;
