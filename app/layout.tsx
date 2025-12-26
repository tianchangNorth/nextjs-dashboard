import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import {PocketMockProvider} from './pocker-mocker-provider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <PocketMockProvider/>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}