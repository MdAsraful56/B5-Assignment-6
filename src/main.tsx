import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import App from './App.tsx';
import './index.css';
import { ThemeProvider } from './Provider/theme-provider.tsx';
import { router } from './Routes/Routes.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
            <RouterProvider router={router} />
            <App />
        </ThemeProvider>
    </StrictMode>
);
