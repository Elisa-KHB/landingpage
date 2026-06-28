import './globals.css';
import { Inter, Cormorant_Garamond } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata = {
  title: '김현빈 | 디지털인문학 & 경영게임 강사',
  description: '융합으로 공부와 학습을 재미있게. 디지털인문학 및 경영게임 강사 김현빈의 개인 소개 및 강의 소개 포트폴리오입니다.',
  keywords: ['김현빈', '디지털인문학', '경영게임', '융합 교육', '학습 시뮬레이션', '인문학 데이터 시각화'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={`${inter.variable} ${cormorantGaramond.variable}`}>
      <body>
        <div className="bg-glow-container">
          <div className="glow-orb-1"></div>
          <div className="glow-orb-2"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
