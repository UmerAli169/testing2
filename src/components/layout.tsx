import CustomProvider from './wrapper';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <CustomProvider>{children}</CustomProvider>
    </html>
  );
}
