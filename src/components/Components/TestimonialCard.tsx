import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Quote } from 'lucide-react';

type Review = {
    id: number;
    name: string;
    review: string;
    img: string;
};

interface TestimonialCardProps {
    review: Review;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ review }) => {
    if (!review) return null;

    return (
        <Card className='relative w-full max-w-sm bg-muted/70 shadow-md border-none rounded-2xl'>
            <Quote className='absolute top-3 right-2 h-12 w-12 text-foreground/10 stroke-[1.5px]' />
            <CardHeader className='py-5'>
                <div className='flex items-center gap-3'>
                    <Avatar className='h-12 w-12'>
                        <AvatarImage src={review.img} />
                        <AvatarFallback>
                            {review.name.slice(0, 2).toUpperCase()}
                        </AvatarFallback>
                    </Avatar>
                    <div className='flex flex-col gap-1'>
                        <span className='text-[15px] leading-none font-semibold'>
                            {review.name}
                        </span>
                        <span className='text-sm leading-none text-muted-foreground'>
                            @{review.name.toLowerCase().replace(/\s+/g, '')}
                        </span>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <p className='text-[15px] text-muted-foreground'>
                    {review.review}
                </p>
            </CardContent>
        </Card>
    );
};

export default TestimonialCard;
