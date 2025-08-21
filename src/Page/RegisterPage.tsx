import Lottie from 'lottie-react';
import { RegisterForm } from '../Modules/Authentication/RegisterForm';
import Register from '../assets/Images/Logo/register-Animation.json';

export default function RegisterPage() {
    return (
        <div className='grid min-h-svh lg:grid-cols-2'>
            <div className='relative rounded-2xl my-10 bg-muted lg:block'>
                <Lottie
                    animationData={Register}
                    loop
                    className='absolute inset-0 h-full w-full object-cover dark:brightness-[0.8]'
                />
            </div>
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
