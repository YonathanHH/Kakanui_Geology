import type { Metadata } from 'next';
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' });

export const metadata: Metadata = {
  title: 'GEOL351 Field Project | Volcanological History of Oamaru',
  description: 'Digital case study and field report exploring the geological evolution and volcanological history of the Waitaki Basin and Oamaru Area.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(
        inter.variable, 
        playfair.variable, 
        jetbrainsMono.variable,
        'font-sans antialiased min-h-screen flex flex-col justify-start sm:p-6 lg:p-8 bg-[#E5E5E5]'
      )}>
        <div className="w-full max-w-[1240px] mx-auto border-[12px] border-geo-border bg-geo-bg flex flex-col min-h-[calc(100vh-3rem)]">
          <Navbar />
          <main className="flex-1 w-full bg-geo-bg">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
