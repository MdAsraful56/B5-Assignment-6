import Lottie from 'lottie-react';
import { RegisterForm } from '../Modules/Authentication/RegisterForm';
import Register from '../assets/Images/Logo/register-Animation.json';

export default function RegisterPage() {
    return (
        <div className='grid min-h-screen lg:grid-cols-2'>
            {/* Left Side - Animation */}
            <div className='flex items-center justify-center bg-muted rounded-2xl p-4'>
                <Lottie
                    animationData={Register}
                    loop
                    className='w-full max-w-md h-auto object-contain dark:brightness-90'
                />
            </div>

            {/* Right Side - Register Form */}
            <div className='flex flex-col gap-4 p-6 md:p-10'>
                <div className='flex justify-center gap-2 md:justify-start'></div>
                <div className='flex flex-1 items-center justify-center'>
                    <div className='w-full max-w-xs'>
                        <RegisterForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
