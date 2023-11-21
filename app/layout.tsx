import type { Metadata } from 'next';
import { Providers } from './providers';
import { Montserrat } from 'next/font/google';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const font = Montserrat({ subsets: ['vietnamese'] });

export const metadata: Metadata = {
    title: 'Nấc thang tri thức',
    description: 'Nấc thang tri thức',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={font.className}>
                <Providers>
                    <Navbar />
                    {children}
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
