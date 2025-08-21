import { Eye } from 'lucide-react';
import Icon01 from '../../assets/Images/Icon/Icon-01.svg';
import Section from '../../components/Components/Section';
import { Button } from '../../components/ui/button';

const data = [
    {
        id: 1,
        title: 'Hello',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cumque, voluptatum, asperiores, voluptates.',
        image: Icon01,
    },
    {
        id: 2,
        title: 'World',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cumque, voluptatum, asperiores, voluptates.',
        image: Icon01,
    },
    {
        id: 3,
        title: 'React',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cumque, voluptatum,.',
        image: Icon01,
    },
];

const Choose = () => (
    <div className=''>
        <Section
            heading={'Hello, There'}
            description={
                'lorem ralj f ac flf cfl wfs fsarf fnlaks fsfa fa fwrs safl w;afasfkw fs ksafk skc sasa frkfsfasklfsaf'
            }
        />
        <div className='my-20'>
            <div className='p-10 space-y-5 flex flex-col md:flex-row lg:flex-row space-x-4 '>
                {data.map((item) => (
                    <div
                        key={item.id}
                        className='space-y-3 border border-blue-100 rounded-lg p-5 flex flex-1 flex-col'
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className='w-20 h-20 bg-amber-500 rounded-full'
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
