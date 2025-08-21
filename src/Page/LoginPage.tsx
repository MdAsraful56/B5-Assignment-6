import Lottie from 'lottie-react';
import { LoginForm } from '../Modules/Authentication/LoginForm';
import Login from '../assets/Images/Logo/Login-Animation.json';

const LoginPage = () => {
    return (
        <div>
            <div className='grid min-h-svh lg:grid-cols-2'>
                <div className='flex flex-col gap-4 p-6 md:p-10'>
                    <div className='flex justify-center gap-2 md:justify-start'></div>
                    <div className='flex flex-1 items-center justify-center'>
                        <div className='w-full max-w-xs'>
                            <LoginForm />
                        </div>
                    </div>
                </div>
                <div className='relative  bg-muted rounded-2xl my-10  lg:block'>
                    <Lottie
                        animationData={Login}
                        loop
                        className='absolute inset-0 h-full w-full object-cover dark:brightness-[0.8]'
                    />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
