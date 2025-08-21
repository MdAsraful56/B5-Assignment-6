import type { ReactNode } from 'react';
import Footer from '../components/Components/Footer';
import Navbar from '../components/Components/Navbar';

interface IProps {
    children: ReactNode;
}

export default function CommonLayout({ children }: IProps) {
    return (
        <div className=' min-h-screen flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <Navbar />
            <div className='grow-1'>{children}</div>
            <Footer />
        </div>
    );
}
