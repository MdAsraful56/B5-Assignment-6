import { Home } from 'lucide-react';
import { useNavigate } from 'react-router';
import { Button } from '../components/ui/button';

const NavigateHome = () => {
    const navigate = useNavigate();

    const handleBackToHome = () => {
        navigate('/');
    };

    return (
        <div className='w-full flex justify-center mt-6'>
            <Button
                variant='outline'
                size='lg'
                className='flex items-center gap-2 rounded-full shadow-md hover:shadow-lg hover:bg-primary hover:text-white transition-all duration-300'
                onClick={handleBackToHome}
            >
                <Home className='h-5 w-5' />
                <span className='font-medium'>Back to Home</span>
            </Button>
        </div>
    );
};

export default NavigateHome;
