import CustomProvider from '../components/wrapper';

import { Inter } from 'next/font/google';


const inter = Inter({ subsets: ['latin'] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <CustomProvider>
          {/* <ProtectedRouteWrapper> */}
          {children}
          {/* </ProtectedRouteWrapper> */}
        </CustomProvider>
      </body>
    </html>
  );
}
