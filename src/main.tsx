import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { RouterProvider } from 'react-router';
import { Toaster } from 'sonner';
import './index.css';
import { ThemeProvider } from './Provider/theme-provider.tsx';
import { store } from './Redux/store.ts';
import { router } from './Routes/Routes.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ReduxProvider store={store}>
            <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
                <RouterProvider router={router} />
                <Toaster richColors />
            </ThemeProvider>
        </ReduxProvider>
    </StrictMode>
);
