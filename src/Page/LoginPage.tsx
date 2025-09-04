import Lottie from 'lottie-react';
import { LoginForm } from '../Modules/Authentication/LoginForm';
import Login from '../assets/Images/Logo/Login-Animation.json';

const LoginPage = () => {
    return (
        <div className='grid min-h-screen lg:grid-cols-2'>
            {/* Left Side - Login Form */}
            <div className='flex flex-col gap-4 p-6 md:p-10'>
                <div className='flex justify-center gap-2 md:justify-start'></div>
                <div className='flex flex-1 items-center justify-center'>
                    <div className='w-full max-w-xs'>
                        <LoginForm />
                    </div>
                </div>
            </div>

            {/* Right Side - Animation */}
            <div className='flex items-center justify-center bg-muted rounded-2xl p-4'>
                <Lottie
                    animationData={Login}
                    loop
                    className='w-full max-w-md h-auto object-contain dark:brightness-90'
                />
            </div>
        </div>
    );
};

export default LoginPage;
