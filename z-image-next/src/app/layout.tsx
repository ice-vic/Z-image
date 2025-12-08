import { Inter } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Z-Image - 6B参数，8步成画，RTX 3060也能跑的AI生图神器',
  description: 'Z-Image是新一代AI图像生成模型，拥有60亿参数，仅需8步推理即可生成高质量图像。支持消费级显卡，RTX 3060也能流畅运行。开源可商用，API兼容Stable Diffusion。',
  keywords: 'AI图像生成, Z-Image, 文生图, 图像生成, 人工智能, 消费级显卡, RTX 3060, 开源模型',
  authors: [{ name: 'Z-Image Team' }],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body className={inter.className}>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Intersection Observer for scroll animations
              const observerOptions = {
                threshold: 0.3,
                rootMargin: '0px 0px -150px 0px'
              };

              const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                  if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                    entry.target.classList.add('animated');
                  }
                });
              }, observerOptions);

              // Observe all elements with the class
              document.addEventListener('DOMContentLoaded', () => {
                const elements = document.querySelectorAll('.animate-on-scroll');
                elements.forEach(el => observer.observe(el));
              });
            `,
          }}
        />
      </body>
    </html>
  );
}