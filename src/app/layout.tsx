import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ReactNode } from 'react';
import ClientProvider from './ClientProvider';
import '@styles/reset.min.css';

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
});

export const metadata: Metadata = {
  title: '키토리',
  description:
    '키캡, 스위치, 하우징을 자유롭게 선택하고 조합하여 자신만의 키보드를 만들어 보세요.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: '키토리 - 나만의 키보드 만들기',
    description:
      '키캡, 스위치, 하우징을 자유롭게 선택하고 조합하여 자신만의 키보드를 만들어 보세요.',
    url: 'https://keytory.vercel.app',
    siteName: '키토리',
    images: [
      {
        url: '/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: '키토리 - 나만의 키보드 만들기',
      },
    ],
    type: 'website',
    locale: 'ko_KR',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={pretendard.className}>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
