import { Inter } from 'next/font/google';
import './globals.css';
import { AuthProvider } from './Providers';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Sports Booking',
    description: 'Sports booking dashboard application',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <AuthProvider>{children}</AuthProvider>
            </body>
        </html>
    );
}
