import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ArrowDownRight, Star } from 'lucide-react';

interface Hero3Props {
    heading?: string;
    description?: string;
    buttons?: {
        primary?: {
            text: string;
            url: string;
        };
        secondary?: {
            text: string;
            url: string;
        };
    };
    reviews?: {
        count: number;
        avatars: {
            src: string;
            alt: string;
        }[];
        rating?: number;
    };
}

const HeroSection = ({
    heading = 'RideShareX - Your Smart Ride Partner',
    description = 'Book rides instantly with professional drivers. Safe, fast, and affordable city commuting for everyone.',
    buttons = {
        primary: {
            text: 'Book a Ride',
            url: '/book',
        },
        secondary: {
            text: 'Learn More',
            url: '/about',
        },
    },
    reviews = {
        count: 200,
        rating: 5.0,
        avatars: [
            {
                src: 'https://randomuser.me/api/portraits/women/44.jpg',
                alt: 'Emily Carter',
            },
            {
                src: 'https://randomuser.me/api/portraits/men/32.jpg',
                alt: 'Michael Johnson',
            },
            {
                src: 'https://randomuser.me/api/portraits/women/65.jpg',
                alt: 'Sophia Lee',
            },
            {
                src: 'https://randomuser.me/api/portraits/men/15.jpg',
                alt: 'David Brown',
            },
            {
                src: 'https://randomuser.me/api/portraits/women/22.jpg',
                alt: 'Olivia Wilson',
            },
        ],
    },
}: Hero3Props) => {
    return (
        <section>
            <div className='container grid items-center gap-10 lg:grid-cols-2 lg:gap-20'>
                <div className='mx-auto flex flex-col items-center text-center md:ml-auto lg:max-w-3xl lg:items-start lg:text-left'>
                    <h1 className='my-6 text-pretty text-4xl font-bold lg:text-6xl xl:text-7xl'>
                        {heading}
                    </h1>
                    <p className='text-muted-foreground mb-8 max-w-xl lg:text-xl'>
                        {description}
                    </p>
                    <div className='mb-12 flex w-fit flex-col items-center gap-4 sm:flex-row'>
                        <span className='inline-flex items-center -space-x-4'>
                            {reviews.avatars.map((avatar, index) => (
                                <Avatar key={index} className='size-12 border'>
                                    <AvatarImage
                                        src={avatar.src}
                                        alt={avatar.alt}
                                    />
                                </Avatar>
                            ))}
                        </span>
                        <div>
                            <div className='flex items-center gap-1'>
                                {[...Array(5)].map((_, index) => (
                                    <Star
                                        key={index}
                                        className='size-5 fill-yellow-400 text-yellow-400'
                                    />
                                ))}
                                <span className='mr-1 font-semibold'>
                                    {reviews.rating?.toFixed(1)}
                                </span>
                            </div>
                            <p className='text-muted-foreground text-left font-medium'>
                                from {reviews.count}+ reviews
                            </p>
                        </div>
                    </div>
                    <div className='flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start'>
                        {buttons.primary && (
                            <Button
                                asChild
                                className='w-full sm:w-auto hover:bg-amber-600'
                            >
                                <a href={buttons.primary.url}>
                                    {buttons.primary.text}
                                </a>
                            </Button>
                        )}
                        {buttons.secondary && (
                            <Button asChild variant='outline'>
                                <a href={buttons.secondary.url}>
                                    {buttons.secondary.text}
                                    <ArrowDownRight className='size-4' />
                                </a>
                            </Button>
                        )}
                    </div>
                </div>
                <div className='flex'>
                    <img
                        src='https://files.catbox.moe/pgrq9r.webp'
                        alt='placeholder hero'
                        className='max-h-[700px] w-full rounded-md object-cover lg:max-h-[800px]'
                    />
                </div>
            </div>
        </section>
    );
};

export { HeroSection };
