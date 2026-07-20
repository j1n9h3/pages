import { RootProvider } from 'fumadocs-ui/provider/next';
import { Banner } from 'fumadocs-ui/components/banner';
import './global.css';
import { Inter } from 'next/font/google';
import 'katex/dist/katex.css';

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${inter.className} dark`} style={{ colorScheme: 'dark' }} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen overflow-y-scroll">
        {/* <Banner id='1' changeLayout={false}></Banner> */}
        <RootProvider
          search={{ enabled: false }}
          theme={{ enabled: false }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
