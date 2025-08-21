import { Link } from 'react-router';
import image from '../../assets/Images/Signup-Image.svg';
import { Button } from '../../components/ui/button';

const LoginSection = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row gap-10 items-center justify-between space-y-6'>
                <div className='flex flex-1 justify-center items-center'>
                    <img
                        src={image}
                        alt='Login Illustration'
                        className='w-full h-auto'
                    />
                </div>
                <div className='space-y-5 flex-1 text-center md:text-left '>
                    <h2 className='text-3xl font-bold mb-4'>
                        Log in to see your account details
                    </h2>
                    <p className='font-semibold'>
                        View past trips, tailored suggestions, support
                        resources, and more.
                    </p>
                    <div className='flex flex-row gap-4 mt-6'>
                        <div className='flex-1'>
                            <Button className='w-full hover:bg-amber-600'>
                                <Link to='/login'>Login in your Account</Link>
                            </Button>
                        </div>
                        <div className='flex-1'>
                            <Button className='w-full hover:bg-amber-600'>
                                <Link to='/register'>Create an Account</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginSection;
